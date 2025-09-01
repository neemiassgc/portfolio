"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { ToggleGroup } from "@/ui/components/ToggleGroup";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import Hero from "./components/Hero";
import TechnicalSection from "./components/TechnicalSection";

function LandingPage() {
  return (
    <DefaultPageLayout>
      <div className="flex h-full w-full flex-col items-start overflow-auto">
        <div className="flex w-full flex-col items-center gap-16 px-8 py-16">
          <Hero/>
          <TechnicalSection/>
          <div className="flex w-full max-w-[1280px] flex-col items-start gap-8">
            <div className="flex w-full flex-col items-start gap-4">
              <span className="text-heading-1 font-heading-1 text-default-font">
                Projects
              </span>
              <span className="text-body font-body text-subtext-color">
                Explore my technical projects and open source contributions
              </span>
            </div>
            <div className="flex w-full items-center gap-4">
              <ToggleGroup value="" onValueChange={(value: string) => {}}>
                <ToggleGroup.Item icon={null} value="9f5ab4d8">
                  All
                </ToggleGroup.Item>
                <ToggleGroup.Item icon={null} value="0247592f">
                  Backend
                </ToggleGroup.Item>
                <ToggleGroup.Item icon={null} value="9d593855">
                  Frontend
                </ToggleGroup.Item>
                <ToggleGroup.Item icon={null} value="2e7ef312">
                  Full Stack
                </ToggleGroup.Item>
              </ToggleGroup>
            </div>
            <div className="w-full items-start gap-8 grid grid-cols-2">
              <div className="flex flex-col items-start gap-6 rounded-md border border-solid border-neutral-border px-6 py-6">
                <img
                  className="h-64 w-full flex-none rounded-md object-cover"
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="text-heading-2 font-heading-2 text-default-font">
                      Cloud Storage API
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Scalable cloud storage API built with Spring Boot and AWS
                      S3, featuring secure file management and real-time
                      synchronization.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-start gap-2">
                    <Badge variant="neutral">Java</Badge>
                    <Badge variant="neutral">Spring Boot</Badge>
                    <Badge variant="neutral">AWS</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      className="grow-0"
                      variant="brand-secondary"
                      size="small"
                      icon="FeatherExternalLink"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Live Demo
                    </Button>
                    <Button
                      className="grow-0"
                      variant="neutral-secondary"
                      size="small"
                      icon="FeatherGithub"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      GitHub
                    </Button>
                    <Button
                      className="grow-0"
                      variant="neutral-tertiary"
                      size="small"
                      icon="FeatherBook"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Docs
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6 rounded-md border border-solid border-neutral-border px-6 py-6">
                <img
                  className="h-64 w-full flex-none rounded-md object-cover"
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex w-full flex-col items-start gap-2">
                    <span className="text-heading-2 font-heading-2 text-default-font">
                      Task Management System
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Full-stack task management application with real-time
                      updates, user authentication, and team collaboration
                      features.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-start gap-2">
                    <Badge variant="neutral">React</Badge>
                    <Badge variant="neutral">Node.js</Badge>
                    <Badge variant="neutral">MongoDB</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      className="grow-0"
                      variant="brand-secondary"
                      size="small"
                      icon="FeatherExternalLink"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Live Demo
                    </Button>
                    <Button
                      className="grow-0"
                      variant="neutral-secondary"
                      size="small"
                      icon="FeatherGithub"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      GitHub
                    </Button>
                    <Button
                      className="grow-0"
                      variant="neutral-tertiary"
                      size="small"
                      icon="FeatherBook"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Docs
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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