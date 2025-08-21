
export enum AppMode {
  HOME = 'HOME',
  CV_BUILDER = 'CV_BUILDER',
  LETTER_WRITER = 'LETTER_WRITER',
  INTERVIEW_PREP = 'INTERVIEW_PREP',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}