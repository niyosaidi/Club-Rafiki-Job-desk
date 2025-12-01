
import React, { useState } from 'react';
import { AppMode, ChatMessage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import ChatWindow from './ChatWindow';
import { BookOpenIcon, ChatBubbleLeftRightIcon, LightBulbIcon } from './icons';

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
        <div className="p-6 lg:p-10 space-y-12 pb-20">
            {/* Header */}
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rafiki-blue-100 dark:bg-rafiki-blue-900/30 text-rafiki-blue-700 dark:text-rafiki-blue-300 text-xs font-semibold uppercase tracking-wider">
                    <LightBulbIcon className="w-4 h-4" />
                    Entrepreneurship Guide
                </div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                    {guide.pageTitle}
                </h1>
            </div>

            {/* Intro */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">{guide.intro.title}</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                    <p className="mb-3">{guide.intro.p1}</p>
                    <p>{guide.intro.p2}</p>
                </div>
            </section>
            
            {/* Opportunities */}
            <section>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-3">
                    {guide.opportunities.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">{guide.opportunities.p1}</p>
                <div className="grid grid-cols-1 gap-6">
                    {/* Pros Card */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/30 overflow-hidden">
                         <div className="bg-emerald-100/50 dark:bg-emerald-900/30 px-6 py-4 border-b border-emerald-100 dark:border-emerald-800/30">
                            <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-400">{guide.prosCons.prosTitle}</h3>
                         </div>
                        <ul className="divide-y divide-emerald-100 dark:divide-emerald-800/30">
                            {guide.prosCons.pros.map((item: any, index: number) => (
                                <li key={index} className="p-6 flex flex-col gap-1">
                                    <strong className="text-emerald-900 dark:text-emerald-200 font-semibold">{item.title}</strong>
                                    <span className="text-emerald-700/80 dark:text-emerald-300/70 text-sm">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Cons Card */}
                    <div className="bg-rose-50 dark:bg-rose-950/20 rounded-2xl border border-rose-100 dark:border-rose-800/30 overflow-hidden">
                         <div className="bg-rose-100/50 dark:bg-rose-900/30 px-6 py-4 border-b border-rose-100 dark:border-rose-800/30">
                            <h3 className="text-lg font-bold text-rose-800 dark:text-rose-400">{guide.prosCons.consTitle}</h3>
                         </div>
                         <ul className="divide-y divide-rose-100 dark:divide-rose-800/30">
                            {guide.prosCons.cons.map((item: any, index: number) => (
                                <li key={index} className="p-6 flex flex-col gap-1">
                                    <strong className="text-rose-900 dark:text-rose-200 font-semibold">{item.title}</strong>
                                    <span className="text-rose-700/80 dark:text-rose-300/70 text-sm">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Action Plan */}
            <section>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                    {guide.actionPlan.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8">{guide.actionPlan.intro}</p>
                <div className="space-y-0 relative pl-4">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

                    {guide.actionPlan.steps.map((step: any, index: number) => (
                        <div key={index} className="relative pl-10 pb-8 last:pb-0">
                            {/* Number Bubble */}
                            <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border-2 border-rafiki-blue-500 text-rafiki-blue-600 dark:text-rafiki-blue-400 font-bold flex items-center justify-center shadow-sm z-10">
                                {index + 1}
                            </div>
                            
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">{step.description}</p>
                                {step.points && step.points.length > 0 && (
                                    <ul className="space-y-2 mt-3">
                                        {step.points.map((point: string, pIndex: number) => (
                                            <li key={pIndex} className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rafiki-blue-400 flex-shrink-0"></span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Support */}
            <section className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 lg:p-8">
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">{guide.support.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">{guide.support.intro}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {guide.support.sections.map((section: any, idx: number) => (
                        <div key={idx}>
                             <h5 className="font-semibold text-slate-800 dark:text-white mb-2">{section.title}</h5>
                             <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{section.text}</p>
                             {section.points && (
                                <ul className="list-disc pl-4 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                                    {section.points.map((pt: string, i: number) => <li key={i}>{pt}</li>)}
                                </ul>
                             )}
                        </div>
                    ))}
                </div>
            </section>

            <footer className="pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-xs text-slate-400 dark:text-slate-500">
                <p><em>{guide.footer.text}</em></p>
            </footer>
        </div>
    );
}


export default function VentureLaunchpad({ messages, onSendMessage, isLoading, mode }: VentureLaunchpadProps): React.ReactNode {
  const [activeTab, setActiveTab] = useState<'chat' | 'guide'>('chat');

  return (
    <div className="flex flex-col h-full overflow-hidden bg-slate-50 dark:bg-slate-900">
      
      {/* Mobile Tab Navigation */}
      <div className="lg:hidden flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <button 
            onClick={() => setActiveTab('chat')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === 'chat' 
                ? 'border-rafiki-blue-600 text-rafiki-blue-600 dark:text-rafiki-blue-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
        >
            <ChatBubbleLeftRightIcon className="w-4 h-4" />
            Chat Assistant
        </button>
        <button 
            onClick={() => setActiveTab('guide')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === 'guide' 
                ? 'border-rafiki-blue-600 text-rafiki-blue-600 dark:text-rafiki-blue-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
        >
            <BookOpenIcon className="w-4 h-4" />
            Guide
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
          
          {/* Chat Section */}
          <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
              activeTab === 'chat' ? 'flex' : 'hidden lg:flex'
          }`}>
              <ChatWindow 
                  messages={messages}
                  onSendMessage={onSendMessage}
                  isLoading={isLoading}
                  mode={mode}
              />
          </div>

          {/* Guide Section (Side Panel on Desktop) */}
          <div className={`
              w-full lg:w-[45%] xl:w-[40%] 
              bg-white dark:bg-slate-900 
              border-l border-slate-200 dark:border-slate-800 
              overflow-y-auto custom-scrollbar
              ${activeTab === 'guide' ? 'flex flex-col' : 'hidden lg:flex flex-col'}
          `}>
             <GuideContent />
          </div>
      </div>
    </div>
  );
}
