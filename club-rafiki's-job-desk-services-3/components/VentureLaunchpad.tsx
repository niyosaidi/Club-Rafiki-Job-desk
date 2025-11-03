import React, { useState } from 'react';
import { AppMode, ChatMessage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import ChatWindow from './ChatWindow';
import { ChevronDownIcon } from './icons';

interface VentureLaunchpadProps {
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  mode: AppMode;
}

const GuideContent: React.FC = () => {
    const { t } = useLanguage();
    const guide = t.jobCreationGuide;

    if (!guide) return null;

    return (
        <div className="p-6 pt-2">
            <section className="mb-10">
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-b border-slate-300 dark:border-slate-700 pb-2 mb-4">{guide.intro.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-3">{guide.intro.p1}</p>
                <p className="text-slate-600 dark:text-slate-300">{guide.intro.p2}</p>
            </section>
            
            <section className="mb-10">
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-b border-slate-300 dark:border-slate-700 pb-2 mb-4">{guide.opportunities.title}</h2>
                <p className="text-slate-600 dark:text-slate-300">{guide.opportunities.p1}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
                        <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3">{guide.prosCons.prosTitle}</h3>
                        <ul className="space-y-3 list-none p-0 m-0">
                            {guide.prosCons.pros.map((item: any, index: number) => (
                                <li key={index} className="text-sm text-slate-600 dark:text-slate-300">
                                    <strong className="block font-semibold text-slate-800 dark:text-slate-100">{item.title}</strong>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-200 dark:border-red-800">
                         <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3">{guide.prosCons.consTitle}</h3>
                         <ul className="space-y-3 list-none p-0 m-0">
                            {guide.prosCons.cons.map((item: any, index: number) => (
                                <li key={index} className="text-sm text-slate-600 dark:text-slate-300">
                                    <strong className="block font-semibold text-slate-800 dark:text-slate-100">{item.title}</strong>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-b border-slate-300 dark:border-slate-700 pb-2 mb-4">{guide.actionPlan.title}</h2>
                <p className="text-slate-600 dark:text-slate-300">{guide.actionPlan.intro}</p>
                <div className="mt-6 space-y-5">
                    {guide.actionPlan.steps.map((step: any, index: number) => (
                        <div key={index} className="p-4 bg-slate-100 dark:bg-slate-800/30 rounded-lg">
                            <h4 className="font-semibold text-slate-800 dark:text-white mb-1">{step.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="mb-10">
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-b border-slate-300 dark:border-slate-700 pb-2 mb-4">{guide.support.title}</h2>
                <p className="text-slate-600 dark:text-slate-300">{guide.support.intro}</p>
            </section>

            <footer className="mt-10 pt-4 border-t border-slate-200 dark:border-slate-700 text-center text-xs text-slate-500 dark:text-slate-400">
                <p><em>{guide.footer.text}</em></p>
            </footer>
        </div>
    );
}


export default function VentureLaunchpad({ messages, onSendMessage, isLoading, mode }: VentureLaunchpadProps): React.ReactNode {
  const { t } = useLanguage();
  const [isGuideOpen, setIsGuideOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900">
      {/* Top Section: Collapsible Guide */}
      <div className="border-b-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex-shrink-0">
        <button
          onClick={() => setIsGuideOpen(!isGuideOpen)}
          className="flex justify-between items-center w-full p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          aria-expanded={isGuideOpen}
          aria-controls="guide-content"
        >
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
            {t.jobCreationGuide.pageTitle}
          </h2>
          <ChevronDownIcon className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${isGuideOpen ? 'rotate-180' : ''}`} />
        </button>
        {isGuideOpen && (
          <div id="guide-content" className="overflow-y-auto max-h-[45vh] lg:max-h-[50vh]">
             <GuideContent />
          </div>
        )}
      </div>

      {/* Bottom Section: Chat Window */}
      <div className="flex-1 flex flex-col min-h-0">
          <ChatWindow 
              messages={messages}
              onSendMessage={onSendMessage}
              isLoading={isLoading}
              mode={mode}
          />
      </div>
    </div>
  );
}
