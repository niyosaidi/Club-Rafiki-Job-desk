
import React from 'react';

// Using React.SVGProps for type safety on standard SVG attributes
type IconProps = React.SVGProps<SVGSVGElement>;

export const HomeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

export const DocumentTextIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

export const DocumentCheckIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
  </svg>
);

export const PencilSquareIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
);

export const EnvelopeOpenIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488a2.25 2.25 0 0 1-2.18 0l-6.478-3.488A2.25 2.25 0 0 1 2.25 9.906V9Zm0 0a2.25 2.25 0 0 0-2.25-2.25h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.906c0 .612-.316 1.183-.815 1.518l-6.478 3.488a2.25 2.25 0 0 1-2.18 0l-6.478-3.488A1.875 1.875 0 0 1 2.25 9.906V9m19.5 0a2.25 2.25 0 0 0-2.25-2.25h-15a2.25 2.25 0 0 0-2.25 2.25m15 5.25-3.809 2.034a2.25 2.25 0 0 1-2.18 0l-3.809-2.034" />
  </svg>
);

export const ChatBubbleLeftRightIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72-3.72a1.125 1.125 0 0 0-1.59.022l-1.17 1.17-1.17-1.17a1.125 1.125 0 0 0-1.59-.022l-3.72 3.72-1.98-.99v-4.286c0-.97.616-1.813 1.5-2.097m14.25-3.866-2.25-2.25a1.125 1.125 0 0 0-1.59 0l-1.17 1.17-1.17-1.17a1.125 1.125 0 0 0-1.59 0l-2.25 2.25a1.125 1.125 0 0 0 0 1.59l1.17 1.17-1.17 1.17a1.125 1.125 0 0 0 1.59 0l2.25-2.25a1.125 1.125 0 0 0 0-1.59l-1.17-1.17 1.17-1.17a1.125 1.125 0 0 0 0-1.59Z" />
  </svg>
);

export const PlusCircleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const LightBulbIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.311a7.5 7.5 0 0 1-7.5 0c-1.421-.492-2.697-1.29-3.75-2.311M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const BookOpenIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3.001.507a3.001 3.001 0 2 0 .001 6.002 9.001 9.001 0 0 1 3.003-.868m0-5.632c2.28 0 4.25.9 5.625 2.348 1.375-1.448 3.345-2.348 5.625-2.348 1.052 0 2.062.18 3.001.507.414.14.81.303 1.189.488a3.001 3.001 0 0 1-1.189 5.516 9.001 9.001 0 0 0-3.003-.868m-5.625 15.632c-2.28 0-4.25-.9-5.625-2.348C4.375 19.552 2.405 20.452.125 20.452c-1.052 0-2.062-.18-3.001-.507V15.75c0 .354.02.705.06 1.051.414-.14.81-.303 1.189-.488a3.001 3.001 0 0 1 1.189-5.516 9.001 9.001 0 0 0 3.003.868m5.625 0c2.28 0 4.25.9 5.625 2.348 1.375-1.448 3.345-2.348 5.625-2.348 1.052 0 2.062.18 3.001.507v4.195c-.939.327-1.949.507-3.001.507a9.001 9.001 0 0 1-3.003-.868" />
  </svg>
);

export const ListBulletIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 17.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);

export const RafikiIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);

export const GlobeAltIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c1.358 0 2.662-.331 3.757-.934m-7.514 0A9.007 9.007 0 0 1 12 3c1.358 0 2.662.331 3.757.934m-7.514 0a8.963 8.963 0 0 0-4.042 5.332M12 3c-1.358 0-2.662.331-3.757.934m7.514 0a8.963 8.963 0 0 1 4.042 5.332m-8.084 0a2.25 2.25 0 0 0 0 4.5m4.5-4.5a2.25 2.25 0 0 0 0 4.5m-4.5 0h4.5m-4.5 0a2.25 2.25 0 0 1 0-4.5m0 4.5a2.25 2.25 0 0 0 0-4.5m-4.5 0h4.5" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const SendIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

