import { PROFILES, SUBTOPICTYPE } from "@prisma/client";

export interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

export interface SignInProps {
  email: string;
  password: string;
}

export interface ClassProps {
  chapters: ChapterProps[];
}
[];

export interface ChapterProps {
  chapterName: string;
  id: string;
  subtopics: SubtopicProps[];
}

export interface SubtopicProps {
  subtopicName: string;
  id: string;
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
  type: SUBTOPICTYPE;
  content: string;
}
[];

export interface UserProfileProps {
  avatar: PROFILES;
  name: string;
  email: string;
}
