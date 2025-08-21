
export enum AppMode {
  HOME = 'HOME',
  CV_BUILDER = 'CV_BUILDER',
  CV_REVIEW = 'CV_REVIEW',
  LETTER_WRITER = 'LETTER_WRITER',
  LETTER_REVIEW = 'LETTER_REVIEW',
  INTERVIEW_PREP = 'INTERVIEW_PREP',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}