
// FIX: Define and export the AppMode enum. Using a string enum prevents issues with object key lookups.
export enum AppMode {
  HOME = 'HOME',
  CV_BUILDER = 'CV_BUILDER',
  CV_REVIEW = 'CV_REVIEW',
  LETTER_WRITER = 'LETTER_WRITER',
  LETTER_REVIEW = 'LETTER_REVIEW',
  INTERVIEW_PREP = 'INTERVIEW_PREP',
  VENTURE_LAUNCHPAD = 'VENTURE_LAUNCHPAD',
}

// FIX: Define and export the ChatMessage interface.
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// FIX: Define and export the Translations interface to be used by the i18n configuration.
export interface Translations {
  APP_NAME: string;
  navItems: Record<AppMode, string>;
  modeDetails: Record<AppMode, { title: string; description: string }>;
  systemInstructions: Record<AppMode, string>;
  welcomeMessages: Partial<Record<AppMode, string>>;
  placeholder: string;
  copyright: string;
  languageSelector: string;
  getStarted: string;
  fileUploadScreen: {
    title: Record<'CV_REVIEW' | 'LETTER_REVIEW', string>;
    prompt: string;
    supportedFormats: string;
    uploading: string;
    error: {
      default: string;
      fileType: string;
    }
  };
  jobCreationGuide: any; // Using any for simplicity as it's a large nested object
}
