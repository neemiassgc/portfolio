import { GitHubRepository, RepositoryInfo } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  const parsedRepositories = await parseRepositories(await getRepositories());
  return NextResponse.json(parsedRepositories);
}

async function parseRepositories(repositories: GitHubRepository[]): Promise<RepositoryInfo[]> {
  const filteredRepositories: GitHubRepository[] = repositories
    .filter((repository: GitHubRepository) => repository?.topics?.includes("portfolio"));
    const mappedRepositories: Promise<RepositoryInfo>[] = filteredRepositories.map(async (repository: GitHubRepository) => {
      const readme = await getReadme(repository);
      return {
        name: repository.name,
        description: repository.description,
        topics: repository.topics,
        readme,
        lastCommit: "26/12/24 on main",
        url: repository.html_url
      };
    });

    return Promise.all(mappedRepositories);
}

async function getReadme(repository: GitHubRepository): Promise<string> {
  const readme = await authorizedFetch(repository.contents_url.replace("{+path}", "README.md"));
  return readme.content;
}

async function getRepositories() {
  const githubRepositories = await authorizedFetch("https://api.github.com/user/repos");
  return githubRepositories;
}

async function authorizedFetch(src: string) {
  const url = new URL(src);
  const response =  await (fetch(url.toString(), {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28"
    }
  }));
  return response.json();
}