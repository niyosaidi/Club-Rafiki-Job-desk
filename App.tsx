
import React, { useState, useEffect, useCallback } from 'react';
import type { Chat } from '@google/genai';
import { AppMode, type ChatMessage } from './types';
import { createChatSession } from './services/geminiService';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import HomeScreen from './components/HomeScreen';
import FileUploadScreen from './components/FileUploadScreen';
import { useLanguage } from './contexts/LanguageContext';
import CareerGuidance from './components/CareerGuidance';
import JobInformation from './components/JobInformation';

export default function App(): React.ReactNode {
  const { language, t } = useLanguage();
  const [mode, setMode] = useState<AppMode>(AppMode.HOME);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);

  const initializeChat = useCallback((currentMode: AppMode) => {
    // Non-chat modes
    if (currentMode === AppMode.HOME || currentMode === AppMode.JOB_INFORMATION) {
      setChatSession(null);
      setMessages([]);
      return;
    }

    try {
      const session = createChatSession(t.systemInstructions[currentMode]);
      setChatSession(session);
      
      const welcomeMessage = t.welcomeMessages[currentMode];
      if (welcomeMessage) {
        setMessages([{ role: 'model', text: welcomeMessage }]);
      } else {
        setMessages([]); 
      }
      
      setIsLoading(false); 
    } catch (error) {
        console.error("Failed to create chat session:", error);
        setMessages([{ role: 'model', text: "Sorry, I couldn't start our session. Please check your API key and network connection." }]);
    }
  }, [t]);

  useEffect(() => {
    setIsFileUploaded(false);
    initializeChat(mode);
  }, [mode, language, initializeChat]);

  const handleSendMessage = async (userInput: string) => {
    if (!chatSession) return;

    setIsLoading(true);
    const userMessage: ChatMessage = { role: 'user', text: userInput };
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
      const errorMessage: ChatMessage = { role: 'model', text: "Oops! Something went wrong." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileParsed = async (text: string) => {
      if (!chatSession) return;
      setIsFileUploaded(true);
      setIsLoading(true);
      setMessages([]);

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
        console.error("Error processing file:", error);
      } finally {
        setIsLoading(false);
      }
  };

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-200">
      <Sidebar currentMode={mode} setMode={setMode} />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {mode === AppMode.HOME && <HomeScreen setMode={setMode} />}
        
        {mode === AppMode.CAREER_GUIDANCE && (
          <CareerGuidance
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            mode={mode}
          />
        )}

        {mode === AppMode.JOB_INFORMATION && <JobInformation />}
        
        {(mode === AppMode.CV_REVIEW || mode === AppMode.LETTER_REVIEW) && !isFileUploaded && (
          <FileUploadScreen 
            mode={mode}
            onFileParsed={handleFileParsed}
          />
        )}

        {(
          mode !== AppMode.HOME &&
          mode !== AppMode.CAREER_GUIDANCE &&
          mode !== AppMode.JOB_INFORMATION &&
          !((mode === AppMode.CV_REVIEW || mode === AppMode.LETTER_REVIEW) && !isFileUploaded)
        ) && (
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
