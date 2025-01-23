export interface Project {
  title: string;
  description: string;
  link: string;
  technologies?: string[];
}

export interface Tab {
  label: string;
  content: React.ReactNode;
}
