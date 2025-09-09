"use client"

import { ToggleGroup } from "@/ui/components/ToggleGroup"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProjectNavBar() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const goTo = (value: string) => {
    const valueToIdMap: { [key: string]: string } = {
      "8614a054": "backend",
      "2e913acf": "frontend",
      "5d2544b1": "game",
      "d8e536a7": "tool"
    }
    setValue(value);
    router.push(`#${valueToIdMap[value]}`);
  }

  return (
    <div className="flex w-full items-center gap-4">
      <div className="flex w-full items-center gap-4">
        <ToggleGroup value={value} onValueChange={goTo}>
          <ToggleGroup.Item icon="FeatherServer" value="8614a054">
            Backend
          </ToggleGroup.Item>
          <ToggleGroup.Item icon="FeatherMonitor" value="2e913acf">
            Frontend
          </ToggleGroup.Item>
          <ToggleGroup.Item icon="FeatherGamepad2" value="5d2544b1">
            Game
          </ToggleGroup.Item>
          <ToggleGroup.Item icon="FeatherTool" value="d8e536a7">
            Tool
          </ToggleGroup.Item>
        </ToggleGroup>
      </div>
    </div>
  )
}