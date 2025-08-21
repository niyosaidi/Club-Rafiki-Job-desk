
import React, { useState, useEffect, useCallback } from 'react';
import type { Chat } from '@google/genai';
import { AppMode, ChatMessage } from './types';
import { createChatSession } from './services/geminiService';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import HomeScreen from './components/HomeScreen';
import { useLanguage } from './contexts/LanguageContext';

export default function App(): React.ReactNode {
  const { language, t } = useLanguage();
  const [mode, setMode] = useState<AppMode>(AppMode.HOME);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initializeChat = useCallback((currentMode: AppMode) => {
    // If returning to the home screen, clear the chat session.
    if (currentMode === AppMode.HOME) {
      setChatSession(null);
      setMessages([]);
      return;
    }

    // For other modes, create a new chat session but don't send a message.
    // This avoids the initialization error by waiting for the user to send the first message.
    try {
      const session = createChatSession(t.systemInstructions[currentMode]);
      setChatSession(session);
      setMessages([]); // Clear any previous messages
      setIsLoading(false); // Ensure loading is reset
    } catch (error) {
        console.error("Failed to create chat session:", error);
        setMessages([{ role: 'model', text: "Sorry, I couldn't start our session. Please check your API key and network connection." }]);
    }
  }, [t]);

  useEffect(() => {
    initializeChat(mode);
  }, [mode, language, initializeChat]);

  const handleSendMessage = async (userInput: string) => {
    if (!chatSession) return;

    setIsLoading(true);
    const userMessage: ChatMessage = { role: 'user', text: userInput };
    // Add user message, which will trigger the loading indicator in ChatWindow
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      const stream = await chatSession.sendMessageStream({ message: userInput });
      
      let text = '';
      let isFirstChunk = true;
      for await (const chunk of stream) {
        text += chunk.text;
        
        if (isFirstChunk) {
            // On the first chunk, add the new model message to the array.
            // This replaces the loading indicator with the message bubble.
            setMessages(prev => [...prev, { role: 'model', text: text }]);
            isFirstChunk = false;
        } else {
            // On subsequent chunks, update the last message.
            setMessages(prev => {
                const newMessages = [...prev];
                if (newMessages.length > 0) {
                  newMessages[newMessages.length - 1].text = text;
                }
                return newMessages;
            });
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = { role: 'model', text: "Oops! Something went wrong. Please check your API key and network connection, then try again." };
      
      setMessages(prev => {
        // If the last message is a model's (potentially partial), replace it with the error.
        if (prev.length > 0 && prev[prev.length - 1].role === 'model') {
          const newMessages = prev.slice(0, -1);
          return [...newMessages, errorMessage];
        }
        // Otherwise, the last message is the user's, so just append the error.
        return [...prev, errorMessage];
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      <Sidebar currentMode={mode} setMode={setMode} />
      <main className="flex-1 flex flex-col h-screen">
        {mode === AppMode.HOME ? (
          <HomeScreen setMode={setMode} />
        ) : (
          <ChatWindow
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            mode={mode}
          />
        )}
      </main>
    </div>
  );
}
