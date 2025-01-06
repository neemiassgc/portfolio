import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await getPortfolioProjects());
}

async function getPortfolioProjects(): Promise<string[]> {
  const githubRepositories = await authorizedFetch();
  return githubRepositories
    .filter((repository: { topics?: string[] }) => repository?.topics?.includes("portfolio"))
    .map((repository: { html_url: string }) => repository.html_url);
}

async function authorizedFetch(queryParams: { [key: string]: string } = {}) {
  const url = new URL("https://api.github.com/user/repos");
  Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
  const response =  await (fetch(url.toString(), {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28"
    }
  }));
  return response.json();
}