export const DocumentArrowUpIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.15-3.125 3.375 3.375M11.25 6H8.25m5.25 15-3.375-3.375M13.5 18.75h3.375" />
    </svg>
);

export const ArrowDownTrayIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const IllustrationCvBuilder: React.FC<IconProps> = (props) => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="80" height="80" rx="16" fill="#EFF6FF"/>
    <path d="M22 24C22 22.8954 22.8954 22 24 22H46L58 34V56C58 57.1046 57.1046 58 56 58H24C22.8954 58 22 57.1046 22 56V24Z" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M45 22V35H58" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="30" y1="42" x2="50" y2="42" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round"/>
    <line x1="30" y1="48" x2="44" y2="48" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IllustrationCvReview: React.FC<IconProps> = (props) => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="80" height="80" rx="16" fill="#F5F3FF"/>
    <path d="M22 24C22 22.8954 22.8954 22 24 22H46L58 34V46" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M45 22V35H58" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="30" y1="42" x2="40" y2="42" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round"/>
    <path d="M57 59L52 54" stroke="#34D399" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="48" cy="48" r="9" stroke="#34D399" strokeWidth="3"/>
  </svg>
);

export const IllustrationLetterWriter: React.FC<IconProps> = (props) => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="80" height="80" rx="16" fill="#F0FDF4"/>
    <path d="M22 35H58V54C58 55.1046 57.1046 56 56 56H24C22.8954 56 22 55.1046 22 54V35Z" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M58 35L40 48L22 35" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42 32L54 24" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50.1213 22.1213L55.8787 27.8787C56.2692 28.2692 56.2692 28.9024 55.8787 29.2929L40.5858 44.5858C40.2107 44.9609 39.5858 44.9609 39.2107 44.5858L34.2929 39.668C33.9024 39.2775 33.9024 38.6443 34.2929 38.2538L49.5858 22.9609C49.9609 22.5858 50.5858 22.5858 50.9609 22.9609L50.1213 22.1213Z" fill="#C4B5FD" stroke="#A78BFA" strokeWidth="2"/>
  </svg>
);

export const IllustrationLetterReview: React.FC<IconProps> = (props) => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="80" height="80" rx="16" fill="#F0FDF4"/>
    <path d="M22 35H58V46" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M58 35L40 48L22 35" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M57 59L52 54" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="48" cy="48" r="9" stroke="#A78BFA" strokeWidth="3"/>
  </svg>
);

export const IllustrationInterviewPrep: React.FC<IconProps> = (props) => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="80" height="80" rx="16" fill="#F5F3FF"/>
    <path d="M38 48C38 52.4183 34.4183 56 30 56C25.5817 56 22 52.4183 22 48C22 43.5817 25.5817 40 30 40C30.9836 40 31.9213 40.1654 32.7885 40.4682L42 28" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M58 32C58 27.5817 54.4183 24 50 24C45.5817 24 42 27.5817 42 32C42 36.4183 45.5817 40 50 40C50.9836 40 51.9213 39.8346 52.7885 39.5318L58 44" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IllustrationJobCreation: React.FC<IconProps> = (props) => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="80" height="80" rx="16" fill="#FFFBEB"/>
    <path d="M40 32C44.4183 32 48 35.5817 48 40C48 42.4464 46.8528 44.609 45 45.9614V49C45 49.5523 44.5523 50 44 50H36C35.4477 50 35 49.5523 35 49V45.9614C33.1472 44.609 32 42.4464 32 40C32 35.5817 35.5817 32 40 32Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 50V54" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36 54H44" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 26V28" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 40H30" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 40H52" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M31.0503 31.0503L32.4645 32.4645" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M47.5355 47.5355L48.9497 48.9497" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M48.9497 31.0503L47.5355 32.4645" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32.4645 47.5355L31.0503 48.9497" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IllustrationBusinessIdea: React.FC<IconProps> = (props) => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="80" height="80" rx="16" fill="#FEF3C7"/>
    <path d="M25 55V45L35 50L45 35L55 42V55H25Z" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M55 25H35C32.2386 25 30 27.2386 30 30V32" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42 25L45 22L48 25" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);