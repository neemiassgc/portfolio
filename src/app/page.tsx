"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import Hero from "./components/Hero";
import TechnicalSegment from "./components/TechnicalSegment";
import ProjectSegment from "./components/ProjectSegment";

function LandingPage() {
  return (
    <DefaultPageLayout>
      <div className="flex h-full w-full flex-col items-start overflow-auto">
        <div className="flex w-full flex-col items-center gap-16 px-8 py-16">
          <Hero/>
          <TechnicalSegment/>
          <ProjectSegment/>
          <div className="flex w-full max-w-[1280px] grow shrink-0 basis-0 flex-col items-center gap-16">
            <div className="flex w-full flex-col items-start gap-4">
              <span className="text-heading-1 font-heading-1 text-default-font">
                Let&#39;s Connect
              </span>
              <span className="text-body font-body text-subtext-color">
                I&#39;m always interested in hearing about new opportunities,
                collaborations, and exciting projects.
              </span>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start gap-2">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Send me a message
                </span>
                <span className="text-body font-body text-subtext-color">
                  I&#39;ll get back to you within 24 hours
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <TextField
                  className="h-auto w-full flex-none"
                  label="Name"
                  helpText=""
                >
                  <TextField.Input
                    placeholder="Your full name"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
                <TextField
                  className="h-auto w-full flex-none"
                  label="Email"
                  helpText=""
                >
                  <TextField.Input
                    placeholder="your@email.com"
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
                <TextArea
                  className="h-auto w-full flex-none"
                  label="Message"
                  helpText=""
                >
                  <TextArea.Input
                    placeholder="Tell me about your project or opportunity..."
                    value=""
                    onChange={(
                      event: React.ChangeEvent<HTMLTextAreaElement>
                    ) => {}}
                  />
                </TextArea>
                <div className="flex items-center gap-4">
                  <Button
                    size="large"
                    icon="FeatherSend"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
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