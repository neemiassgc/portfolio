import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import SubframeCore, { IconName } from "@subframe/core";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex w-full max-w-[1280px] flex-wrap items-center justify-between" id="home">
      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-8">
        <Header sectionName="PORTFOLIO" title="Hi, I'm Filip Ginzberg">
          Senior Product Designer crafting intuitive digital experiences
          with a focus on user-centered design and technological
          innovation.
        </Header>
        <div className="flex flex-col items-start gap-4">
          <AboutMe iconName="FeatherMail" text="filip.ginzberg@example.com" />
          <AboutMe iconName="FeatherMapPin" text="San Francisco, CA" />
        </div>
        <div className="flex items-center gap-4">
          <Link href="#connect">
            <Button
              size="large"
              icon="FeatherMail"
            >
              Get in touch
            </Button>
          </Link>
          <Button
            variant="neutral-secondary"
            size="large"
            icon="FeatherDownload"
          >
            Download Resume
          </Button>
          <div className="flex items-center gap-2">
            <IconButton
              icon="FeatherLinkedin"

            />
            <IconButton
              icon="FeatherGithub"

            />
            <IconButton
              icon="FeatherTwitter"

            />
          </div>
        </div>
      </div>
      <div className="flex h-96 w-96 flex-none items-center justify-center overflow-hidden rounded-full bg-brand-100">
        <Image
          width={112}
          height={112}
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Mary"
          alt="avatar"
          className="h-112 w-112 flex-none object-cover"
        />
      </div>
    </div>
  );
}

function AboutMe(props: { iconName: IconName, text: string }) {
  return (
    <div className="flex items-center gap-2">
      <SubframeCore.Icon
        className="text-heading-2 font-heading-2 text-default-font"
        name={props.iconName}
      />
      <span className="text-body font-body text-default-font">
        {props.text}
      </span>
    </div>
  )
}