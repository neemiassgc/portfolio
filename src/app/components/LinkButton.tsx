import { Icon, IconName } from "@subframe/core";
import Link from "next/link";

export default function LinkButton(props: { href: string, children: string, iconName?: IconName, variant: "secondary" | "tertiary" }) {
  const linkClassNames = [
    "group/3b777358 flex h-8 cursor-pointer",
    "items-center gap-2 rounded-md justify-center",
    "border-none px-3 disabled:cursor-default disabled:bg-neutral-200",
    "hover:disabled:cursor-default hover:disabled:bg-neutral-200",
    "active:disabled:cursor-default active:disabled:bg-neutral-200",
    props.variant === "secondary" ?
    "bg-brand-50 hover:bg-brand-100 active:bg-brand-50" :
    "bg-transparent hover:bg-brand-50 active:bg-brand-100"
  ]
  return (
    <Link
      className={linkClassNames.join(" ")}
      href={props.href}
    >
    {
      props.iconName &&
      <Icon
        className="text-body font-body group-disabled/3b777358:text-neutral-400 text-brand-700"
        name={props.iconName}
      />
    }
    <span className="whitespace-nowrap text-body-bold font-body-bold group-disabled/3b777358:text-neutral-400 text-brand-700">
      { props.children }
    </span>
  </Link>
  )
}