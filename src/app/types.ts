export interface Repository {
  name: string;
  description: string;
  topics: string[];
}

export type GitHubRepository = Repository & { contents_url: string, html_url: string };

export type RepositoryInfo = Repository & { readme: string, lastCommit: string, url: string };