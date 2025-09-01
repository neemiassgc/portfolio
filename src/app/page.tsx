"use client";

import React from "react";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import Hero from "./components/Hero";
import TechnicalSegment from "./components/TechnicalSegment";
import ProjectSegment from "./components/ProjectSegment";
import ConnectSegment from "./components/ConnectSegment";

function LandingPage() {
  return (
    <DefaultPageLayout>
      <div className="flex h-full w-full flex-col items-start overflow-auto">
        <div className="flex w-full flex-col items-center gap-16 px-8 py-16">
          <Hero/>
          <TechnicalSegment/>
          <ProjectSegment/>
          <ConnectSegment/>
        </div>
        <div className="flex w-full flex-col items-center border-t border-solid border-neutral-border bg-neutral-50 px-4 py-4">
          <span className="text-body font-body text-subtext-color">
            © 2024 All rights reserved. Built with passion and modern
            technologies
          </span>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default LandingPage;