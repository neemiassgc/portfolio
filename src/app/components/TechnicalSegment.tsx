import { Variant } from "@/types";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { IconName } from "@subframe/core";
import Header from "./Header";
import BadgeShield from "./BadgeShield";

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
            items: ["Java", "Spring Boot", "Spring", "Spring Security", "Hibernate"]
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
            items: ["PostgreSQL", "Supabase", "Firebase", "AWS", "S3", "Google Cloud", "App Engine", "Cloud Run", "Compute Engine"]
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

async function BadgeSet(props: {
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

  const data = await Promise.all(props.badges.items.map(async item => {
    const domain = process.env["S3_DOMAIN"];
    const iconPath = process.env["S3_ICON_PATH"];
    const req = await fetch(`${domain}${iconPath}/${polish(item)}.svg`);
    return req.text();
  }))

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
          props.badges.items.map(e => e.toLowerCase()).map((badgeName, index) => {
            return (
              <BadgeShield key={index} title={badgeName} rawLogo={Buffer.from(data[index]).toString("base64")}/>
            )
          })
        }
      </div>
    </div>
  )
}

function polish(str: string): string {
  return str.replaceAll(" ", "").replaceAll(".", "dot").toLowerCase();
}