"use client";
/*
 * Documentation:
 * Avatar — https://app.subframe.com/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 * Default Page Layout — https://app.subframe.com/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Icon Button — https://app.subframe.com/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Topbar with left nav — https://app.subframe.com/library?component=Topbar+with+left+nav_3cac908f-e20b-4c42-a91e-8736a54e8799
 */

import React, { useState } from "react";
import { TopbarWithLeftNav } from "../components/TopbarWithLeftNav";
import * as SubframeUtils from "../utils";
import Image from "next/image";
import { Button } from "../components/Button";

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
  const [selected, setSelected] = useState([1, 0, 0, 0]);
  const selectItem = (index: number) => () => {
    const newValues = [0, 0, 0, 0];
    newValues[index] = 1;
    setSelected(newValues);
  }

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
          <Image className="ml-5" src="/folder.svg" width={32} height={32} alt="Logo"/>
        }
        centerSlot={
          <div className="flex items-center gap-2">
            <TopbarWithLeftNav.NavItem selected={!!selected[0]} onClick={selectItem(0)}>
              Home
            </TopbarWithLeftNav.NavItem>
            <TopbarWithLeftNav.NavItem selected={!!selected[1]} onClick={selectItem(1)}>Skills</TopbarWithLeftNav.NavItem>
            <TopbarWithLeftNav.NavItem selected={!!selected[2]} onClick={selectItem(2)}>Projects</TopbarWithLeftNav.NavItem>
            <TopbarWithLeftNav.NavItem selected={!!selected[3]} onClick={selectItem(3)}>Connect</TopbarWithLeftNav.NavItem>
          </div>
        }
        rightSlot={<ToggleLangButton/>}
      />
      {children ? (
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;

function ToggleLangButton() {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div className="flex gap-0 mr-5">
      <Button
        variant="neutral-secondary"
        icon="FeatherGlobe"
        onClick={() => setIsEnglish(!isEnglish)}
      >
        {isEnglish ? "En" : "Pt-br"}
      </Button>
      <Image className="ml-3" src={`/${isEnglish ? "us" : "br"}.svg`} width={24} height={24} alt="Language"/>
    </div>
  )
}
