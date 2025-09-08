import { ToggleGroup } from "@/ui/components/ToggleGroup";
import Header from "./Header";
import { Repository } from "@/types";
import { getRepositories } from "@/net";
import Card from "./Card";

export default async function ProjectSegment() {
  const repositories = await getRepositories();

  return (
    <div className="flex w-full max-w-[1280px] flex-col items-start gap-8" id="projects">
      <Header sectionName="PORTFOLIO PROJECTS" title="Projects">
        Explore my technical projects and open source contributions
      </Header>
      <div className="flex w-full items-center gap-4">
        <div className="flex w-full items-center gap-4">
          <ToggleGroup value="" onValueChange={(value: string) => {}}>
            <ToggleGroup.Item icon="FeatherGrid" value="bf4918ae">
              All
            </ToggleGroup.Item>
            <ToggleGroup.Item icon="FeatherServer" value="8614a054">
              Backend
            </ToggleGroup.Item>
            <ToggleGroup.Item icon="FeatherMonitor" value="2e913acf">
              Frontend
            </ToggleGroup.Item>
            <ToggleGroup.Item icon="FeatherGamepad2" value="5d2544b1">
              Game
            </ToggleGroup.Item>
            <ToggleGroup.Item icon="FeatherTool" value="d8e536a7">
              Tool
            </ToggleGroup.Item>
          </ToggleGroup>
        </div>
      </div>
      <div className="w-full items-start gap-8 grid grid-cols-2">
        {
          repositories.map((repository: Repository, index: number) => (
            <Card
              key={index}
              projectIconVariant={"backend"}
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