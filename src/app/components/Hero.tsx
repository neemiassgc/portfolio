import { empty } from "@/tools";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import SubframeCore, { IconName } from "@subframe/core";
import Header from "./Header";

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
          <Button
            size="large"
            icon="FeatherMail"
            onClick={empty}
          >
            Get in touch
          </Button>
          <Button
            variant="neutral-secondary"
            size="large"
            icon="FeatherDownload"
            onClick={empty}
          >
            Download Resume
          </Button>
          <div className="flex items-center gap-2">
            <IconButton
              icon="FeatherLinkedin"
              onClick={empty}
            />
            <IconButton
              icon="FeatherGithub"
              onClick={empty}
            />
            <IconButton
              icon="FeatherTwitter"
              onClick={empty}
            />
          </div>
        </div>
      </div>
      <div className="flex h-96 w-96 flex-none items-center justify-center overflow-hidden rounded-full bg-brand-100">
        <img
          className="h-96 w-96 flex-none object-cover"
          alt="Filip Ginzberg"
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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