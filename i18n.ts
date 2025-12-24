
// FIX: Importing the newly defined types from `types.ts`.
import { AppMode } from './types';
import type { Translations } from './types';

// Language data
export const locales: Record<string, Translations> = {
  en: {
    APP_NAME: "CLUB RAFIKI's Job Desk services",
    languageSelector: "Language",
    navItems: {
      [AppMode.HOME]: 'Home',
      [AppMode.CV_BUILDER]: 'CV Builder',
      [AppMode.CV_REVIEW]: 'CV Review',
      [AppMode.LETTER_WRITER]: 'Letter Writer',
      [AppMode.LETTER_REVIEW]: 'Letter Review',
      [AppMode.INTERVIEW_PREP]: 'Interview Prep',
      [AppMode.CAREER_GUIDANCE]: 'Career Guidance',
      [AppMode.JOB_INFORMATION]: 'Job Information',
    },
    modeDetails: {
      [AppMode.HOME]: { title: "How can I help you today?", description: "Select a service below to get started on your career journey." },
      [AppMode.CV_BUILDER]: { title: 'CV Builder', description: 'Let\'s create a professional CV from scratch.' },
      [AppMode.CV_REVIEW]: { title: 'CV Review', description: 'Upload your existing CV for AI-powered feedback.' },
      [AppMode.LETTER_WRITER]: { title: 'Letter Writer', description: 'Draft a compelling application letter with guidance.' },
      [AppMode.LETTER_REVIEW]: { title: 'Letter Review', description: 'Get your draft letter checked for tone and impact.' },
      [AppMode.INTERVIEW_PREP]: { title: 'Interview Prep', description: 'Practice and build your confidence for interviews.' },
      [AppMode.CAREER_GUIDANCE]: { title: 'Career Guidance', description: 'Develop your business idea with an AI consultant and a step-by-step guide.' },
      [AppMode.JOB_INFORMATION]: { title: 'Job Information', description: 'Access top portals for jobs, internships, and scholarships in Rwanda.' },
    },
    systemInstructions: {
        [AppMode.HOME]: 'This is the home screen.',
        [AppMode.CV_BUILDER]: `System Role: CV Builder Assistant. RESPOND IN ENGLISH.`,
        [AppMode.CV_REVIEW]: `System Role: CV Review Assistant. RESPOND IN ENGLISH.`,
        [AppMode.LETTER_WRITER]: `System Role: Letter Writer Assistant. RESPOND IN ENGLISH.`,
        [AppMode.LETTER_REVIEW]: `System Role: Letter Review Assistant. RESPOND IN ENGLISH.`,
        [AppMode.INTERVIEW_PREP]: `System Role: Interview Prep Assistant. RESPOND IN ENGLISH.`,
        [AppMode.CAREER_GUIDANCE]: `System Role: Business Consultant and Career Advisor. RESPOND IN ENGLISH.`,
        [AppMode.JOB_INFORMATION]: `No chat needed here. Listing external links.`,
    },
    welcomeMessages: {},
    placeholder: "Type your message...",
    copyright: `© ${new Date().getFullYear()} Club Rafiki. All rights reserved.`,
    getStarted: "Get Started",
    fileUploadScreen: {
        title: { 'CV_REVIEW': 'Upload your CV', 'LETTER_REVIEW': 'Upload your Letter' },
        prompt: 'Drag & drop your file here',
        supportedFormats: 'PDF, DOCX',
        uploading: 'Analyzing...',
        error: { default: 'Error parsing file.', fileType: 'Invalid file type.' }
    },
    jobCreationGuide: {
        pageTitle: "Career & Entrepreneurship Journey",
        intro: {
            title: "Start Your Career Path",
            p1: "Career development and entrepreneurship are powerful paths to self-employment and community impact.",
            p2: "This guide will help you navigate the initial steps of launching your venture or advancing your career."
        },
        opportunities: {
            title: "Why Start This Journey?",
            p1: "Rwanda offers a vibrant ecosystem for new entrepreneurs and career professionals."
        },
        prosCons: {
            prosTitle: "Advantages",
            pros: [
                { title: "Independence", text: "You are your own boss." },
                { title: "Impact", text: "Solve problems in your community." }
            ],
            consTitle: "Challenges",
            cons: [
                { title: "Risk", text: "Starting a business involves financial risk." },
                { title: "Hard Work", text: "It requires long hours and dedication." }
            ]
        },
        actionPlan: {
            title: "Action Plan",
            intro: "Follow these steps to build your foundation.",
            steps: [
                { title: "Idea Validation", description: "Identify a problem and solve it.", points: ["Research market", "Identify customers"] },
                { title: "Business Planning", description: "Draft your strategy.", points: ["Define revenue model", "Outline operations"] }
            ]
        },
        support: {
            title: "Resources",
            intro: "Support systems available for you.",
            sections: [
                { title: "Financial Aid", text: "Grants and loans available.", points: ["BDF Rwanda", "Local Banks"] }
            ]
        },
        footer: { text: "Good luck with your career journey!" }
    },
    jobInformation: {
      categories: {
        public: "Government & Public Sector",
        private: "Private Job Portals",
        internships: "Internships & Training",
        scholarships: "Scholarships & Education",
      },
      visitSite: "Visit Website",
      platforms: {
        mifotra: { title: "E-Recruitment (MIFOTRA)", description: "The official portal for Rwanda civil service and public sector jobs." },
        jobinrwanda: { title: "Job in Rwanda", description: "The leading private portal for professional jobs across all sectors." },
        kora: { title: "Kora Job Portal", description: "A comprehensive hub for jobseekers and employers in the Rwandan market." },
        mucuruzi: { title: "Mucuruzi", description: "Daily updates on the latest job vacancies and tenders in Rwanda." },
        opportunity: { title: "Opportunity in Rwanda", description: "Discover diverse professional and growth opportunities." },
        internship: { title: "Rwanda Internship", description: "Connecting students and recent graduates with hands-on experience." },
        scholarship: { title: "Rwanda Scholarship (HEC)", description: "Official updates on domestic and international scholarship opportunities." },
      }
    }
  },
  fr: {
    APP_NAME: "Services du Bureau d'Emploi de CLUB RAFIKI",
    languageSelector: "Langue",
    navItems: {
        [AppMode.HOME]: 'Accueil',
        [AppMode.CV_BUILDER]: 'Créateur de CV',
        [AppMode.CV_REVIEW]: 'Revue de CV',
        [AppMode.LETTER_WRITER]: 'Rédacteur de Lettres',
        [AppMode.LETTER_REVIEW]: 'Revue de Lettre',
        [AppMode.INTERVIEW_PREP]: 'Préparation à l\'entretien',
        [AppMode.CAREER_GUIDANCE]: 'Orientation de carrière',
        [AppMode.JOB_INFORMATION]: 'Infos Emploi',
    },
    modeDetails: {
      [AppMode.HOME]: { title: "Comment puis-je vous aider ?", description: "Sélectionnez un service pour commencer." },
      [AppMode.CV_BUILDER]: { title: 'Créateur de CV', description: 'Créez un CV pro.' },
      [AppMode.CV_REVIEW]: { title: 'Revue de CV', description: 'Analysez votre CV.' },
      [AppMode.LETTER_WRITER]: { title: 'Rédacteur de Lettres', description: 'Rédigez votre lettre.' },
      [AppMode.LETTER_REVIEW]: { title: 'Revue de Lettre', description: 'Vérifiez votre lettre.' },
      [AppMode.INTERVIEW_PREP]: { title: 'Préparation à l\'entretien', description: 'Entraînez-vous.' },
      [AppMode.CAREER_GUIDANCE]: { title: 'Orientation de carrière', description: 'Développez votre idée.' },
      [AppMode.JOB_INFORMATION]: { title: 'Informations Emploi', description: 'Accédez aux meilleurs portails d\'emploi et bourses au Rwanda.' },
    },
    systemInstructions: {
        [AppMode.HOME]: 'Ceci est l\'accueil.',
        [AppMode.CV_BUILDER]: `Rôle: Assistant de création de CV. RÉPONDRE EN FRANÇAIS.`,
        [AppMode.CV_REVIEW]: `Rôle: Assistant de révision de CV. RÉPONDRE EN FRANÇAIS.`,
        [AppMode.LETTER_WRITER]: `Rôle: Assistant de rédaction de lettres. RÉPONDRE EN FRANÇAIS.`,
        [AppMode.LETTER_REVIEW]: `Rôle: Assistant de révision de lettres. RÉPONDRE EN FRANÇAIS.`,
        [AppMode.INTERVIEW_PREP]: `Rôle: Assistant de préparation d'entretien. RÉPONDRE EN FRANÇAIS.`,
        [AppMode.CAREER_GUIDANCE]: `Rôle: Conseiller d'orientation et consultant en création d'entreprise. RÉPONDRE EN FRANÇAIS.`,
        [AppMode.JOB_INFORMATION]: `Informations sur l'emploi.`,
    },
    welcomeMessages: {},
    placeholder: "Écrivez votre message...",
    copyright: `© ${new Date().getFullYear()} Club Rafiki.`,
    getStarted: "Commencer",
    fileUploadScreen: {
        title: { 'CV_REVIEW': 'Téléchargez votre CV', 'LETTER_REVIEW': 'Téléchargez votre lettre' },
        prompt: 'Glissez-déposez votre fichier ici',
        supportedFormats: 'PDF, DOCX',
        uploading: 'Analyse en cours...',
        error: { default: 'Erreur d\'analyse du fichier.', fileType: 'Type de fichier invalide.' }
    },
    jobCreationGuide: {
        pageTitle: "Parcours de l'orientation de carrière",
        intro: {
            title: "Lancez votre carrière",
            p1: "L'orientation de carrière et l'entrepreneuriat sont des voies puissantes vers l'auto-emploi.",
            p2: "Ce guide vous aidera à naviguer dans les premières étapes du lancement de votre entreprise ou de votre carrière."
        },
        opportunities: {
            title: "Pourquoi commencer ce voyage ?",
            p1: "Le Rwanda offre un écosystème dynamique pour les nouveaux entrepreneurs et professionnels."
        },
        prosCons: {
            prosTitle: "Avantages",
            pros: [
                { title: "Indépendance", text: "Vous êtes votre propre patron." },
                { title: "Impact", text: "Résolvez des problèmes dans votre communauté." }
            ],
            consTitle: "Défis",
            cons: [
                { title: "Risque", text: "Créer une entreprise implique un risque financier." },
                { title: "Travail acharné", text: "Cela demande de longues heures et du dévouement." }
            ]
        },
        actionPlan: {
            title: "Plan d'action",
            intro: "Suivez ces étapes pour construire vos bases.",
            steps: [
                { title: "Validation de l'idée", description: "Identifiez un problème et résolvez-le.", points: ["Étude de marché", "Identification des clients"] },
                { title: "Planification", description: "Rédigez votre stratégie.", points: ["Modèle de revenus", "Opérations"] }
            ]
        },
        support: {
            title: "Ressources",
            intro: "Systèmes de support disponibles.",
            sections: [
                { title: "Aide financière", text: "Subventions et prêts disponibles.", points: ["BDF Rwanda", "Banques locales"] }
            ]
        },
        footer: { text: "Bonne chance dans votre parcours professionnel !" }
    },
    jobInformation: {
      categories: {
        public: "Secteur Public & Gouvernement",
        private: "Portails d'Emploi Privés",
        internships: "Stages & Formation",
        scholarships: "Bourses & Éducation",
      },
      visitSite: "Visiter le Site",
      platforms: {
        mifotra: { title: "E-Recruitment (MIFOTRA)", description: "Le portail officiel pour les emplois de la fonction publique au Rwanda." },
        jobinrwanda: { title: "Job in Rwanda", description: "Le principal portail privé pour les emplois professionnels." },
        kora: { title: "Kora Job Portal", description: "Un hub complet pour les chercheurs d'emploi et les employeurs." },
        mucuruzi: { title: "Mucuruzi", description: "Mises à jour quotidiennes sur les offres d'emploi et les appels d'offres." },
        opportunity: { title: "Opportunity in Rwanda", description: "Découvrez diverses opportunités professionnelles." },
        internship: { title: "Rwanda Internship", description: "Connecter les étudiants aux expériences pratiques." },
        scholarship: { title: "Rwanda Scholarship (HEC)", description: "Mises à jour officielles sur les bourses nationales et internationales." },
      }
    }
  },
  rw: {
    APP_NAME: "Serivisi z'Ameza y'umurimo za CLUB RAFIKI",
    languageSelector: "Ururimi",
    navItems: {
        [AppMode.HOME]: 'Ahabanza',
        [AppMode.CV_BUILDER]: 'Gukora CV',
        [AppMode.CV_REVIEW]: 'Isuzuma rya CV',
        [AppMode.LETTER_WRITER]: 'Kwandika Ibaruwa',
        [AppMode.LETTER_REVIEW]: 'Isuzuma ry\'Ibaruwa',
        [AppMode.INTERVIEW_PREP]: 'Kwitegura Interview',
        [AppMode.CAREER_GUIDANCE]: 'Kuyobora umwuga',
        [AppMode.JOB_INFORMATION]: 'Amakuru y\'Akazi',
    },
    modeDetails: {
      [AppMode.HOME]: { title: "Nagufasha iki?", description: "Hitamo serivisi hano hepfo." },
      [AppMode.CV_BUILDER]: { title: 'Gukora CV', description: 'Gukora CV nziza.' },
      [AppMode.CV_REVIEW]: { title: 'Isuzuma rya CV', description: 'Genzura CV yawe.' },
      [AppMode.LETTER_WRITER]: { title: 'Kwandika Ibaruwa', description: 'Wandike ibaruwa isaba akazi.' },
      [AppMode.LETTER_REVIEW]: { title: 'Isuzuma ry\'Ibaruwa', description: 'Genzura ibaruwa yawe.' },
      [AppMode.INTERVIEW_PREP]: { title: 'Kwitegura Interview', description: 'Witoze ikizamini.' },
      [AppMode.CAREER_GUIDANCE]: { title: 'Kuyobora umwuga', description: 'Tezimbere igitekerezo cyawe.' },
      [AppMode.JOB_INFORMATION]: { title: 'Amakuru y\'Akazi', description: 'Bona imbuga zitangaza akazi, kwimenyereza umwuga, n\'amahirwe yo kwiga mu Rwanda.' },
    },
    systemInstructions: {
        [AppMode.HOME]: 'Aha ni ahabanza.',
        [AppMode.CV_BUILDER]: `Inshingano: Umufasha mu gukora CV. SUBIZA MU KINYARWANDA.`,
        [AppMode.CV_REVIEW]: `Inshingano: Umufasha mu gusuzuma CV. SUBIZA MU KINYARWANDA.`,
        [AppMode.LETTER_WRITER]: `Inshingano: Umufasha mu kwandika amabaruwa. SUBIZA MU KINYARWANDA.`,
        [AppMode.LETTER_REVIEW]: `Inshingano: Umufasha mu gusuzuma amabaruwa. SUBIZA MU KINYARWANDA.`,
        [AppMode.INTERVIEW_PREP]: `Inshingano: Umufasha mu kwitegura interview. SUBIZA MU KINYARWANDA.`,
        [AppMode.CAREER_GUIDANCE]: `Inshingano: Umujyanama mu kuyobora umwuga no guhanga imishinga. SUBIZA MU KINYARWANDA.`,
        [AppMode.JOB_INFORMATION]: `Amakuru y'akazi.`,
    },
    welcomeMessages: {},
    placeholder: "Andika ubutumwa...",
    copyright: `© ${new Date().getFullYear()} Club Rafiki.`,
    getStarted: "Tangira",
    fileUploadScreen: {
        title: { 'CV_REVIEW': 'Shyiraho CV yawe', 'LETTER_REVIEW': 'Shyiraho Ibaruwa yawe' },
        prompt: 'Kurura unate dosiye hano',
        supportedFormats: 'PDF, DOCX',
        uploading: 'Gusesengura...',
        error: { default: 'Habaye ikibazo mu gusesengura.', fileType: 'Ubwoko bwa dosiye butemewe.' }
    },
    jobCreationGuide: {
        pageTitle: "Gahunda yo Kuyobora Umwuga",
        intro: {
            title: "Tangira Urugendo rwawe",
            p1: "Kuyobora umwuga no guhanga imishinga ni inzira ikomeye yo kwihangira umurimo.",
            p2: "Iyi mfashanyigisho azagufasha gutangira urugendo rwawe mu kwiteza imbere."
        },
        opportunities: {
            title: "Kuki watangira uru rugendo?",
            p1: "Mu Rwanda hari amahirwe menshi ku batangira imishinga mishya n'abanyamwuga."
        },
        prosCons: {
            prosTitle: "Ibyiza",
            pros: [
                { title: "Kwigenga", text: "Uba wiyobora ubwawe." },
                { title: "Iterambere", text: "Ukemura ibibazo biri mu muryango wawe." }
            ],
            consTitle: "Ibigoye",
            cons: [
                { title: "Ibikoresho", text: "Gutangira ubucuruzi bisaba ubushobozi." },
                { title: "Umurimo mwinshi", text: "Bisaba imbaraga n'igihe kinini." }
            ]
        },
        actionPlan: {
            title: "Inzira yo gukura",
            intro: "Kurikiza izi ntambwe.",
            steps: [
                { title: "Gushaka igitekerezo", description: "Shaka ikibazo ube wagikemura.", points: ["Gukora ubushakashatsi", "Kumenya abakiriya"] },
                { title: "Igenamigambi", description: "Andika uburyo uzakoramo.", points: ["Kumenya aho amafaranga azava", "Uko uzacuruza"] }
            ]
        },
        support: {
            title: "Inzego zigufasha",
            intro: "Aho wakura ubufasha.",
            sections: [
                { title: "Ubufasha mu by'imari", text: "Inguzanyo n'inkunga zihari.", points: ["BDF Rwanda", "Amabanki y'ubucuruzi"] }
            ]
        },
        footer: { text: "Mahirwe masa mu rugendo rwawe!" }
    },
    jobInformation: {
      categories: {
        public: "Inzego za Leta",
        private: "Imbuga z'Abikorera",
        internships: "Kwimenyereza Umwuga",
        scholarships: "Buruse & Amashuri",
      },
      visitSite: "Sura Urubuga",
      platforms: {
        mifotra: { title: "E-Recruitment (MIFOTRA)", description: "Urubuga rwemewe rwo gushaka akazi mu nzego za Leta." },
        jobinrwanda: { title: "Job in Rwanda", description: "Urubuga rw'imbere mu gihugu rutangaza akazi k'abanyamwuga." },
        kora: { title: "Kora Job Portal", description: "Ihuriro ry'abashaka akazi n'abagatanga mu Rwanda." },
        mucuruzi: { title: "Mucuruzi", description: "Amakuru agezweho buri munsi ku myanya y'akazi n'amasoko." },
        opportunity: { title: "Opportunity in Rwanda", description: "Shaka amahirwe atandukanye y'iterambere." },
        internship: { title: "Rwanda Internship", description: "Guhuza abanyeshuri n'uburambe mu kazi." },
        scholarship: { title: "Rwanda Scholarship (HEC)", description: "Amakuru y'amahirwe yo kwiga mu Rwanda no hanze yarwo." },
      }
    }
  }
};
