import { Button } from "@/ui/components/Button";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";

export default function ConnectSegment() {
  return (
    <div className="flex w-full max-w-[1280px] grow shrink-0 basis-0 flex-col items-center gap-16">
      <div className="flex w-full flex-col items-start gap-4">
        <span className="text-caption font-caption text-brand-600">CONTACT</span>
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
  )
}