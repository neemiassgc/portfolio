import { Variant } from "@/types";
import { Badge } from "@/ui/components/Badge";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { IconName } from "@subframe/core";
import Header from "./Header";

export default function TechnicalSegment() {
  return (
    <div className="flex w-full max-w-[1280px] flex-col items-start gap-8" id="skills">
      <Header sectionName="SKILLS & EXPERTISE" title="Technical Proficiencies">
          A comprehensive overview of my technical skills and expertise
          across different domains
      </Header>
      <div className="flex w-full flex-col items-start gap-8">
        <BadgeSet
          title={{
            text: "Backend Development",
            iconName: "FeatherServer",
            variant: "brand"
          }}
          badges={{
            iconName: "FeatherCode",
            items: ["Java", "Spring Boot", "Python", "Node.js", "REST APIs"]
          }}
        />
        <BadgeSet
          title={{
            text: "Frontend Development",
            iconName: "FeatherLayout",
            variant: "brand"
          }}
          badges={{
            iconName: "FeatherCode",
            items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"]
          }}
        />
        <BadgeSet
          title={{
            text: "Databases",
            iconName: "FeatherDatabase",
            variant: "warning"
          }}
          badges={{
            iconName: "FeatherDatabase",
            items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
          }}
        />
        <BadgeSet
          title={{
            text: "DevOps & Tools",
            iconName: "FeatherMonitor",
            variant: "error"
          }}
          badges={{
            iconName: "FeatherTool",
            items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"]
          }}
        />
      </div>
    </div>
  )
}

function BadgeSet(props: {
  title: {
    iconName: IconName;
    text: string;
    variant: Variant
  },
  badges: {
    iconName: IconName;
    items: string[]
  }
}) {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        <IconWithBackground
          variant={props.title.variant}
          size="medium"
          icon={props.title.iconName}
        />
        <span className="text-heading-2 font-heading-2 text-default-font">
          {props.title.text}
        </span>
      </div>
      <div className="flex flex-wrap items-start gap-2">
        {
          props.badges.items.map((item, index) => {
            return (
              <Badge variant="neutral" icon={props.badges.iconName} key={index}>
                {item}
              </Badge>
            )
          })
        }
      </div>
    </div>
  )
}