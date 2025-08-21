
import React from 'react';
import { AppMode } from '../types';
import { DocumentTextIcon, PencilSquareIcon, ChatBubbleLeftRightIcon, RafikiIcon, GlobeAltIcon, ChevronDownIcon, HomeIcon, DocumentCheckIcon, EnvelopeOpenIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

interface SidebarProps {
  currentMode: AppMode;
  setMode: (mode: AppMode) => void;
}

const navModes = [
  AppMode.HOME,
  AppMode.CV_BUILDER,
  AppMode.CV_REVIEW,
  AppMode.LETTER_WRITER,
  AppMode.LETTER_REVIEW,
  AppMode.INTERVIEW_PREP,
];

const navIcons: Record<AppMode, React.ReactElement> = {
    [AppMode.HOME]: <HomeIcon />,
    [AppMode.CV_BUILDER]: <DocumentTextIcon />,
    [AppMode.CV_REVIEW]: <DocumentCheckIcon />,
    [AppMode.LETTER_WRITER]: <PencilSquareIcon />,
    [AppMode.LETTER_REVIEW]: <EnvelopeOpenIcon />,
    [AppMode.INTERVIEW_PREP]: <ChatBubbleLeftRightIcon />,
};

export default function Sidebar({ currentMode, setMode }: SidebarProps): React.ReactNode {
  const { language, setLanguage, t } = useLanguage();

  return (
    <aside className="w-72 bg-white dark:bg-slate-950 flex flex-col border-r border-slate-200/80 dark:border-slate-800/50 p-6">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-11 h-11 bg-gradient-to-br from-rafiki-blue-500 to-rafiki-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-rafiki-blue-500/30">
            <RafikiIcon className="w-6 h-6 text-white"/>
        </div>
        <h1 className="text-xl font-semibold text-slate-800 dark:text-white tracking-tight">{t.APP_NAME}</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {navModes.map((mode) => (
          <button
            key={mode}
            onClick={() => setMode(mode)}
            className={`flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm transition-colors duration-150 ${
              currentMode === mode
                ? 'bg-rafiki-blue-50 dark:bg-rafiki-blue-500/10 text-rafiki-blue-600 dark:text-rafiki-blue-50 font-semibold shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
            }`}
          >
            {navIcons[mode]}
            <span>{t.navItems[mode]}</span>
          </button>
        ))}
      </nav>
       <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/50">
        <label htmlFor="language-select" className="flex items-center gap-2 px-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
            <GlobeAltIcon className="w-4 h-4" />
            {t.languageSelector}
        </label>
        <div className="relative">
          <select
              id="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-2 pl-3 pr-8 appearance-none rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-rafiki-blue-500 focus:outline-none transition-shadow"
              aria-label={t.languageSelector}
          >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="rw">Ikinyarwanda</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
            <ChevronDownIcon />
          </div>
        </div>
      </div>
      <div className="mt-auto text-center text-xs text-slate-400 dark:text-slate-500">
        <p>{t.copyright}</p>
      </div>
    </aside>
  );
}