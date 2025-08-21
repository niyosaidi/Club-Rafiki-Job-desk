
import React, { useState, useEffect, useCallback } from 'react';
import type { Chat } from '@google/genai';
import { AppMode, ChatMessage } from './types';
import { createChatSession } from './services/geminiService';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import HomeScreen from './components/HomeScreen';
import FileUploadScreen from './components/FileUploadScreen';
import { useLanguage } from './contexts/LanguageContext';

export default function App(): React.ReactNode {
  const { language, t } = useLanguage();
  const [mode, setMode] = useState<AppMode>(AppMode.HOME);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);

  const initializeChat = useCallback((currentMode: AppMode) => {
    // If returning to the home screen, clear the chat session.
    if (currentMode === AppMode.HOME) {
      setChatSession(null);
      setMessages([]);
      return;
    }

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
    setIsFileUploaded(false); // Reset on every mode change
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
            setMessages(prev => [...prev, { role: 'model', text: text }]);
            isFirstChunk = false;
        } else {
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
        const lastMessage = prev[prev.length - 1];
        // If the error occurred after the user message was added but before the model responded,
        // we might not have a model message to replace.
        if (lastMessage?.role === 'user') {
          return [...prev, errorMessage];
        }
        // If there's a partial model message, replace it.
        if (lastMessage?.role === 'model') {
           const newMessages = prev.slice(0, -1);
           return [...newMessages, errorMessage];
        }
        return [...prev, errorMessage];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileParsed = async (text: string) => {
      if (!chatSession) {
          console.error("Chat session not initialized for review mode.");
          setMessages([{ role: 'model', text: "Sorry, the chat session isn't ready. Please try again." }]);
          return;
      }
      setIsFileUploaded(true);
      // Let's not add the full CV text to the chat history, just the AI's response is enough.
      // Instead, we will just send the text to the model and display the response.
      
      setIsLoading(true);
      setMessages([]); // Start with a clean slate for the review

      try {
        const stream = await chatSession.sendMessageStream({ message: text });
        
        let responseText = '';
        let isFirstChunk = true;
        for await (const chunk of stream) {
          responseText += chunk.text;
          
          if (isFirstChunk) {
              setMessages([{ role: 'model', text: responseText }]);
              isFirstChunk = false;
          } else {
              setMessages(prev => [{...prev[0], text: responseText}]);
          }
        }
      } catch (error) {
        console.error("Error sending file content:", error);
        setMessages([{ role: 'model', text: "Oops! Something went wrong while analyzing your document. Please try again." }]);
      } finally {
        setIsLoading(false);
      }
  };

  const isReviewMode = mode === AppMode.CV_REVIEW || mode === AppMode.LETTER_REVIEW;

  return (
    <div className="flex h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      <Sidebar currentMode={mode} setMode={setMode} />
      <main className="flex-1 flex flex-col h-screen">
        {mode === AppMode.HOME ? (
          <HomeScreen setMode={setMode} />
        ) : isReviewMode && !isFileUploaded ? (
           <FileUploadScreen mode={mode} onFileParsed={handleFileParsed} />
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