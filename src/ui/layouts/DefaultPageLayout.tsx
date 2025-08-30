"use client";
/*
 * Documentation:
 * Avatar — https://app.subframe.com/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 * Default Page Layout — https://app.subframe.com/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Icon Button — https://app.subframe.com/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Topbar with left nav — https://app.subframe.com/library?component=Topbar+with+left+nav_3cac908f-e20b-4c42-a91e-8736a54e8799
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "../components/Avatar";
import { IconButton } from "../components/IconButton";
import { TopbarWithLeftNav } from "../components/TopbarWithLeftNav";
import * as SubframeUtils from "../utils";

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
        leftSlot={
          <>
            <img
              className="h-6 flex-none object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
            />
            <div className="flex items-center gap-2">
              <TopbarWithLeftNav.NavItem selected={true}>
                Home
              </TopbarWithLeftNav.NavItem>
              <TopbarWithLeftNav.NavItem>Inbox</TopbarWithLeftNav.NavItem>
              <TopbarWithLeftNav.NavItem>Reports</TopbarWithLeftNav.NavItem>
            </div>
          </>
        }
        rightSlot={
          <>
            <IconButton icon="FeatherCircleDashed" />
            <IconButton icon="FeatherCircleDashed" />
            <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif">
              A
            </Avatar>
          </>
        }
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
