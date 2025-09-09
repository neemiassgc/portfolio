import { GitHubRepository, ProjectCategory, Repository } from "@/types";
import { includeStartingWith } from "./tools";

export async function getRepositories(): Promise<Repository[]> {
  const fetchedRepositories: GitHubRepository[] = await authorizedFetch("https://api.github.com/user/repos");

  const filteredRepositories: Promise<Repository>[] = fetchedRepositories
    .filter((repository: GitHubRepository) => includeStartingWith(repository.topics, "portfolio"))
    .map(async (repository: GitHubRepository) => {
      const portfolioTopic = repository.topics.find(topic => topic.includes("portfolio")) as string;
      const projectCategory = portfolioTopic.split("-")[1] ?? "backend";
      
      return {
        name: repository.name,
        description: repository.description,
        topics: repository.topics,
        liveDemoLink: repository.homepage || undefined,
        docsLink: (await getDocsLink(repository)) || undefined,
        githubLink: repository.html_url,
        category: projectCategory as ProjectCategory
      };
    });

    return Promise.all(filteredRepositories);
}

async function getDocsLink(gitHubRepository: GitHubRepository): Promise<string | null> {
  if (!gitHubRepository.topics.includes("swagger")) return null;

  try {
    const file: {content: string} = await authorizedFetch(gitHubRepository.contents_url.replace("{+path}", "settings.gradle"));
    const swaggerContent: string | undefined = atob(file.content).split("\n").find((line: string) => line.includes("swagger"));
    return swaggerContent ? swaggerContent.split("=")[1].trim().replaceAll(/\/|"/g, "") : null;
  }
  catch {
    return null;
  }
}

async function authorizedFetch(url: string) {
  const response =  await fetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28"
    }
  });
  return response.json();
}