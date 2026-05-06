import Image from "next/image";

export default function BadgeShield(props: { rawLogo: string, title: string}) {
  return (
    <div className="flex items-center gap-2 bg-default-background border-2 border-neutral-border py-1 px-3 rounded-full">
      <Image
        width={20}
        height={20}
        src={`data:image/svg+xml;base64,${props.rawLogo}`}
        alt={`${props.title} icon`}
      />
      <span className="text-body font-body text-default-font">{props.title.toLocaleUpperCase()}</span>
    </div>
  )
}