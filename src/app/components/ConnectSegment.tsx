"use client"

import { Button } from "@/ui/components/Button";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import Header from "./Header";
import { useState } from "react";

export default function ConnectSegment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const send = (body: string) => () => {
    setSending(true);
    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body,
    })
      .finally(() => {
        setSending(false);
        setName("");
        setEmail("");
        setMessage("");
      });
  }

  return (
    <div className="flex w-full max-w-[1280px] grow shrink-0 basis-0 flex-col items-center gap-16" id="connect">
      <Header sectionName="CONNECT" title="Let's Connect">
        I&#39;m always interested in hearing about new opportunities,
        collaborations, and exciting projects.
      </Header>
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
            disabled={sending}
          >
            <TextField.Input
              placeholder="Your full name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </TextField>
          <TextField
            disabled={sending}
            className="h-auto w-full flex-none"
            label="Email"
          >
            <TextField.Input
              placeholder="your@email.com"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </TextField>
          <TextArea
            className="h-auto w-full flex-none"
            label="Message"
          >
            <TextArea.Input
              disabled={sending}
              placeholder="Tell me about your project or opportunity..."
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
          </TextArea>
          <div className="flex items-center gap-4">
            <Button
              size="large"
              icon="FeatherSend"
              loading={sending}
              onClick={send(compressBody(name, email, message))}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function compressBody(name: string, email: string, message: string): string {
  return JSON.stringify({
    name,
    email,
    message
  });
}