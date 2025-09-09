"use client";
/*
 * Documentation:
 * Topbar with left nav — https://app.subframe.com/library?component=Topbar+with+left+nav_3cac908f-e20b-4c42-a91e-8736a54e8799
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  icon?: SubframeCore.IconName;
  children?: React.ReactNode;
  className?: string;
}

const NavItem = React.forwardRef<HTMLDivElement, NavItemProps>(function NavItem(
  {
    selected = false,
    icon = null,
    children,
    className,
    ...otherProps
  }: NavItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/0d6214aa flex cursor-pointer items-center justify-center gap-2 rounded-md px-2 py-1 hover:bg-neutral-50 active:bg-neutral-100",
        { "bg-brand-50 hover:bg-brand-50 active:bg-brand-100": selected },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <SubframeCore.Icon
        className={SubframeUtils.twClassNames(
          "text-body font-body text-default-font",
          { "text-brand-700": selected }
        )}
        name={icon}
      />
      {children ? (
        <span
          className={SubframeUtils.twClassNames(
            "text-body-bold font-body-bold text-default-font",
            { "text-brand-700": selected }
          )}
        >
          {children}
        </span>
      ) : null}
    </div>
  );
});

interface TopbarWithLeftNavRootProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  rightSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  className?: string;
}

const TopbarWithLeftNavRoot = React.forwardRef<
  HTMLElement,
  TopbarWithLeftNavRootProps
>(function TopbarWithLeftNavRoot(
  { logo, centerSlot, rightSlot, className, ...otherProps }: TopbarWithLeftNavRootProps,
  ref
) {
  const mass = <div className="p-1"></div>;
  return (
    <nav
      className={SubframeUtils.twClassNames(
        "flex flex-wrap justify-center gap-3 sm:gap-0 w-full sm:justify-between items-center border-b border-solid border-neutral-border bg-default-background px-4 py-4",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      { logo ?? mass }
      { centerSlot ?? mass }
      { rightSlot ?? mass }
    </nav>
  );
});

export const TopbarWithLeftNav = Object.assign(TopbarWithLeftNavRoot, {
  NavItem,
});
