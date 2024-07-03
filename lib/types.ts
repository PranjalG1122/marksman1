import { PROFILES } from "@prisma/client";

export interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

export interface SignInProps {
  email: string;
  password: string;
}

export interface ChapterProps {
  chapterName: string;
  id: string;
  subtopics: SubtopicProps[];
}

export interface SubtopicProps {
  subtopicName: string;
  id: string;
  subtopicUserProgress: {
    userId: string;
  }[];
}

export interface SubTopicListProps {
  subtopicNumber: number;
  subtopicName: string;
  id: string;
  subtopicUserProgress: {
    subtopicId: string;
  }[];
}
[];

export interface SubTopicContentProps {
  content: string;
}
[];

export interface UserProfileProps {
  avatar: PROFILES;
  name: string;
  email: string;
}

export interface ChatBotProps {
  message: string;
  type: "user" | "model";
}

export interface ClassProps {
  classNumber: number;
  chapters: {
    chapterName: string;
    subTopics: {
      subtopicName: string;
      subtopicContent: string;
    }[];
  }[];
}

export interface QuizProps {
  question: string;
  options: string[];
  correct_option: string;
  user_option: string;
}
