/*
 * Documentation:
 * Avatar — https://app.subframe.com/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 * Default Page Layout — https://app.subframe.com/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Icon Button — https://app.subframe.com/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Topbar with left nav — https://app.subframe.com/library?component=Topbar+with+left+nav_3cac908f-e20b-4c42-a91e-8736a54e8799
 */

import React from "react";
import { TopbarWithLeftNav } from "../components/TopbarWithLeftNav";
import * as SubframeUtils from "../utils";
import Image from "next/image";
import { Lang } from "@/types";
import LinkButton from "@/components/LinkButton";

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLDivElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  const lang = otherProps.lang as Lang;

  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex h-screen w-full flex-col items-center",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <TopbarWithLeftNav
        logo={
          <div className="flex items-center gap-4 ml-4 mr-8 sm:mr-0">
            <Image src="/folder.svg" width={32} height={32} alt="Logo"/>
            <span className="text-heading-2 font-heading-2 text-default-font">
              Portfolio
            </span>
          </div>
        }
        centerSlot={
          <div className="order-last sm:order-none flex flex-shrink items-center gap-2">
            <LinkButton variant="tertiary" href="/#home">Home</LinkButton>
            <LinkButton variant="tertiary" href="/#skills">{ lang === "en" ? "Skills" : "Habilidades"}</LinkButton>
            <LinkButton variant="tertiary" href="/#projects">{ lang === "en" ? "Projects" : "Projetos"}</LinkButton>
            <LinkButton variant="tertiary" href="/#connect">{ lang === "en" ? "Contact" : "Contato"}</LinkButton>
          </div>
        }
        rightSlot={<ToggleLangButton lang={lang}/>}
      />
      {children ? (
        <div className="flex-grow flex w-full shrink-0 basis-0 flex-col items-start gap-4 overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;

function ToggleLangButton(props: { lang: Lang }) {
  return (
    <div className="flex gap-0 mr-5">
      <LinkButton
        variant="secondary"
        iconName="FeatherGlobe"
        href={props.lang === "en" ? "/" : "en"}
      >
        {props.lang === "en" ? "PT-BR" : "EN"}
      </LinkButton>
      <Image className="ml-3" src={`/${props.lang === "en" ? "us" : "br"}.svg`} width={24} height={24} alt="Language"/>
    </div>
  )
}

