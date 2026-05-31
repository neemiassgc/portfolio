interface BasicProps {
  name: string;
  description: string;
  topics: string[];
}

export type GitHubRepository = BasicProps & {
  html_url: string;
  homepage: string;
  contents_url: string;
}

export type Repository = BasicProps & {
  category: ProjectCategory,
  liveDemoLink?: string,
  docsLink?: string,
  githubLink: string,
}

export type Variant = "brand" | "neutral" | "error" | "success" | "warning" | undefined;

export type ProjectCategory = "backend" | "frontend" | "game" | "tool"

export type BasicInput = {
  value: string,
  error: string
}

export type InputProps = {
  name: BasicInput,
  email: BasicInput,
  message: BasicInput
}

export type ContactProps = {
  email: string,
  phone: string,
  location: string,
  profilePhoto: string,
}

export type SectionProps = {
  title: string,
  subtitle: string,
  content?: string
}

export type Lang = "en" | "pt-br"