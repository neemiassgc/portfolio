import Header from "./Header";
import { Lang, ProjectCategory, Repository, TechIcon, Variant } from "@/types";
import { getRepositories } from "@/integration/github";
import { IconName } from "@subframe/core";
import { Badge } from "@/ui/components/Badge";
import ProjectNavBar from "./ProjectNavBar";
import { Button } from "@/ui/components/Button";
import Link from "next/link";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { acronymToIconNamesMap, sortByCategory } from "@/misc";
import Image from "next/image";
import { findSectionData } from "@/integration/notion";
import Stack from "./Stack";

export default async function ProjectSegment(props: { lang: Lang }) {
  const repositories = await getRepositories();
  const projectSectionData = await findSectionData(2, props.lang);

  sortByCategory(repositories);

  const splitRepositories = splitByTwo(repositories);

  return (
    <div className="flex w-full max-w-[1280px] flex-col items-start gap-8" id="projects">
      <Header sectionName="PORTFOLIO PROJECTS" title={projectSectionData.title} subtitle={projectSectionData.subtitle}/>
      <ProjectNavBar/>
      <div className="w-full items-start gap-8 grid grid-cols-1 md:grid-cols-2">
        {
          splitRepositories.map((reps, i) => 
            <div key={i} className="grid grid-cols-1 gap-6">
              {
                reps.map(async (repository: Repository, key: number) => (
                <Card
                  imageData={`https://static-10.s3.sa-east-1.amazonaws.com/screenshots/${repository.name}.png`}
                  key={key}
                  projectCategory={repository.category}
                  title={repository.name}
                  description={repository.description}
                  liveDemoLink={repository.liveDemoLink}
                  docsLink={repository.docsLink}
                  githubLink={repository.githubLink}
                  topics={repository.topics}
                />
              ))
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

async function Card(props: {
  projectCategory: ProjectCategory,
  title: string,
  description: string,
  liveDemoLink?: string,
  docsLink?: string,
  githubLink: string,
  topics: string[],
  imageData?: string
}) {
  const categoryToIconsMap: { [key: string]: IconName } = {
    "backend": "FeatherServer",
    "frontend": "FeatherMonitor",
    "game": "FeatherGamepad2",
    "tool": "FeatherTool"
  }
  const categoryToVariantMap: { [key: string]: Variant } = {
    "backend": "brand",
    "frontend": "success",
    "game": "warning",
    "tool": "error"
  }

  const stackNames = extractStackFromTopics(props.topics);
  console.log(stackNames);

  return (
    <div id={props.projectCategory} className="flex flex-col items-start gap-6 rounded-md border border-solid border-neutral-border px-6 py-6">
      <div className="flex w-full flex-col items-start gap-4">
        {
          props.imageData &&
          <Image
            alt="preview"
            width={1920}
            height={1080}
              className="w-full flex-none object-cover border border-solid border-neutral-border rounded-sm p-1"
              src={props.imageData}
            />
        }
        <div className="flex w-full items-center gap-4">
          <IconWithBackground variant={categoryToVariantMap[props.projectCategory]} size="large" icon={categoryToIconsMap[props.projectCategory]}/>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="text-heading-2 font-heading-2 text-default-font">
              {props.title}
            </span>
            <span className="text-body font-body text-subtext-color">
              {props.description}
            </span>
          </div>
        </div>
        {
          stackNames && <Stack names={stackNames}/>
        }
        <div className="flex items-center gap-2">
          <LinkButton
            variant="neutral-secondary"
            iconName="FeatherGithub"
            title="Github"
            href={props.githubLink}
          />
          {
            props.liveDemoLink &&
            <LinkButton
              variant="destructive-secondary"
              iconName="FeatherExternalLink"
              title="Live Demo"
              href={props.liveDemoLink}
            />
          }
          {
            props.docsLink &&
            <LinkButton
              title="Docs"
              variant="neutral-secondary"
              iconName="FeatherBook"
              href={props.docsLink}
            />
          }
        </div>
      </div>
    </div>
  );
}

function LinkButton(props: {
  href: string,
  iconName: IconName,
  title: string,
  variant: "neutral-secondary" | "destructive-secondary",
}) {  
  return (
    <Link href={props.href} target="_blank">
      <Button
        className="grow-0"
        variant={props.variant}
        size="small"
        icon={props.iconName}
      >
        {props.title}
      </Button>
    </Link>
  )
}

function splitByTwo(repositories: Repository[]): Repository[][] {
  const left = [];
  const right = [];
  for (let i = 0; i < repositories.length; i++) {
    if (i % 2 === 0) left.push(repositories[i]);
    else right.push(repositories[i]);
  }
  return [left, right];
}

function extractStackFromTopics(topics: string[]): TechIcon[] | null {
  const targetTopic = topics.find(topic => topic.startsWith("4"));
  if (!targetTopic) return null;

  const stackLine = targetTopic.slice(1);
  const stackNames: TechIcon[] = [];
  const buffer = [];
  for (let i = 1; i <= stackLine.length; i++) {
    buffer.push(stackLine[i - 1]);
    if (i % 2 === 0) {
      stackNames.push(acronymToIconNamesMap[buffer.join("")] as TechIcon)
      buffer.length = 0;
    }
  }
  return stackNames;
}