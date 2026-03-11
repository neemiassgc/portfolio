import { Variant } from "@/types";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { IconName } from "@subframe/core";
import Header from "./Header";
import Image from "next/image";

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
            items: ["Java", "Spring Boot", "Spring", "Spring Security", "Hibernate", "REST APIs", "Json"]
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
            items: ["HTML5", "CSS", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "Subframe", "Vercel", "Auth0"]
          }}
        />
        <BadgeSet
          title={{
            text: "Databases & Cloud",
            iconName: "FeatherDatabase",
            variant: "warning"
          }}
          badges={{
            iconName: "FeatherDatabase",
            items: ["PostgreSQL", "Supabase", "Firebase", "AWS S3", "Google App Engine"]
          }}
        />
        <BadgeSet
          title={{
            text: "Tools",
            iconName: "FeatherMonitor",
            variant: "error"
          }}
          badges={{
            iconName: "FeatherTool",
            items: ["Docker", "Git", "VS Code", "Linux", "IntelliJ IDEA", "Notion", "Insomnia"]
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
          props.badges.items.map(e => e.toLowerCase()).map((item, index) => {
            const convertedItem = item === "java" ? "openjdk" : item.includes("google") ? "google cloud" : item;
            return (
              <Shield key={index} title={item} logo={convertedItem} logoColor={badgesToColorMap[convertedItem]}/>
            )
          })
        }
      </div>
    </div>
  )
}

async function Shield(props: { title: string, logo: string, logoColor: string}) {
  return (
    <Image
      alt={props.title}
      width={0}
      height={0}
      className="w-fit h-fit"
      src={`https://img.shields.io/badge/${props.title}-f1f5f9?logo=${
        props.logo.toLowerCase()}&logoColor=${props.logoColor}&style=for-the-badge`}
    />
  )
}

const badgesToColorMap: { [key: string]: string } = {
  "html": "E34F26",
  "css": "663399",
  "javascript": "F7DF1E",
  "react": "61DAFB",
  "typescript": "3178C6",
  "next.js": "000000",
  "tailwind css": "06B6D4",
  "openjdk": "000000",
  "subframe": "000000",
  "vercel": "000000",
  "auth0": "EB5424",
  "spring": "6DB33F",
  "spring boot": "6DB33F",
  "spring security": "6DB33F",
  "hibernate": "59666C",
  "docker": "2496ED",
  "git": "F05032",
  "intellij idea": "000000",
  "postgresSQL": "4169E1",
  "firebase": "DD2C00",
  "supabase": "3FCF8E",
  "linux": "FCC624",
  "insomnia": "4000BF",
  "notion": "000000",
  "json": "4000BF",
  "google cloud": "4285F4",
}