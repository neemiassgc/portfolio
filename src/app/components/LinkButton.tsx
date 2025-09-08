"use client"

import { Button } from "@/ui/components/Button";
import { IconName } from "@subframe/core";
import { useRouter } from "next/navigation";

export default function LinkButton(props: {
  href: string,
  iconName: IconName,
  title: string,
  variant: "brand-secondary" | "neutral-secondary" | "neutral-tertiary",
}) {
  const router = useRouter();
  const goTo = (url: string) => () => router.push(url);
  
  return (
    <div>
      <Button
        className="grow-0"
        variant={props.variant}
        size="small"
        icon={props.iconName}
        onClick={goTo(props.href)}
      >
        {props.title}
      </Button>
    </div>
  )
}