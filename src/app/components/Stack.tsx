import { fetchRawIcon } from "@/misc";
import { TechIcon } from "@/types";
import Image from "next/image";

export default async function Stack(props: { names: TechIcon[] }) {
  return (
    <div className="flex gap-4">
      {
        await Promise.all(props.names.map(async (name, key) => {
          const rawIcon = await fetchRawIcon(name);
          return <Image
            key={key}
            width={name === "phaser" ? 48 : 32}
            height={name === "phaser" ? 48 : 32}
            src={`data:image/svg+xml;base64,${Buffer.from(rawIcon).toString("base64")}`}
            alt={`${name} icon`}
          />
        }))
      }
    </div>
  );
}