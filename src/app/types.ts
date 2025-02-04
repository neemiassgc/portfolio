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
  liveDemoLink?: string,
  docsLink?: string,
  githubLink: string,
}