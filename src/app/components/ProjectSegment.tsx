import Header from "./Header";
import { ProjectCategory, Repository, Variant } from "@/types";
import { getRepositories } from "@/net";
import { IconName } from "@subframe/core";
import { Badge } from "@/ui/components/Badge";
import ProjectNavBar from "./ProjectNavBar";
import { Button } from "@/ui/components/Button";
import Link from "next/link";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { sortByCategory } from "@/tools";

export default async function ProjectSegment() {
  const repositories = await getRepositories();
  sortByCategory(repositories);

  return (
    <div className="flex w-full max-w-[1280px] flex-col items-start gap-8" id="projects">
      <Header sectionName="PORTFOLIO PROJECTS" title="Projects">
        Explore my technical projects
      </Header>
      <ProjectNavBar/>
      <div className="w-full items-start gap-8 grid grid-cols-1 md:grid-cols-2">
        {
          repositories.map((repository: Repository, index: number) => (
            <Card
              key={index}
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
    </div>
  )
}

function Card(props: {
  projectCategory: ProjectCategory,
  title: string,
  description: string,
  liveDemoLink?: string,
  docsLink?: string,
  githubLink: string,
  topics: string[]
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

  return (
    <div id={props.projectCategory} className="flex flex-col items-start gap-6 rounded-md border border-solid border-neutral-border px-6 py-6">
      <div className="flex w-full flex-col items-start gap-4">
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
        <div className="flex flex-wrap items-start gap-2">
          {props.topics.map((topic: string, index: number) => (
            <Badge key={index} variant="neutral">{topic}</Badge>
          ))}
        </div>
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
              variant="brand-secondary"
              iconName="FeatherExternalLink"
              title="Live Demo"
              href={props.liveDemoLink}
            />
          }
          {
            props.docsLink &&
            <LinkButton
              title="Docs"
              variant="neutral-tertiary"
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
  variant: "brand-secondary" | "neutral-secondary" | "neutral-tertiary",
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