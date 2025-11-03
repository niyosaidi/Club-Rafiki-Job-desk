import React from 'react';
import { AppMode } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { IllustrationCvBuilder, IllustrationLetterWriter, IllustrationInterviewPrep, IllustrationCvReview, IllustrationLetterReview, IllustrationBusinessIdea } from './icons';

interface HomeScreenProps {
  setMode: (mode: AppMode) => void;
}

const services = [
  { 
    mode: AppMode.CV_BUILDER, 
    icon: <IllustrationCvBuilder />, 
  },
  { 
    mode: AppMode.CV_REVIEW, 
    icon: <IllustrationCvReview />, 
  },
  { 
    mode: AppMode.LETTER_WRITER, 
    icon: <IllustrationLetterWriter />, 
  },
  { 
    mode: AppMode.LETTER_REVIEW, 
    icon: <IllustrationLetterReview />,
  },
  { 
    mode: AppMode.INTERVIEW_PREP, 
    icon: <IllustrationInterviewPrep />,
  },
  { 
    mode: AppMode.VENTURE_LAUNCHPAD, 
    icon: <IllustrationBusinessIdea />,
  },
];

export default function HomeScreen({ setMode }: HomeScreenProps): React.ReactNode {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-50 dark:bg-slate-900 p-8 text-center overflow-y-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight">
          {t.modeDetails[AppMode.HOME].title}
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          {t.modeDetails[AppMode.HOME].description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl w-full">
        {services.map(service => (
          <button
            key={service.mode}
            onClick={() => setMode(service.mode)}
            className="group p-8 bg-white dark:bg-slate-950/50 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-black/20 hover:dark:shadow-black/40 border dark:border-slate-800/50 transform hover:-translate-y-2 transition-all duration-300 ease-in-out text-left flex flex-col items-start"
            aria-label={`Start ${t.modeDetails[service.mode].title}`}
          >
            <div className="mb-5">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              {t.modeDetails[service.mode].title}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 flex-grow">
              {t.modeDetails[service.mode].description}
            </p>
            <div className="mt-6 text-rafiki-blue-600 dark:text-rafiki-blue-400 font-semibold group-hover:underline">
                {t.getStarted} &rarr;
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}