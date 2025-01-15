import { Repository } from "./types";

export function tweakRepositoriesByTopics(repositories: Repository[]): Repository[][] {
  const splittedRepositories: Repository[][] = splitBy(repositories, 2);

  const topicsLengthToRepositories: {[key: number]: Repository[]} = splittedRepositories
    .slice(0, splittedRepositories.length - 1)
    .reduce((prev, repos) => {
      const topicsSum: number = repos.reduce((acc, repo) => acc + repo.topics.length, 0);
      return {...prev, [topicsSum]: repos};
    }, {});

  const topicsLength: number[] = Object.keys(topicsLengthToRepositories).map(Number);
  topicsLengthToRepositories[Math.min(topicsLength[0], topicsLength[1])].push(...splittedRepositories[splittedRepositories.length - 1]);

  return Object.values(topicsLengthToRepositories);
}

function splitBy<Type>(array: Type[], size: number): Type[][] {
  const result: Type[][] = [];
  
  let index: number = 0;
  for (let i = 0; i < size; i++) {
    result.push([]);
    for(let j = 0; j < Math.floor(array.length / size); j++)
      result[i].push(array[index++]);
  }

  result.push([]);
  for (let i = 0; i < array.length % size; i++)
    result[result.length - 1].push(array[index++]);
  return result;
}

export function formatTitle(title: string): string {
  return title
    .replace(/-/g, " ").replace(/_/g, " ")
    .split(" ")
    .map(capitalize)
    .join(" ");
}

export function findTechStackNames(topics: string[]): [string, string, string] {
  const programmingLanguages: string[] = [
    "javascript", "typescript", "python", "c#",
    "c++", "kotlin", "ruby", "go", "rust", "java"
  ]
  const frameworks: string[] = [
    "spring-boot", "angular", "vue", "nextjs", "gatsby", "react",
    "express", "flask", "django", "rails", "laravel", "symfony"
  ]
  const cloudPlatforms: string[] = [
    "aws", "google-cloud", "firebase", "github-pages",
    "azure", "heroku", "netlify", "vercel", "digital-ocean"
  ]

  return [
    findIconNameByTopic(programmingLanguages, topics) || "",
    findIconNameByTopic(frameworks, topics) || "",
    findIconNameByTopic(cloudPlatforms, topics) || "",
  ]
}

function findIconNameByTopic(iconNames: string[], topics: string[]): string | undefined {
  return iconNames.find(iconName =>
    topics.some(topic =>
      topic.includes("-") && iconName.includes("-")
        ? topic.includes(iconName) : topic === iconName
    ));
}

function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export const hues = {
  bg: "#fffffe",
  "bg-secondary": "#f2f4f6",
  text: "#00214d",
  "text-secondary": "#1b2d45",
  highlight: "#ff5470"
}