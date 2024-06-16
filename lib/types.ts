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
  subtopics: SubtopicProps[];
}

export interface SubtopicProps {
  subtopicName: string;
  id: string;
}
