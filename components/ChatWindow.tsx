
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { AppMode } from '../types';
import Message from './Message';
import { SendIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

interface ChatWindowProps {
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  mode: AppMode;
}

export default function ChatWindow({ messages, onSendMessage, isLoading, mode }: ChatWindowProps): React.ReactNode {
  const { t } = useLanguage();
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim() && !isLoading) {
      onSendMessage(userInput);
      setUserInput('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
       <header className="px-6 py-4 border-b border-slate-200/80 dark:border-slate-800/50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm sticky top-0 z-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{t.modeDetails[mode].title}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t.modeDetails[mode].description}</p>
      </header>
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
        {isLoading && messages[messages.length - 1]?.role === 'user' && (
           <div className="flex justify-start">
             <div className="flex items-center gap-2.5 bg-slate-200 dark:bg-slate-800 rounded-2xl p-4 max-w-xl">
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-slate-200/80 dark:border-slate-800/50 bg-white dark:bg-slate-900/50">
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder={t.placeholder}
            className="w-full p-4 pr-16 rounded-xl border border-slate-300/70 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-rafiki-blue-400 focus:outline-none resize-none transition-shadow"
            rows={1}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !userInput.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full transition-all duration-200
            bg-rafiki-blue-600 text-white hover:bg-rafiki-blue-700
            disabled:bg-slate-300 disabled:dark:bg-slate-600 disabled:cursor-not-allowed
            transform hover:scale-105 active:scale-95"
            aria-label="Send message"
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
}