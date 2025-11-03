
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { AppMode } from '../types';
import Message from './Message';
import { SendIcon, ArrowDownTrayIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, TextRun, Packer as DocxPacker } from 'docx';

interface ChatWindowProps {
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  mode: AppMode;
}

export default function ChatWindow({ messages, onSendMessage, isLoading, mode }: ChatWindowProps): React.ReactNode {
  const { t } = useLanguage();
  const [userInput, setUserInput] = useState('');
  const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const exportMenuRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);
  
  // Close export menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exportMenuRef.current && !exportMenuRef.current.contains(event.target as Node)) {
        setIsExportMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim() && !isLoading) {
      onSendMessage(userInput);
      setUserInput('');
    }
  };

  const lastModelMessage = messages.slice().reverse().find(m => m.role === 'model');
  const canExport = lastModelMessage && 
    (mode === AppMode.CV_BUILDER || 
     mode === AppMode.LETTER_WRITER ||
     mode === AppMode.CV_REVIEW ||
     mode === AppMode.LETTER_REVIEW ||
     mode === AppMode.VENTURE_LAUNCHPAD
    ) && !isLoading;

  const handleExportPdf = async () => {
    const contentElement = document.querySelector('.model-message-wrapper:last-of-type .prose');
    if (!contentElement) {
        console.error("Exportable content not found.");
        return;
    }
    
    setIsExportMenuOpen(false);

    const canvas = await html2canvas(contentElement as HTMLElement, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth - 20, pdfHeight - 20);
    
    let fileName = 'Document.pdf';
    switch (mode) {
      case AppMode.CV_BUILDER:
        fileName = 'CV.pdf';
        break;
      case AppMode.LETTER_WRITER:
        fileName = 'Letter.pdf';
        break;
      case AppMode.CV_REVIEW:
        fileName = 'CV_Review.pdf';
        break;
      case AppMode.LETTER_REVIEW:
        fileName = 'Letter_Review.pdf';
        break;
      case AppMode.VENTURE_LAUNCHPAD:
        fileName = 'Venture_Launchpad.pdf';
        break;
    }
    pdf.save(fileName);
  };
  
  const handleExportDocx = async () => {
    if (!lastModelMessage) return;

    setIsExportMenuOpen(false);

    const markdownToDocx = (markdown: string) => {
        const paragraphs: Paragraph[] = [];
        const lines = markdown.split('\n');

        lines.forEach(line => {
            if (!line.trim()) return;

            if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
                paragraphs.push(new Paragraph({
                    text: line.trim().substring(2),
                    bullet: { level: 0 }
                }));
            } else {
                 const children: TextRun[] = [];
                 const parts = line.split(/(\*\*.*?\*\*)/g).filter(p => p);
                 parts.forEach(part => {
                     if (part.startsWith('**') && part.endsWith('**')) {
                         children.push(new TextRun({ text: part.slice(2, -2), bold: true }));
                     } else {
                         children.push(new TextRun(part));
                     }
                 });
                 paragraphs.push(new Paragraph({ children }));
            }
        });
        return paragraphs;
    };

    const doc = new Document({
      sections: [{
        properties: {},
        children: markdownToDocx(lastModelMessage.text),
      }],
    });
    
    const blob = await DocxPacker.toBlob(doc);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    
    let fileName = 'Document.docx';
    switch (mode) {
      case AppMode.CV_BUILDER:
        fileName = 'CV.docx';
        break;
      case AppMode.LETTER_WRITER:
        fileName = 'Letter.docx';
        break;
      case AppMode.CV_REVIEW:
        fileName = 'CV_Review.docx';
        break;
      case AppMode.LETTER_REVIEW:
        fileName = 'Letter_Review.docx';
        break;
      case AppMode.VENTURE_LAUNCHPAD:
        fileName = 'Venture_Launchpad.docx';
        break;
    }
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
       <header className="px-6 py-4 border-b border-slate-200/80 dark:border-slate-800/50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm sticky top-0 z-10 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{t.modeDetails[mode].title}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">{t.modeDetails[mode].description}</p>
          </div>
          {canExport && (
            <div className="relative" ref={exportMenuRef}>
              <button
                onClick={() => setIsExportMenuOpen(!isExportMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-rafiki-blue-600 text-white rounded-lg hover:bg-rafiki-blue-700 transition-colors shadow-sm disabled:opacity-50"
                aria-haspopup="true"
                aria-expanded={isExportMenuOpen}
              >
                <ArrowDownTrayIcon />
                Export
              </button>
              {isExportMenuOpen && (
                 <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20">
                    <div className="py-1">
                        <button onClick={handleExportPdf} className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">
                            Export as PDF
                        </button>
                        <button onClick={handleExportDocx} className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">
                            Export as Word (.docx)
                        </button>
                    </div>
                 </div>
              )}
            </div>
          )}
      </header>
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, index) => (
          // FIX: Corrected a type error where the `key` prop, necessary for React lists,
          // was being incorrectly validated against the Message component's props. By wrapping
          // Message in a React.Fragment, the key is applied to the fragment, satisfying
          // both React's requirement and the Message component's prop types.
          <React.Fragment key={index}>
            <Message message={msg} />
          </React.Fragment>
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
