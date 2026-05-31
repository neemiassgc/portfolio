import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import SubframeCore, { IconName } from "@subframe/core";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
import { findContactData, findSectionData } from "@/integration/notion";
import { Lang } from "@/types";

export default async function Profile(props: { lang: Lang }) {
  const contactData = await findContactData();
  const profileSectionData = await findSectionData(0, props.lang);

  return (
    <div className="flex flex-col md:flex-row justify-center lg:justify-between max-w-[1280px] flex-wrap items-center" id="home">
      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-8">
        <Header sectionName="PORTFOLIO" title={profileSectionData.title} subtitle={profileSectionData.subtitle}>
          { profileSectionData.content }
        </Header>
        <div className="flex flex-col items-start gap-4">
          <AboutMe iconName="FeatherMail" text={contactData.email} />
          <AboutMe iconName="FeatherMapPin" text={contactData.location} />
          <AboutMe iconName="FeatherPhone" text={contactData.phone} />
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-between">
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
            <Link href={"https://www.linkedin.com/in/neemiassgc/"}>
              <IconButton icon="FeatherLinkedin"/>
            </Link>
            <Link href={"https://github.com/neemiassgc"}>
              <IconButton icon="FeatherGithub"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="order-first md:order-none h-96 w-96 flex items-center overflow-hidden rounded-full bg-brand-100">
        <Image
          width={448}
          height={448}
          src={contactData.profilePhoto}
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