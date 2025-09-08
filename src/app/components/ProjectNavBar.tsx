"use client"

import { ToggleGroup } from "@/ui/components/ToggleGroup"

export default function ProjectNavBar() {
  return (
    <div className="flex w-full items-center gap-4">
      <div className="flex w-full items-center gap-4">
        <ToggleGroup value="" onValueChange={(value: string) => {}}>
          <ToggleGroup.Item icon="FeatherGrid" value="bf4918ae">
            All
          </ToggleGroup.Item>
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