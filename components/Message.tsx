
import React from 'react';
import type { ChatMessage } from '../types';
import { RafikiIcon, UserIcon } from './icons';

interface MessageProps {
  message: ChatMessage;
}

// A more robust Markdown renderer that handles bold text and unordered lists.
const MarkdownRenderer: React.FC<{ text: string }> = ({ text }) => {
  const renderInline = (line: string) => {
    const parts = line.split(/(\*\*.*?\*\*)/g).filter(part => part);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const elements: JSX.Element[] = [];
  const listItems: JSX.Element[] = [];
  const lines = text.split('\n');

  const flushList = (key: string | number) => {
    if (listItems.length > 0) {
      elements.push(<ul key={`ul-${key}`} className="list-disc pl-5">{...listItems}</ul>);
      listItems.length = 0; // Clear the array
    }
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
      listItems.push(<li key={`li-${index}`}>{renderInline(trimmedLine.substring(2))}</li>);
    } else {
      flushList(index);
      if (trimmedLine) {
        elements.push(<p key={`p-${index}`}>{renderInline(line)}</p>);
      }
    }
  });

  flushList('last'); // Flush any remaining list items at the end

  // Render a non-breaking space if the message is empty to maintain bubble height during streaming
  return <>{elements.length > 0 ? elements : <p>{'\u00A0'}</p>}</>;
};


export default function Message({ message }: MessageProps): React.ReactNode {
  const isModel = message.role === 'model';

  return (
    <div className={`flex items-start gap-4 ${isModel ? 'justify-start' : 'justify-end'}`}>
      {isModel && (
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rafiki-blue-500 to-rafiki-blue-600 flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-rafiki-blue-500/30">
          <RafikiIcon className="w-5 h-5"/>
        </div>
      )}
      <div
        className={`rounded-2xl p-4 max-w-2xl prose prose-slate dark:prose-invert prose-p:my-2 prose-ul:my-2 ${
          isModel
            ? 'bg-slate-200/60 dark:bg-slate-800 rounded-tl-none'
            : 'bg-rafiki-blue-600 text-white rounded-br-none prose-strong:text-white'
        }`}
      >
        <MarkdownRenderer text={message.text} />
      </div>
       {!isModel && (
        <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center text-slate-500 dark:text-slate-300">
           <UserIcon />
        </div>
      )}
    </div>
  );
}