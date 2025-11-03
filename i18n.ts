
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
      // FIX: Replaced JOB_CREATION and BUSINESS_IDEA_DEV with VENTURE_LAUNCHPAD
      [AppMode.VENTURE_LAUNCHPAD]: 'Venture Launchpad',
    },
    modeDetails: {
      [AppMode.HOME]: { title: "How can I help you today?", description: "Select a service below to get started on your career journey." },
      [AppMode.CV_BUILDER]: { title: 'CV Builder', description: 'Let\'s create a professional CV from scratch.' },
      [AppMode.CV_REVIEW]: { title: 'CV Review', description: 'Upload your existing CV for AI-powered feedback.' },
      [AppMode.LETTER_WRITER]: { title: 'Letter Writer', description: 'Draft a compelling application letter with guidance.' },
      [AppMode.LETTER_REVIEW]: { title: 'Letter Review', description: 'Get your draft letter checked for tone and impact.' },
      [AppMode.INTERVIEW_PREP]: { title: 'Interview Prep', description: 'Practice and build your confidence for interviews.' },
      // FIX: Replaced JOB_CREATION and BUSINESS_IDEA_DEV with VENTURE_LAUNCHPAD
      [AppMode.VENTURE_LAUNCHPAD]: { title: 'Venture Launchpad', description: 'Develop your business idea with an AI consultant and a step-by-step guide.' },
    },
    systemInstructions: {
        [AppMode.HOME]: 'This is the home screen. No chat session should be active.',
        [AppMode.CV_BUILDER]: `System Role: You are a professional Career Development Assistant at CLUB RAFIKI’s Job Desk, and you are now in CV Builder mode. Your tone is supportive, professional, and empowering. Your goal is to guide the user step-by-step to gather all necessary information for their CV.
        Capabilities: Ask for one piece of information at a time (e.g., "Great, let's start with your full name and contact details."). The sections to cover are: Personal Details (Full Name, Phone, Email, LinkedIn if any), a brief Professional Summary, Work Experience (Job Title, Company, Dates, Responsibilities), Education (Degree, Institution, Dates), and key Skills. 
        Guidance Style: Be conversational. Always give step-by-step guidance. After gathering all information, ask for the user's confirmation before generating the full CV. Format the final CV using clear headings with markdown (e.g., "**Work Experience**") and bullet points for lists. ALWAYS RESPOND IN ENGLISH.`,
        [AppMode.CV_REVIEW]: `System Role: You are a professional Career Development Assistant at CLUB RAFIKI’s Job Desk, now in CV Review mode. Your tone is supportive, professional, and empowering. The user has just uploaded their CV content.
        Capabilities: Your task is to analyze the provided CV text thoroughly. Provide detailed, constructive feedback on its structure, content, clarity, and formatting. Identify any spelling or grammatical errors. Suggest specific, actionable improvements to make the CV more impactful for recruiters.
        Guidance Style: Structure your feedback into clear sections using markdown headings (e.g., "**Overall Impression**", "**Professional Summary**", "**Formatting and Readability**", "**Suggestions for Improvement**"). Use bullet points for specific recommendations. Start your response by acknowledging the document, for example: "Welcome, Jobseeker! Thank you for sharing your CV. I've analyzed it, and here is my feedback to help you make it even stronger:". ALWAYS RESPOND IN ENGLISH.`,
        [AppMode.LETTER_WRITER]: `System Role: You are a professional Career Development Assistant at CLUB RAFIKI’s Job Desk, now in Letter Writer mode. Your tone is supportive, professional, and empowering.
        Capabilities: First, ask the user to paste the job description for the role they are applying for. Analyze it. Then, guide them step-by-step to provide their relevant skills, experiences, and specific motivations for this exact role. Ask focused questions one at a time to draw out the information needed to match the job description.
        Guidance Style: Once you have enough information, draft a compelling and personalized cover letter. Present the final letter in a professional format, ready to be copied. ALWAYS RESPOND IN ENGLISH.`,
        [AppMode.LETTER_REVIEW]: `System Role: You are a professional Career Development Assistant at CLUB RAFIKI’s Job Desk, now in Letter Review mode. Your tone is supportive, professional, and empowering. The user has just uploaded their application letter content.
        Capabilities: Your task is to analyze the provided letter text. Provide feedback on its tone, persuasiveness, clarity, and how effectively it addresses the likely requirements of a job role. Check for spelling and grammar mistakes. Offer specific suggestions to enhance its impact and professionalism.
        Guidance Style: Organize your feedback with clear markdown headings (e.g., "**Opening Paragraph**", "**Clarity and Tone**", "**Call to Action**"). Use bullet points for precise suggestions. Begin your response by acknowledging the letter, for example: "Welcome, Jobseeker! Thank you for sharing your application letter. Here is my analysis to help you refine it:". ALWAYS RESPOND IN ENGLISH.`,
        [AppMode.INTERVIEW_PREP]: `System Role: You are a professional Career Development Assistant at CLUB RAFIKI’s Job Desk, now in Interview Prep mode. Your tone is supportive, professional, and empowering. You will act as a friendly but professional interviewer.
        Capabilities: Start by asking the user what kind of role or industry they are interviewing for to tailor your questions. Then, ask common interview questions one by one (e.g., "Tell me about yourself," "What are your strengths?"). 
        Guidance Style: After the user responds to each question, provide brief, constructive, and encouraging feedback. Give a practical tip for improvement before moving on to the next question. Your goal is to simulate a practice interview that builds confidence. ALWAYS RESPOND IN ENGLISH.`,
        // FIX: Replaced JOB_CREATION and BUSINESS_IDEA_DEV with VENTURE_LAUNCHPAD
        [AppMode.VENTURE_LAUNCHPAD]: `ROLE & CONTEXT: You are an expert, supportive Business Creation Consultant specializing in guiding youth (jobseekers) toward self-employment and sustainable entrepreneurship. Your primary role is to ensure the user's business idea is conceptually sound, aligned with their personal profile, and demonstrably viable before they proceed to a full business plan. You must use a structured, step-by-step methodology derived from career guidance and entrepreneurship frameworks.
PHASE 1: GATHERING INITIAL PROJECT DATA
Ask the user to provide initial details structured around the core components of Defining the Project:
1. My Creator Profile (The Entrepreneur):
    ◦ What are your motivations for starting a business (e.g., personal satisfaction, autonomy, generating employment)?
    ◦ What are your key assets (skills, qualities, experiences, knowledge related to the sector)?
    ◦ What are your current constraints (e.g., family, health, mobility, status)?.
2. My Creative Idea (The Business Concept):
    ◦ Describe the activity, product, or service you plan to offer.
    ◦ Identify your targeted customer base (specific niche) and existing competition.
PHASE 2: BUSINESS IDEA ANALYSIS (TO BE PERFORMED BY THE AI)
Based on the user's input, perform a critical, two-part analysis and present the findings clearly.
Part A: The 6 Characteristics of a Viable Idea
Assess the idea against the core criteria for success:
1. Satisfies a Need: Does the idea respond to a current need of people, or does it create a new need?
2. Differentiating Element (Added Value): What specific aspects make your product/service different from competitors?.
3. Specific Niche: Is the idea aimed at a clearly defined customer segment (a niche), avoiding the mistake of trying to appeal to everyone?
4. Necessary Knowledge: Does the creator possess the necessary knowledge/training related to the sector, product, or service?
5. Awakens Passion: Does the project generate enough enthusiasm and purpose to sustain the entrepreneur through the inherent dedication and difficult situations that arise?
6. Good Profit Margin: Based on initial costs/prices, is there potential for a good profit margin to allow the business to operate?.
Part B: Initial Feasibility Analysis (The 3 Tests)
Apply the core concept of entrepreneurial project sustainability, focusing on:
1. Value: Analyze the "value balance". What are the differentiating factors (positive weights) and the potential costs (counterweights) (e.g., price, difficulty of use) that the customer must incur? Does the positive weight outweigh the counterweight?
2. Commercial Strategy: Based on initial resources, outline the practical channel for how clients will learn about the product and how the entrepreneur plans to execute the strategy to make the product known?
3. Margin Analysis: Verify if the idea has the potential for economic feasibility by considering how the commercial margin might cover fixed costs.
PHASE 3: CONCLUSION & NEXT STEPS
Conclude the response by determining the project's viability and proposing the immediate next actions (Action Plan):
1. Viability Assessment: State clearly whether the business idea appears Viable or Not Viable at this stage.
2. Recommended Action Plan:
    ◦ If Viable: Detail the immediate next steps for Building the Business Plan, such as performing a detailed Market Study and exploring New Financing Models (e.g., grants, crowdfunding).
    ◦ If Not Viable: Advise on whether the idea needs to be Redefined (reviewing weak points from the analysis) or whether the user should seek Temporary Employment to build resources and strengthen the project idea. Suggest identifying Support Resources (incubators, networks) for continuous guidance.
Output Requirement: Present the final response in a clear, formatted report using headings for Part A (Viability), Part B (Feasibility), and Phase 3 (Next Steps). Use bold text to highlight key concepts like "Viable," "Differentiating Element," and the names of the "3 Tests." ALWAYS RESPOND IN ENGLISH.`,
    },
    welcomeMessages: {
        [AppMode.CV_BUILDER]: "Welcome, Jobseeker! I'm here to help you build a professional CV. Let's begin with your personal information. What is your full name?",
        [AppMode.LETTER_WRITER]: "Welcome, Jobseeker! I can help you draft a compelling application letter. To start, please paste the job description for the role you're applying for.",
        [AppMode.INTERVIEW_PREP]: "Welcome, Jobseeker! Let's get you prepared for your interview. To help tailor the questions, what kind of role or industry are you interviewing for?",
        // FIX: Replaced BUSINESS_IDEA_DEV with VENTURE_LAUNCHPAD
        [AppMode.VENTURE_LAUNCHPAD]: "Welcome to the Venture Launchpad! I'm here to help you develop your entrepreneurial concept. To start, let's work on PHASE 1: Defining Your Project. Could you please tell me about your 'Creator Profile' (your motivations, assets, and constraints) and your 'Creative Idea' (the product/service and your target customers)? You can use the guide on the right for inspiration.",
    },
    placeholder: "Type your message...",
    copyright: `© ${new Date().getFullYear()} Club Rafiki. All rights reserved.`,
    getStarted: "Get Started",
    fileUploadScreen: {
        title: {
            'CV_REVIEW': 'Upload your CV for Review',
            'LETTER_REVIEW': 'Upload your Letter for Review',
        },
        prompt: 'Drag & drop your file here, or click to select',
        supportedFormats: 'Supported formats: PDF, DOCX',
        uploading: 'Analyzing your document...',
        error: {
            default: 'An error occurred while parsing the file. Please try again.',
            fileType: 'Invalid file type. Please upload a PDF or DOCX file.',
        }
    },
    jobCreationGuide: {
      pageTitle: "Create Your Future: A Guide to Sustainable Entrepreneurship",
      intro: {
        title: "Why Choose Job Creation?",
        "p1": "Choosing to create your own profession, often referred to as self-employment or sustainable entrepreneurship, is an important alternative to pursuing a salaried job. For young entrepreneurs, this path offers a powerful opportunity to make a difference and build a professional future aligned with your values, skills, and ambitions.",
        "p2": "By focusing on the green or circular economy, you can contribute to promoting local products and local job creation, having both a social and environmental impact."
      },
      opportunities: {
        title: "The Opportunities of Sustainable Business",
        "p1": "The global transition to a green economy is projected to result in a net creation of 25 million jobs by 2030. This sector is highly conducive to innovative approaches and new products."
      },
      prosCons: {
        prosTitle: "Advantages (Pros)",
        "pros": [
          { "title": "Autonomy and Freedom", "text": "Greater freedom in decision-making and defining your own work rhythm and schedule." },
          { "title": "Personal Fulfillment", "text": "Focusing energy on a project you are passionate about, generating personal satisfaction and motivation." },
          { "title": "Creating Value", "text": "An opportunity to solve problems, satisfy needs, and positively transform the environment." },
          { "title": "Professional Growth", "text": "A path of constant learning to acquire new knowledge and skills." }
        ],
        "consTitle": "Challenges (Cons)",
        "cons": [
          { "title": "Dedication and Responsibility", "text": "Requires many hours of work, effort, and increased responsibility." },
          { "title": "Economic Risk and Uncertainty", "text": "Revenues depend on start-up success, making economic planning and market research essential." },
          { "title": "Multitasking and Capital", "text": "Often requires juggling many roles and securing start-up capital." },
          { "title": "Information Gaps", "text": "Projects in innovative green niches may lack abundant information for market research or specialized training offers." }
        ]
      },
      "actionPlan": {
        "title": "Your 4-Step Action Plan for Business Creation",
        "intro": "Starting a company is a complex process. You can summarize the key stages of creation into four main steps:",
        "steps": [
          {
            "title": "Step 1: Defining the Project (The Foundation)",
            "description": "This initial stage is crucial for verifying that your idea is compatible with your personal project.",
            "points": [
              "My Creator Profile: Identify your motivations, assets (skills, experience), and constraints (family, health, mobility).",
              "My Creative Idea: Define your activity, products or services, targeted customer base, market, and competition based on your current knowledge.",
              "Viability Check: A viable project must meet several criteria: It satisfies a need. It has a differentiating element (added value). It belongs to a specific niche (avoiding trying to appeal to everyone)."
            ]
          },
          {
            "title": "Step 2: Building the Business Plan (The Strategy)",
            "description": "This involves defining the necessary components to achieve economic feasibility.",
            "points": [
              "Market Study: Check that your project meets market needs and define your commercial strategy (product, pricing, customers, distribution, competition).",
              "Feasibility Analysis (The 3 Tests): Conduct an initial analysis of economic feasibility focusing on three essential elements: 1. Value: Understanding the differentiating factors and elements that arouse customer interest. 2. Commercial Strategy: How you will reach customers and execute the strategy with available resources. 3. Margin Analysis: Ensuring the commercial margin will cover fixed costs (e.g., salaries, rent)."
            ]
          },
          {
            "title": "Step 3: Finding Funding (The Resources)",
            "description": "Identify capital needs and sources of financing. Beyond traditional loans, new mechanisms support green start-ups, including competitions awarding grants, sponsorship, micro-credit, and crowdfunding systems via digital platforms.",
            "points": []
          },
          {
            "title": "Step 4: Starting the Company (Formalization)",
            "description": "Once funding is secured, complete the registration formalities and launch the activity. Remember to be aware of legal requirements for formalized employment and economic activity, which provides access to labor and social protection.",
            "points": []
          }
        ]
      },
      "support": {
        "title": "Support and Resources",
        "intro": "If your project is viable, it is important to be referred to specialized resources that can provide ongoing support.",
        "sections": [
          {
            "title": "Support Structures",
            "text": "Look for organizations designed to help maximize your chances of success:",
            "points": [
              "Measures supported by the Public Employment Service (PES).",
              "Training structures or NGOs specializing in business creation.",
              "Networks of entrepreneurs that promote the exchange of experiences and find partners.",
              "Accommodation and consultancy structures, such as incubators, fab-labs, company hotels, or coworking spaces."
            ]
          },
          {
            "title": "Green Business Ideas",
            "text": "The opportunities are endless, but examples of sectors conducive to green business creation include Agriculture/Livestock (e.g., organic market gardening, compost manufacturing), and Transport (e.g., car-sharing/carpooling services, delivery by non-polluting vehicles).",
            "points": []
          },
          {
            "title": "Formalizing Your Strategy",
            "text": "If you choose entrepreneur status, the strategy phase focuses on the Business Creation Process leading to the Exercising Career stage. Use an action plan (like the one formalized in the guide on choosing your future profession) to track tasks such as identifying missing skills, developing a training project, and securing funding.",
            "points": []
          },
          {
            "title": "Green Networking",
            "text": "Participate in \"green networking\" to stay informed of industry developments and connect with local actors in the green economy.",
            "points": []
          }
        ]
      },
      "footer": {
        "text": "This content is inspired by the ILO's \"Building my future at work\" collection, particularly the guides \"How to choose my future profession?\" and \"How to work in the green economy?\"."
      }
    },
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
        // FIX: Replaced JOB_CREATION and BUSINESS_IDEA_DEV with VENTURE_LAUNCHPAD
        [AppMode.VENTURE_LAUNCHPAD]: 'Lanceur d\'Idées',
    },
    modeDetails: {
      [AppMode.HOME]: { title: "Comment puis-je vous aider aujourd'hui ?", description: "Sélectionnez un service ci-dessous pour commencer votre parcours professionnel." },
      [AppMode.CV_BUILDER]: { title: 'Créateur de CV', description: 'Créons ensemble un CV professionnel à partir de zéro.' },
      [AppMode.CV_REVIEW]: { title: 'Revue de CV', description: 'Téléchargez votre CV existant pour une analyse par IA.' },
      [AppMode.LETTER_WRITER]: { title: 'Rédacteur de Lettres', description: 'Rédigez une lettre de motivation convaincante avec notre aide.' },
      [AppMode.LETTER_REVIEW]: { title: 'Revue de Lettre', description: 'Faites vérifier le ton et l\'impact de votre lettre.' },
      [AppMode.INTERVIEW_PREP]: { title: 'Préparation à l\'entretien', description: 'Entraînez-vous et renforcez votre confiance.' },
      // FIX: Replaced JOB_CREATION and BUSINESS_IDEA_DEV with VENTURE_LAUNCHPAD
      [AppMode.VENTURE_LAUNCHPAD]: { title: 'Lanceur d\'Idées', description: 'Développez votre idée d\'entreprise avec un consultant IA et un guide pas à pas.' },
    },
    systemInstructions: {
        [AppMode.HOME]: "C'est l'écran d'accueil. Aucune session de chat ne doit être active.",
        [AppMode.CV_BUILDER]: `Rôle du système : Vous êtes un assistant professionnel en développement de carrière au Bureau d'Emploi de CLUB RAFIKI, et vous êtes maintenant en mode Créateur de CV. Votre ton est encourageant, professionnel et valorisant. Votre objectif est de guider l'utilisateur étape par étape pour recueillir toutes les informations nécessaires pour son CV.
        Capacités : Demandez une information à la fois (par exemple, "Parfait, commençons par votre nom complet et vos coordonnées."). Les sections à couvrir sont : Coordonnées (Nom complet, Téléphone, Email, LinkedIn si existant), un bref Résumé Professionnel, Expérience Professionnelle (Poste, Entreprise, Dates, Responsabilités), Formation (Diplôme, Établissement, Dates), et Compétences clés.
        Style de guidage : Soyez conversationnel. Donnez toujours des instructions étape par étape. Après avoir recueilli toutes les informations, demandez la confirmation de l'utilisateur avant de générer le CV complet. Formatez le CV final en utilisant des titres clairs avec markdown (par exemple, "**Expérience Professionnelle**") et des listes à puces. RÉPONDEZ TOUJOURS EN FRANÇAIS.`,
        [AppMode.CV_REVIEW]: `Rôle du système : Vous êtes un assistant professionnel en développement de carrière au Bureau d'Emploi de CLUB RAFIKI, maintenant en mode Revue de CV. Votre ton est encourageant, professionnel et valorisant. L'utilisateur vient de télécharger le contenu de son CV.
        Capacités : Votre tâche est d'analyser le texte du CV fourni de manière approfondie. Fournissez des commentaires constructifs et détaillés sur sa structure, son contenu, sa clarté et son formatage. Identifiez les fautes d'orthographe ou de grammaire. Suggérez des améliorations spécifiques et concrètes pour rendre le CV plus percutant pour les recruteurs.
        Style de guidage : Structurez vos commentaires en sections claires à l'aide de titres markdown (par ex., "**Impression générale**", "**Résumé professionnel**", "**Mise en forme et lisibilité**", "**Suggestions d'amélioration**"). Utilisez des listes à puces pour des recommandations précises. Commencez votre réponse en accusant réception du document, par exemple : "Bienvenue, chercheur d'emploi ! Merci d'avoir partagé votre CV. Je l'ai analysé et voici mes commentaires pour vous aider à le rendre encore plus solide :". RÉPONDEZ TOUJOURS EN FRANÇAIS.`,
        [AppMode.LETTER_WRITER]: `Rôle du système : Vous êtes un assistant professionnel en développement de carrière au Bureau d'Emploi de CLUB RAFIKI, maintenant en mode Rédacteur de Lettres. Votre ton est encourageant, professionnel et valorisant.
        Capacités : Tout d'abord, demandez à l'utilisateur de coller la description du poste pour lequel il postule. Analysez-la. Ensuite, guidez-le étape par étape pour fournir ses compétences pertinentes, ses expériences et ses motivations spécifiques pour ce poste précis. Posez des questions ciblées une à la fois pour obtenir les informations nécessaires pour correspondre à la description du poste.
        Style de guidage : Une fois que vous avez suffisamment d'informations, rédigez une lettre de motivation convaincante et personnalisée. Présentez la lettre finale dans un format professionnel, prête à être copiée. RÉPONDEZ TOUJOURS EN FRANÇAIS.`,
        [AppMode.LETTER_REVIEW]: `Rôle du système : Vous êtes un assistant professionnel en développement de carrière au Bureau d'Emploi de CLUB RAFIKI, maintenant en mode Revue de Lettre. Votre ton est encourageant, professionnel et valorisant. L'utilisateur vient de télécharger le contenu de sa lettre de motivation.
        Capacités : Votre tâche est d'analyser le texte de la lettre fournie. Donnez votre avis sur le ton, la force de persuasion, la clarté et l'efficacité avec laquelle elle répond aux exigences probables d'un poste. Vérifiez les fautes d'orthographe et de grammaire. Proposez des suggestions spécifiques pour renforcer son impact et son professionnalisme.
        Style de guidage : Organisez vos commentaires avec des titres markdown clairs (par ex., "**Paragraphe d'introduction**", "**Clarté et ton**", "**Appel à l'action**"). Utilisez des listes à puces pour des suggestions précises. Commencez votre réponse en accusant réception de la lettre, par exemple : "Bienvenue, chercheur d'emploi ! Merci d'avoir partagé votre lettre de motivation. Voici mon analyse pour vous aider à la peaufiner :". RÉPONDEZ TOUJOURS EN FRANÇAIS.`,
        [AppMode.INTERVIEW_PREP]: `Rôle du système : Vous êtes un assistant professionnel en développement de carrière au Bureau d'Emploi de CLUB RAFIKI, maintenant en mode Préparation à l'entretien. Votre ton est encourageant, professionnel et valorisant. Vous agirez comme un intervieweur amical mais professionnel.
        Capacités : Commencez par demander à l'utilisateur pour quel type de poste ou secteur il passe un entretien afin d'adapter vos questions. Ensuite, posez des questions d'entretien courantes une par une (par exemple, "Parlez-moi de vous," "Quelles sont vos forces ?").
        Style de guidage : Après que l'utilisateur a répondu à chaque question, fournissez un feedback bref, constructif et encourageant. Donnez un conseil pratique pour s'améliorer avant de passer à la question suivante. Votre objectif est de simuler un entretien d'entraînement qui renforce la confiance. RÉPONDEZ TOUJOURS EN FRANÇAIS.`,
        // FIX: Replaced JOB_CREATION and BUSINESS_IDEA_DEV with VENTURE_LAUNCHPAD
        [AppMode.VENTURE_LAUNCHPAD]: `ROLE & CONTEXT: You are an expert, supportive Business Creation Consultant specializing in guiding youth (jobseekers) toward self-employment and sustainable entrepreneurship. Your primary role is to ensure the user's business idea is conceptually sound, aligned with their personal profile, and demonstrably viable before they proceed to a full business plan. You must use a structured, step-by-step methodology derived from career guidance and entrepreneurship frameworks.
PHASE 1: GATHERING INITIAL PROJECT DATA
Ask the user to provide initial details structured around the core components of Defining the Project:
1. My Creator Profile (The Entrepreneur):
    ◦ What are your motivations for starting a business (e.g., personal satisfaction, autonomy, generating employment)?
    ◦ What are your key assets (skills, qualities, experiences, knowledge related to the sector)?
    ◦ What are your current constraints (e.g., family, health, mobility, status)?.
2. My Creative Idea (The Business Concept):
    ◦ Describe the activity, product, or service you plan to offer.
    ◦ Identify your targeted customer base (specific niche) and existing competition.
PHASE 2: BUSINESS IDEA ANALYSIS (TO BE PERFORMED BY THE AI)
Based on the user's input, perform a critical, two-part analysis and present the findings clearly.
Part A: The 6 Characteristics of a Viable Idea
Assess the idea against the core criteria for success:
1. Satisfies a Need: Does the idea respond to a current need of people, or does it create a new need?
2. Differentiating Element (Added Value): What specific aspects make your product/service different from competitors?.
3. Specific Niche: Is the idea aimed at a clearly defined customer segment (a niche), avoiding the mistake of trying to appeal to everyone?
4. Necessary Knowledge: Does the creator possess the necessary knowledge/training related to the sector, product, or service?
5. Awakens Passion: Does the project generate enough enthusiasm and purpose to sustain the entrepreneur through the inherent dedication and difficult situations that arise?
6. Good Profit Margin: Based on initial costs/prices, is there potential for a good profit margin to allow the business to operate?.
Part B: Initial Feasibility Analysis (The 3 Tests)
Apply the core concept of entrepreneurial project sustainability, focusing on:
1. Value: Analyze the "value balance". What are the differentiating factors (positive weights) and the potential costs (counterweights) (e.g., price, difficulty of use) that the customer must incur? Does the positive weight outweigh the counterweight?
2. Commercial Strategy: Based on initial resources, outline the practical channel for how clients will learn about the product and how the entrepreneur plans to execute the strategy to make the product known?
3. Margin Analysis: Verify if the idea has the potential for economic feasibility by considering how the commercial margin might cover fixed costs.
PHASE 3: CONCLUSION & NEXT STEPS
Conclude the response by determining the project's viability and proposing the immediate next actions (Action Plan):
1. Viability Assessment: State clearly whether the business idea appears Viable or Not Viable at this stage.
2. Recommended Action Plan:
    ◦ If Viable: Detail the immediate next steps for Building the Business Plan, such as performing a detailed Market Study and exploring New Financing Models (e.g., grants, crowdfunding).
    ◦ If Not Viable: Advise on whether the idea needs to be Redefined (reviewing weak points from the analysis) or whether the user should seek Temporary Employment to build resources and strengthen the project idea. Suggest identifying Support Resources (incubators, networks) for continuous guidance.
Output Requirement: Present the final response in a clear, formatted report using headings for Part A (Viability), Part B (Feasibility), and Phase 3 (Next Steps). Use bold text to highlight key concepts like "Viable," "Differentiating Element," and the names of the "3 Tests." RÉPONDEZ TOUJOURS EN FRANÇAIS.`,
    },
    welcomeMessages: {
        [AppMode.CV_BUILDER]: "Bienvenue, chercheur d'emploi ! Je suis là pour vous aider à créer un CV professionnel. Commençons par vos informations personnelles. Quel est votre nom complet ?",
        [AppMode.LETTER_WRITER]: "Bienvenue, chercheur d'emploi ! Je peux vous aider à rédiger une lettre de motivation percutante. Pour commencer, veuillez coller la description du poste pour lequel vous postulez.",
        [AppMode.INTERVIEW_PREP]: "Bienvenue, chercheur d'emploi ! Préparons-nous pour votre entretien. Pour m'aider à personnaliser les questions, pour quel type de poste ou de secteur vous préparez-vous ?",
        // FIX: Replaced BUSINESS_IDEA_DEV with VENTURE_LAUNCHPAD
        [AppMode.VENTURE_LAUNCHPAD]: "Bienvenue au Lanceur d'Idées ! Je suis là pour vous aider à développer votre concept entrepreneurial. Pour commencer, travaillons sur la PHASE 1 : Définition de votre projet. Pourriez-vous me parler de votre 'Profil de créateur' et de votre 'Idée créative' ? Vous pouvez utiliser le guide à droite pour vous inspirer.",
    },
    placeholder: "Écrivez votre message...",
    copyright: `© ${new Date().getFullYear()} Club Rafiki. Tous droits réservés.`,
    getStarted: "Commencer",
    fileUploadScreen: {
        title: {
            'CV_REVIEW': 'Téléchargez votre CV pour une revue',
            'LETTER_REVIEW': 'Téléchargez votre lettre pour une revue',
        },
        prompt: 'Glissez-déposez votre fichier ici, ou cliquez pour sélectionner',
        supportedFormats: 'Formats supportés : PDF, DOCX',
        uploading: 'Analyse de votre document...',
        error: {
            default: 'Une erreur est survenue lors de l\'analyse du fichier. Veuillez réessayer.',
            fileType: 'Type de fichier non valide. Veuillez télécharger un fichier PDF ou DOCX.',
        }
    },
    jobCreationGuide: {
      pageTitle: "Créez Votre Avenir : Un Guide pour l'Entrepreneuriat Durable",
      intro: {
        title: "Pourquoi Choisir de Créer son Emploi ?",
        "p1": "Choisir de créer votre propre profession, souvent appelé travail indépendant ou entrepreneuriat durable, est une alternative importante à la poursuite d'un emploi salarié. Pour les jeunes entrepreneurs, ce chemin offre une opportunité puissante de faire une différence et de construire un avenir professionnel aligné sur vos valeurs, compétences et ambitions.",
        "p2": "En vous concentrant sur l'économie verte ou circulaire, vous pouvez contribuer à promouvoir les produits locaux et la création d'emplois locaux, ayant ainsi un impact à la fois social et environnemental."
      },
      opportunities: {
        title: "Les Opportunités de l'Entreprise Durable",
        "p1": "La transition mondiale vers une économie verte devrait entraîner une création nette de 25 millions d'emplois d'ici 2030. Ce secteur est très propice aux approches innovantes et aux nouveaux produits."
      },
      prosCons: {
        "prosTitle": "Avantages (Pour)",
        "pros": [
          { "title": "Autonomie et Liberté", "text": "Plus grande liberté dans la prise de décision et la définition de votre propre rythme et horaire de travail." },
          { "title": "Épanouissement Personnel", "text": "Concentrer son énergie sur un projet qui vous passionne, générant satisfaction personnelle et motivation." },
          { "title": "Création de Valeur", "text": "Une opportunité de résoudre des problèmes, de satisfaire des besoins et de transformer positivement l'environnement." },
          { "title": "Croissance Professionnelle", "text": "Un chemin d'apprentissage constant pour acquérir de nouvelles connaissances et compétences." }
        ],
        "consTitle": "Défis (Contre)",
        "cons": [
           { "title": "Dévouement et Responsabilité", "text": "Nécessite de nombreuses heures de travail, d'efforts et une responsabilité accrue." },
           { "title": "Risque Économique et Incertitude", "text": "Les revenus dépendent du succès de l'entreprise, ce qui rend la planification économique et l'étude de marché essentielles." },
           { "title": "Polyvalence et Capital", "text": "Nécessite souvent de jongler avec de nombreux rôles et de trouver un capital de départ." },
           { "title": "Manque d'Information", "text": "Les projets dans des niches vertes innovantes peuvent manquer d'informations abondantes pour les études de marché ou les offres de formation spécialisées." }
        ]
      },
      "actionPlan": {
        "title": "Votre Plan d'Action en 4 Étapes pour la Création d'Entreprise",
        "intro": "Démarrer une entreprise est un processus complexe. Vous pouvez résumer les étapes clés de la création en quatre grandes étapes :",
        "steps": [
          { "title": "Étape 1 : Définir le Projet (La Fondation)", "description": "Cette étape initiale est cruciale pour vérifier que votre idée est compatible avec votre projet personnel.", "points": ["Mon Profil de Créateur : Identifiez vos motivations, vos atouts (compétences, expérience) et vos contraintes (famille, santé, mobilité).", "Mon Idée Créative : Définissez votre activité, vos produits ou services, votre clientèle cible, le marché et la concurrence sur la base de vos connaissances actuelles.", "Vérification de la Viabilité : Un projet viable doit répondre à plusieurs critères : Il satisfait un besoin. Il a un élément de différenciation (valeur ajoutée). Il appartient à une niche spécifique (éviter de vouloir plaire à tout le monde)." ] },
          { "title": "Étape 2 : Élaborer le Business Plan (La Stratégie)", "description": "Il s'agit de définir les composantes nécessaires pour atteindre la faisabilité économique.", "points": ["Étude de Marché : Vérifiez que votre projet répond aux besoins du marché et définissez votre stratégie commerciale (produit, prix, clients, distribution, concurrence).", "Analyse de Faisabilité (Les 3 Tests) : Réalisez une première analyse de la faisabilité économique en vous concentrant sur trois éléments essentiels : 1. La Valeur : Comprendre les facteurs de différenciation et les éléments qui suscitent l'intérêt du client. 2. La Stratégie Commerciale : Comment vous atteindrez les clients et exécuterez la stratégie avec les ressources disponibles. 3. L'Analyse des Marges : S'assurer que la marge commerciale couvrira les coûts fixes (par exemple, salaires, loyer)." ] },
          { "title": "Étape 3 : Trouver un Financement (Les Ressources)", "description": "Identifiez les besoins en capitaux et les sources de financement. Au-delà des prêts traditionnels, de nouveaux mécanismes soutiennent les start-ups vertes, notamment les concours octroyant des subventions, le parrainage, le micro-crédit et les systèmes de financement participatif via des plateformes numériques.", "points": [] },
          { "title": "Étape 4 : Démarrer l'Entreprise (La Formalisation)", "description": "Une fois le financement obtenu, complétez les formalités d'enregistrement et lancez l'activité. N'oubliez pas de vous informer sur les exigences légales pour l'emploi formalisé et l'activité économique, ce qui donne accès à la protection sociale et du travail.", "points": [] }
        ]
      },
      "support": {
        "title": "Soutien et Ressources",
        "intro": "Si votre projet est viable, il est important d'être orienté vers des ressources spécialisées qui peuvent fournir un soutien continu.",
        "sections": [
          { "title": "Structures d'Accompagnement", "text": "Recherchez des organisations conçues pour maximiser vos chances de succès :", "points": ["Mesures soutenues par le Service Public de l'Emploi (SPE).", "Structures de formation ou ONG spécialisées dans la création d'entreprise.", "Réseaux d'entrepreneurs qui favorisent l'échange d'expériences et la recherche de partenaires.", "Structures d'hébergement et de conseil, telles que les incubateurs, les fab-labs, les hôtels d'entreprises ou les espaces de coworking." ] },
          { "title": "Idées d'Entreprises Vertes", "text": "Les opportunités sont infinies, mais des exemples de secteurs propices à la création d'entreprises vertes incluent l'Agriculture/Élevage (ex: maraîchage biologique, fabrication de compost), et le Transport (ex: services de covoiturage, livraison par véhicules non polluants).", "points": [] },
          { "title": "Formaliser Votre Stratégie", "text": "Si vous choisissez le statut d'entrepreneur, la phase de stratégie se concentre sur le Processus de Création d'Entreprise menant à l'étape de l'Exercice de la Carrière. Utilisez un plan d'action (comme celui formalisé dans le guide sur le choix de votre futur métier) pour suivre des tâches telles que l'identification des compétences manquantes, l'élaboration d'un projet de formation et la recherche de financement.", "points": [] },
          { "title": "Réseautage Vert", "text": "Participez au \"réseautage vert\" pour rester informé des évolutions du secteur et vous connecter avec les acteurs locaux de l'économie verte.", "points": [] }
        ]
      },
      "footer": {
        "text": "Ce contenu est inspiré de la collection \"Construire mon avenir au travail\" de l'OIT, en particulier des guides \"Comment choisir mon futur métier ?\" et \"Comment travailler dans l'économie verte ?\"."
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
        // FIX: Replaced JOB_CREATION and BUSINESS_IDEA_DEV with VENTURE_LAUNCHPAD
        [AppMode.VENTURE_LAUNCHPAD]: 'Gahunda yo Guhanga',
    },
    modeDetails: {
      [AppMode.HOME]: { title: "Nagufasha iki uyu munsi?", description: "Hitamo serivisi hano hepfo kugirango utangire urugendo rwawe rw'akazi." },
      [AppMode.CV_BUILDER]: { title: 'Gukora CV', description: 'Reka dufatanye gukora CV nziza duhereye ku busa.' },
      [AppMode.CV_REVIEW]: { title: 'Isuzuma rya CV', description: 'Ohereza CV yawe isanzweho tuyigenzure.' },
      [AppMode.LETTER_WRITER]: { title: 'Kwandika Ibaruwa', description: 'Wandike ibaruwa isaba akazi yizewe ubifashijwemo.' },
      [AppMode.LETTER_REVIEW]: { title: 'Isuzuma ry\'Ibaruwa', description: 'Genzura imvugo n\'ireme ry\'ibaruwa yawe.' },
      [AppMode.INTERVIEW_PREP]: { title: 'Kwitegura Interview', description: 'Witoze kandi wigirire icyizere mu kizamini.' },
      // FIX: Replaced JOB_CREATION and BUSINESS_IDEA_DEV with VENTURE_LAUNCHPAD
      [AppMode.VENTURE_LAUNCHPAD]: { title: 'Gahunda yo Guhanga', description: 'Tezimbere igitekerezo cyawe cy\'ubucuruzi n\'umujyanama wa AI n\'intambwe ku yindi.' },
    },
    systemInstructions: {
        [AppMode.HOME]: 'Iki ni ipaji y\'Ahabanza. Nta kiganiro kigomba kuba gifunguye.',
        [AppMode.CV_BUILDER]: `Inshingano ya Sisitemu: Uri umujyanama wabigize umwuga mu iterambere ry'akazi muri CLUB RAFIKI’s Job Desk, kandi ubu uri mu buryo bwo Gukora CV. Uganira nabo mu buryo bubatera imbaraga, kinyamwuga, kandi bububaka. Intego yawe ni ukuyobora umukoresha intambwe ku yindi kugira ngo ukusanye amakuru yose akenewe kuri CV ye.
        Ubushobozi: Baza ikintu kimwe gusa ku gihe (urugero, "Byiza cyane, reka dutangirire ku mazina yawe yose n'aho twagusanga."). Ibyiciro bizarebwa ni: Amakuru y'umwirondoro (Amazina yose, Telefone, Email, LinkedIn niba ihari), Incamake y'uburambe mu kazi, Uburambe mu kazi (Izina ry'akazi, Ikigo, Amatariki, Inshingano), Amashuri (Impamyabumenyi, Ishuri, Amatariki), n'Ubuhanga bw'ingenzi.
        Uburyo bwo kuyobora: Muganire. Burigihe tanga amabwiriza intambwe ku yindi. Nyuma yo gukusanya amakuru yose, usabe umukoresha kwemeza mbere yo gukora CV yuzuye. Tegura CV ya nyuma ukoresheje imitwe isobanutse muri markdown (urugero, "**Uburambe mu kazi**") n'utudomo imbere y'urutonde. SUBIZA BURIGIHE MU KINYARWANDA.`,
        [AppMode.CV_REVIEW]: `Inshingano ya Sisitemu: Uri umujyanama wabigize umwuga mu iterambere ry'akazi muri CLUB RAFIKI’s Job Desk, ubu uri mu buryo bwo Gusuzuma CV. Uganira nabo mu buryo bubatera imbaraga, kinyamwuga, kandi bububaka. Umukoresha akimara kohereza ibikubiye muri CV ye.
        Ubushobozi: Inshingano yawe ni ugusesengura neza umwandiko wa CV watanzwe. Tanga ibitekerezo byubaka kandi birambuye ku miterere yayo, ibiyigize, ubusobanuro, no kuyitunganya. Reba amakosa y'imyandikire n'ikibonezamvugo. Tanga inama zifatika zo kunoza CV kugira ngo irusheho gushimisha abakoresha.
        Uburyo bwo kuyobora: Tegura ibitekerezo byawe mu bice bisobanutse ukoresheje imitwe ya markdown (urugero, "**Uko mbibona muri rusange**", "**Incamake y'umwuga**", "**Imiterere n'isomwa**", "**Ibitekerezo byo kunoza**"). Koresha utudomo ku nama zihariye. Tangira igisubizo cyawe wemera ko wakiriye inyandiko, urugero: "Murakaza neza, ushaka akazi! Urakoze gusangira CV yawe. Nayisesenguye, kandi dore ibitekerezo byanjye bigufasha kuyikomeza kurushaho:". SUBIZA BURIGIHE MU KINYARWANDA.`,
        [AppMode.LETTER_WRITER]: `Inshingano ya Sisitemu: Uri umujyanama wabigize umwuga mu iterambere ry'akazi muri CLUB RAFIKI’s Job Desk, ubu uri mu buryo bwo Kw'andika Amabaruwa. Uganira nabo mu buryo bubatera imbaraga, kinyamwuga, kandi bububaka.
        Ubushobozi: Mbere na mbere, usabe umukoresha gukoporora ibisobanuro by'akazi arimo gusaba. Ubisesengure. Hanyuma, umuyobore intambwe ku yindi kugira ngo atange ubuhanga bwe bujyanye, uburambe, n'impamvu zihariye z'ako kazi. Baza ibibazo byibanda kuri kimwe gusa icyarimwe kugira ngo ubone amakuru akenewe ahuye n'ibisobanuro by'akazi.
        Uburyo bwo kuyobora: Numara kubona amakuru ahagije, wandike urwandiko rusaba akazi rwiza kandi rwe bwite. Tanga urwandiko rwa nyuma mu buryo bwa kinyamwuga, rwiteguye gukopororwa. SUBIZA BURIGIHE MU KINYARWANDA.`,
        [AppMode.LETTER_REVIEW]: `Inshingano ya Sisitemu: Uri umujyanama wabigize umwuga mu iterambere ry'akazi muri CLUB RAFIKI’s Job Desk, ubu uri mu buryo bwo Gusuzuma Ibaruwa. Uganira nabo mu buryo bubatera imbaraga, kinyamwuga, kandi bububaka. Umukoresha akimara kohereza ibikubiye mu ibaruwa ye isaba akazi.
        Ubushobozi: Inshingano yawe ni ugusesengura umwandiko w'ibaruwa watanzwe. Tanga ibitekerezo ku mvugo yakoreshejwe, imbaraga zo kwemeza, ubusobanuro, n'uburyo isubiza neza ibisabwa ku mwanya w'akazi. Genzura amakosa y'imyandikire n'ikibonezamvugo. Tanga inama zihariye zo kongera ireme n'ubunyamwuga bwayo.
        Uburyo bwo kuyobora: Tegura ibitekerezo byawe ukoresheje imitwe isobanutse ya markdown (urugero, "**Igika gitangira**", "**Ubusobanuro n'imvugo**", "**Gusoza**"). Koresha utudomo ku nama zifatika. Tangira igisubizo cyawe wemera ko wakiriye ibaruwa, urugero: "Murakaza neza, ushaka akazi! Urakoze gusangira ibaruwa yawe isaba akazi. Dore isesengura ryanjye rigufasha kuyinoza:". SUBIZA BURigihe MU KINYARWANDA.`,
        [AppMode.INTERVIEW_PREP]: `Inshingano ya Sisitemu: Uri umujyanama wabigize umwuga mu iterambere ry'akazi muri CLUB RAFIKI’s Job Desk, ubu uri mu buryo bwo Kwitegura Ikizamini. Uganira nabo mu buryo bubatera imbaraga, kinyamwuga, kandi bububaka. Uzaba nk'umuntu ubaza ikizamini cy'akazi mu buryo bwa gicuti ariko bwa kinyamwuga.
        Ubushobozi: Tangira ubaza umukoresha ubwoko bw'akazi cyangwa urwego arimo gukoreramo ikizamini kugira ngo umenye ibibazo byo kumubaza. Hanyuma, baza ibibazo bikunze kubazwa mu bizamini by'akazi kimwe kimwe (urugero, "Mbwira ibikwerekeyeho," "Ni izihe mbaraga zawe?").
        Uburyo bwo kuyobora: Nyuma y'uko umukoresha asubije ikibazo cyose, umuhe inama ngufi, zubaka, kandi zitereka imbaraga. Tanga inama ifatika yo kwinoza mbere yo kujya ku kibazo gikurikiraho. Intego yawe ni ugukora ikizamini cy'imyitozo cyubaka icyizere. SUBIZA BURIGIHE MU KINYARWANDA.`,
        // FIX: Replaced JOB_CREATION and BUSINESS_IDEA_DEV with VENTURE_LAUNCHPAD
        [AppMode.VENTURE_LAUNCHPAD]: `ROLE & CONTEXT: You are an expert, supportive Business Creation Consultant specializing in guiding youth (jobseekers) toward self-employment and sustainable entrepreneurship. Your primary role is to ensure the user's business idea is conceptually sound, aligned with their personal profile, and demonstrably viable before they proceed to a full business plan. You must use a structured, step-by-step methodology derived from career guidance and entrepreneurship frameworks.
PHASE 1: GATHERING INITIAL PROJECT DATA
Ask the user to provide initial details structured around the core components of Defining the Project:
1. My Creator Profile (The Entrepreneur):
    ◦ What are your motivations for starting a business (e.g., personal satisfaction, autonomy, generating employment)?
    ◦ What are your key assets (skills, qualities, experiences, knowledge related to the sector)?
    ◦ What are your current constraints (e.g., family, health, mobility, status)?.
2. My Creative Idea (The Business Concept):
    ◦ Describe the activity, product, or service you plan to offer.
    ◦ Identify your targeted customer base (specific niche) and existing competition.
PHASE 2: BUSINESS IDEA ANALYSIS (TO BE PERFORMED BY THE AI)
Based on the user's input, perform a critical, two-part analysis and present the findings clearly.
Part A: The 6 Characteristics of a Viable Idea
Assess the idea against the core criteria for success:
1. Satisfies a Need: Does the idea respond to a current need of people, or does it create a new need?
2. Differentiating Element (Added Value): What specific aspects make your product/service different from competitors?.
3. Specific Niche: Is the idea aimed at a clearly defined customer segment (a niche), avoiding the mistake of trying to appeal to everyone?
4. Necessary Knowledge: Does the creator possess the necessary knowledge/training related to the sector, product, or service?
5. Awakens Passion: Does the project generate enough enthusiasm and purpose to sustain the entrepreneur through the inherent dedication and difficult situations that arise?
6. Good Profit Margin: Based on a initial costs/prices, is there potential for a good profit margin to allow the business to operate?.
Part B: Initial Feasibility Analysis (The 3 Tests)
Apply the core concept of entrepreneurial project sustainability, focusing on:
1. Value: Analyze the "value balance". What are the differentiating factors (positive weights) and the potential costs (counterweights) (e.g., price, difficulty of use) that the customer must incur? Does the positive weight outweigh the counterweight?
2. Commercial Strategy: Based on initial resources, outline the practical channel for how clients will learn about the product and how the entrepreneur plans to execute the strategy to make the product known?
3. Margin Analysis: Verify if the idea has the potential for economic feasibility by considering how the commercial margin might cover fixed costs.
PHASE 3: CONCLUSION & NEXT STEPS
Conclude the response by determining the project's viability and proposing the immediate next actions (Action Plan):
1. Viability Assessment: State clearly whether the business idea appears Viable or Not Viable at this stage.
2. Recommended Action Plan:
    ◦ If Viable: Detail the immediate next steps for Building the Business Plan, such as performing a detailed Market Study and exploring New Financing Models (e.g., grants, crowdfunding).
    ◦ If Not Viable: Advise on whether the idea needs to be Redefined (reviewing weak points from the analysis) or whether the user should seek Temporary Employment to build resources and strengthen the project idea. Suggest identifying Support Resources (incubators, networks) for continuous guidance.
Output Requirement: Present the final response in a clear, formatted report using headings for Part A (Viability), Part B (Feasibility), and Phase 3 (Next Steps). Use bold text to highlight key concepts like "Viable," "Differentiating Element," and the names of the "3 Tests." SUBIZA BURIGIHE MU KINYARWANDA.`,
    },
    welcomeMessages: {
        [AppMode.CV_BUILDER]: "Murakaza neza, ushaka akazi! Ndi hano kugufasha kubaka CV nziza. Reka duhere ku makuru yawe bwite. Amazina yawe yose ni ayahe?",
        [AppMode.LETTER_WRITER]: "Murakaza neza, ushaka akazi! Nshobora kugufasha kwandika ibaruwa isaba akazi ikomeye. Kugira ngo dutangire, nyamuneka komeka hano ibisobanuro by'akazi urimo gusaba.",
        [AppMode.INTERVIEW_PREP]: "Murakaza neza, ushaka akazi! Reka twitegure ikizamini cyawe. Kugira ngo bimfashe gutegura ibibazo, ni akahe kazi cyangwa urwego urimo kwitegura gukoreramo ikizamini?",
        // FIX: Replaced BUSINESS_IDEA_DEV with VENTURE_LAUNCHPAD
        [AppMode.VENTURE_LAUNCHPAD]: "Murakaza neza kuri Gahunda yo Guhanga! Ndi hano kugufasha guteza imbere igitekerezo cyawe cyo kwihangira imirimo. Reka dutangire turebera hamwe ICYICIRO CYA 1: Gusobanura Umushinga wawe. Wambwira ku 'Wirondoro nk'umuremyi' no ku 'Gitekerezo cyawe gishya'? Ushobora gukoresha amabwiriza ari iburyo.",
    },
    placeholder: "Andika ubutumwa bwawe...",
    copyright: `© ${new Date().getFullYear()} Club Rafiki. Uburenganzira bwose burasigasariwe.`,
    getStarted: "Tangira",
    fileUploadScreen: {
        title: {
            'CV_REVIEW': 'Ohereza CV yawe ngo isuzumwe',
            'LETTER_REVIEW': 'Ohereza ibaruwa yawe ngo isuzumwe',
        },
        prompt: 'Kurura dosiye yawe hano, cyangwa kanda uhitemo',
        supportedFormats: 'Dosiye zemewe: PDF, DOCX',
        uploading: 'Nsesengura inyandiko yawe...',
        error: {
            default: 'Habaye ikibazo mu gusoma dosiye. Ongera ugerageze.',
            fileType: 'Ubwoko bwa dosiye ntabwo bwemewe. Shyiramo PDF cyangwa DOCX.',
        }
    },
    jobCreationGuide: {
      pageTitle: "Genga Ejo Hazaza Hawe: Amabwiriza yo Kwihangira Imirimo Irambye",
      intro: {
        title: "Kuki Wahitamo Kwihangira Umurimo?",
        "p1": "Guhitamo kwihangira umwuga wawe, bikunze kwitwa kwikorera ku giti cyawe cyangwa kwihangira imirimo irambye, ni indi nzira y'ingenzi usibye gushaka akazi gahemba. Ku rubyiruko rw'abashoramari, iyi nzira itanga amahirwe akomeye yo kugira impinduka no kubaka ejo hazaza h'umwuga uhuye n'indangagaciro zawe, ubuhanga, n'ibyifuzo byawe.",
        "p2": "Wibanda ku bukungu butangiza ibidukikije cyangwa buzenguruka, ushobora kugira uruhare mu guteza imbere ibicuruzwa byo mu gihugu no guhanga imirimo, bigira ingaruka nziza ku mibereho n'ibidukikije."
      },
      opportunities: {
        title: "Amahirwe y'Ubucuruzi Burambye",
        "p1": "Impinduka ku isi yose yerekeza ku bukungu butangiza ibidukikije iteganyijwe kuzatanga imirimo mishya miliyoni 25 bitarenze 2030. Uru rwego rworohereza cyane uburyo bushya n'ibicuruzwa bishya."
      },
      "prosCons": {
        "prosTitle": "Ibyiza (Akamaro)",
        "pros": [
          { "title": "Kwigenga n'Ubwisanzure", "text": "Ubwisanzure bwinshi mu gufata ibyemezo no kwishyiriraho uburyo n'igihe cyo gukora." },
          { "title": "Kwishimira Ibyo Ukora", "text": "Gukoresha imbaraga zawe mu mushinga ukunda, bitera kunyurwa no kugira ishyaka." },
          { "title": "Guhanga Agaciro", "text": "Amahirwe yo gukemura ibibazo, guhaza ibikenewe, no guhindura ibidukikije mu buryo bwiza." },
          { "title": "Kwiyungura Ubumenyi mu Mwuga", "text": "Inzira yo guhora wiga kugira ngo ubone ubumenyi n'ubuhanga bishya." }
        ],
        "consTitle": "Ingorane (Ibibi)",
        "cons": [
           { "title": "Kwitanga n'Inshingano", "text": "Bisaba amasaha menshi y'akazi, imbaraga, n'inshingano zirenze." },
           { "title": "Ingaruka z'Ubukungu n'Igidahama", "text": "Inyungu ituruka ku ntsinzi y'igitangira, bigatuma igenamigambi ry'ubukungu n'ubushakashatsi ku isoko biba ngombwa." },
           { "title": "Gukora Byinshi n'Igishoro", "text": "Kenshi bisaba gukora imirimo myinshi itandukanye no kubona igishoro cyo gutangira." },
           { "title": "Icyuho mu Makuru", "text": "Imishinga mu mashami mashya y'ibidukikije ishobora kubura amakuru ahagije yo gukora ubushakashatsi ku isoko cyangwa amahugurwa yihariye." }
        ]
      },
      "actionPlan": {
        "title": "Gahunda yawe y'Ibyakorwa mu Ntango 4 zo Guhanga Ikigo",
        "intro": "Gutangiza ikigo ni urugendo rugoye. Ushobora kuvunagura ibyiciro by'ingenzi byo guhanga mu ntambwe enye z'ingenzi:",
        "steps": [
          { "title": "Intambwe ya 1: Gusobanura Umushinga (Urwibutso)", "description": "Iki cyiciro cya mbere ni ingenzi mu kugenzura niba igitekerezo cyawe gihuye n'umushinga wawe bwite.", "points": ["Umwirondoro Wanjye nk'Umuhangi: Menya intego zawe, ibyiza ufite (ubuhanga, uburambe), n'imbogamizi (umuryango, ubuzima, kugenda).", "Igitekerezo cyanjye cyo Guhanga: Sobanura igikorwa cyawe, ibicuruzwa cyangwa serivisi, abakiriya ugenzura, isoko, n'abo muhanganye hashingiwe ku bumenyi ufite ubu.", "Igenzura ry'Ubishobozi: Umushinga ushoboka ugomba kuba wujuje ibi bikurikira: Uhaza ikikenewe. Ufite ikintu gitandukanya (agaciro kongereweho). Uri mu cyiciro cyihariye (wirinda kugerageza gushimisha bose)." ] },
          { "title": "Intambwe ya 2: Kubaka Gahunda y'Ubucuruzi (Ingamba)", "description": "Ibi bikubiyemo gusobanura ibikenewe kugira ngo bigerweho mu buryo bw'ubukungu.", "points": ["Ubushakashatsi ku Isoko: Genzura niba umushinga wawe uhura n'ibikenewe ku isoko kandi usobanure ingamba zawe z'ubucuruzi (igicuruzwa, igiciro, abakiriya, uburyo bwo kugabura, abo muhanganye).", "Isesengura ry'Ubishobozi (Ibizamini 3): Kora isesengura rya mbere ry'ubukungu wibanda ku bintu bitatu by'ingenzi: 1. Agaciro: Gusobanukirwa ibitandukanya n'ibishishikaza abakiriya. 2. Ingamba z'Ubucuruzi: Uburyo uzagerera ku bakiriya no gushyira mu bikorwa ingamba ukoresheje ubushobozi buhari. 3. Isesengura ry'Inyungu: Kwemeza ko inyungu y'ubucuruzi izishyura ibiciro bihoraho (urugero, imishahara, ubukode)." ] },
          { "title": "Intambwe ya 3: Gushaka Inkunga (Ubushobozi)", "description": "Menya ibikenewe mu gishoro n'aho inkunga izava. Uretse inguzanyo zisanzwe, uburyo bushya bushyigikira ibigo bitangiza ibidukikije, harimo amarushanwa atanga inkunga, ubwunganizi, inguzanyo ntoya, n'uburyo bwo gukusanya inkunga binyuze ku mbuga za interineti.", "points": [] },
          { "title": "Intambwe ya 4: Gutangiza Ikigo (Kwemezwa n'amategeko)", "description": "Igihe inkunga imaze kuboneka, zuzaza ibisabwa byo kwiyandikisha hanyuma utangize igikorwa. Wibuke kumenya amategeko agenga umurimo wemewe n'igikorwa cy'ubukungu, bitanga uburenganzira ku murimo no ku burenganzira mu mibereho.", "points": [] }
        ]
      },
      "support": {
        "title": "Ubufasha n'Aho Wabukura",
        "intro": "Niba umushinga wawe ushoboka, ni ngombwa ko woherezwa ku nzego z'inzobere zishobora gutanga ubufasha buhoraho.",
        "sections": [
          { "title": "Inzego z'Ubufasha", "text": "Shakisha imiryango yashyizweho ngo igufashe kongera amahirwe yo gutsinda:", "points": ["Ingamba zishyigikiwe na Serivisi y'Igihugu y'Umurimo (PES).", "Inzego z'amahugurwa cyangwa imiryango itegamiye kuri Leta y'inzobere mu guhanga ibigo.", "Ihuriro ry'abashoramari riteza imbere guhanahana uburambe no kubona abafatanyabikorwa.", "Inzego zicumbikira n'iz'ubujyanama, nk'ibigo birerera imishinga, za fab-labs, amahoteli y'ibigo, cyangwa aho abantu bakorera hamwe." ] },
          { "title": "Ibitekerezo by'Ubucuruzi Butangiza Ibidukikije", "text": "Amahirwe ni menshi, ariko ingero z'inzego zorohereza guhanga ubucuruzi butangiza ibidukikije zirimo Ubuhinzi/Ubworozi (urugero, ubuhinzi bw'imboga bw'umwimerere, gukora ifumbire), n'Ubwikorezi (urugero, serivisi zo gusangira imodoka, gutwara ibintu hakoreshejwe ibinyabiziga bidahumanya).", "points": [] },
          { "title": "Gushimangira Ingamba Zawe", "text": "Niba uhisemo kuba rwiyemezamirimo, icyiciro cy'ingamba cyibanda ku rugendo rwo Guhanga Ikigo ruganisha ku cyiciro cyo Gukora Umwuga. Koresha gahunda y'ibikorwa (nk'iyateguwe mu gitabo cyo guhitamo umwuga wawe w'ejo hazaza) kugira ngo ukurikirane ibikorwa nk'kumenya ubuhanga bukenewe, gutegura umushinga w'amahugurwa, no kubona inkunga.", "points": [] },
          { "title": "Guhura n'Abandi mu Bukungu Butangiza Ibidukikije", "text": "Gira uruhare mu \"guhura n'abandi mu bukunzi butangiza ibidukikije\" kugira ngo umenye amakuru agezweho mu rwego no guhura n'abikorera bo mu karere mu bukungu butangiza ibidukikije.", "points": [] }
        ]
      },
      "footer": {
        "text": "Ibi byavuye mu gitabo cya ILO \"Kubaka ejo hazaza hanjye ku kazi\", by'umwihariko ibitabo \"Nigute nahitamo umwuga wanjye w'ejo hazaza?\" na \"Nigute nakora mu bukungu butangiza ibidukikije?\"."
      }
    }
  }
};
