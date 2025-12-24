
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowTopRightOnSquareIcon, BriefcaseIcon, BookOpenIcon, LightBulbIcon } from './icons';

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, url }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col h-full">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rafiki-blue-600 dark:group-hover:text-rafiki-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-rafiki-blue-600 hover:bg-rafiki-blue-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
      >
        {t.jobInformation.visitSite}
        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
      </a>
    </div>
  );
};

export default function JobInformation(): React.ReactNode {
  const { t } = useLanguage();
  const info = t.jobInformation;

  return (
    <div className="flex flex-col h-full overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-slate-900 p-6 lg:p-12">
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rafiki-blue-100 dark:bg-rafiki-blue-900/30 text-rafiki-blue-700 dark:text-rafiki-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <BriefcaseIcon className="w-4 h-4" />
          Employment Opportunities
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {t.modeDetails.JOB_INFORMATION.title}
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl">
          {t.modeDetails.JOB_INFORMATION.description}
        </p>
      </header>

      <div className="space-y-12 pb-12">
        {/* Government Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-rafiki-blue-100 dark:bg-rafiki-blue-900/30 rounded-lg text-rafiki-blue-600 dark:text-rafiki-blue-400">
               <BriefcaseIcon className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">{info.categories.public}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              title={info.platforms.mifotra.title} 
              description={info.platforms.mifotra.description} 
              url="https://recruitment.mifotra.gov.rw/"
            />
          </div>
        </section>

        {/* Private Sector Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
               <BriefcaseIcon className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">{info.categories.private}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              title={info.platforms.jobinrwanda.title} 
              description={info.platforms.jobinrwanda.description} 
              url="https://www.jobinrwanda.com/"
            />
            <ResourceCard 
              title={info.platforms.kora.title} 
              description={info.platforms.kora.description} 
              url="https://jobportal.kora.rw/"
            />
            <ResourceCard 
              title={info.platforms.mucuruzi.title} 
              description={info.platforms.mucuruzi.description} 
              url="https://mucuruzi.com/"
            />
            <ResourceCard 
              title={info.platforms.opportunity.title} 
              description={info.platforms.opportunity.description} 
              url="https://opportunity.ini.rw/"
            />
          </div>
        </section>

        {/* Internships & Training */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-400">
               <LightBulbIcon className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">{info.categories.internships}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              title={info.platforms.internship.title} 
              description={info.platforms.internship.description} 
              url="https://internship.rw/accounts/login/?next=/account_check/"
            />
          </div>
        </section>

        {/* Scholarships */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg text-violet-600 dark:text-violet-400">
               <BookOpenIcon className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">{info.categories.scholarships}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              title={info.platforms.scholarship.title} 
              description={info.platforms.scholarship.description} 
              url="https://www.hec.gov.rw/updates/scholarships"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
