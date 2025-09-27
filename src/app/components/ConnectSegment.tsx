"use client"

import { Button } from "@/ui/components/Button";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import Header from "./Header";
import { useState } from "react";
import { BasicInput, InputProps } from "@/types";

export default function ConnectSegment() {
  const [field, setField] = useState<InputProps>({
    name: {
      value: "",
      error: ""
    },
    email: {
      value: "",
      error: ""
    },
    message: {
      value: "",
      error: ""
    }
  })

  const [sending, setSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const set = (props: string[], value: string) => {
    const newObj: { [key: string]: BasicInput } = {};
    for (const key of props) {
      newObj[key] = {
        value,
        error: ""
      }
    }
    setField({
      ...field,
      ...newObj
    });
    setMessageSent(false);
  }

  const send = (body: string) => () => {
    checkForErrors(field).then(() => {
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
          set(["name", "email", "message"], "");
          setMessageSent(true);
        });
    })
    .catch(setField)
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
            error={!!field.name.error}
            helpText={field.name.error}
            className="h-auto w-full flex-none"
            label="Name"
            disabled={sending}
          >
            <TextField.Input
              placeholder="Your full name"
              value={field.name.value}
              onChange={event => set(["name"], event.target.value)}
            />
          </TextField>
          <TextField
            error={!!field.email.error}
            helpText={field.email.error}
            disabled={sending}
            className="h-auto w-full flex-none"
            label="Email"
          >
            <TextField.Input
              placeholder="your@email.com"
              value={field.email.value}
              onChange={event => set(["email"], event.target.value)}
            />
          </TextField>
          <TextArea
            error={!!field.message.error}
            helpText={field.message.error}
            className="h-auto w-full flex-none"
            label="Message"
          >
            <TextArea.Input
              disabled={sending}
              placeholder="Tell me about your project or opportunity..."
              value={field.message.value}
              onChange={event => set(["message"], event.target.value)}
            />
          </TextArea>
          <div className="flex items-center gap-4">
            <Button
              className={messageSent ? "bg-green-600 hover:bg-green-500 active:bg-green-600" : ""}
              variant="brand-primary"
              size="large"
              icon={messageSent ? "FeatherCheckCircle" : "FeatherSend"}
              loading={sending}
              onMouseEnter={() => setMessageSent(false)}
              onClick={send(compressBody(field))}
            >
              {
                messageSent ? "Sent" : "Send Message"
              }
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function compressBody(field: InputProps) {
  return JSON.stringify({
    name: field.name.value,
    email: field.email.value,
    message: field.message.value
  });
}

function checkForErrors(field: InputProps): Promise<void> {
  return new Promise((resolve, reject) => {
    const workingObj: { [key: string]: BasicInput } = {};
    for (const [ key, value ] of Object.entries(field)) {
      workingObj[key] = {
          value: value.value,
          error: value.value.length === 0 ?
          "Can not be empty" : value.value.length < 4 ?
          "Too short" : ""
        }
    }

    if (Object.values(workingObj).every(value => !value.error)) resolve();
    else reject(workingObj);
  });
}