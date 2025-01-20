import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiRuby } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiSpringsecurity } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { FaCircle } from "react-icons/fa6";
import Link from "next/link";
import { ReactNode } from "react"

export function findIconByName(iconName: string, iconSize: "small" | "medium" = "medium"): ReactNode {
  const size: string = {small: "w-6 h-6", medium: "w-8 h-8"}[iconSize]
  const iconList: {[key: string]: ReactNode} = {
    "java": <FaJava className={size} style={{color: "#000000"}} />,
    "spring-boot": <SiSpringboot className={size} style={{color: "#6DB33F"}}/>,
    "google-cloud": <SiGooglecloud className={size} style={{color: "#4285F4"}}/>,
    "aws": <FaAws className={size} style={{color: "#232F3E"}}/>,
    "css": <SiCss3 className={size} style={{color: "#1572B6"}}/>,
    "html": <SiHtml5 className={size} style={{color: "#E34F26"}}/>,
    "javascript": <SiJavascript className={size} style={{color: "#F7DF1E"}}/>,
    "react": <SiReact className={size} style={{color: "#61DAFB"}}/>,
    "typescript": <SiTypescript className={size} style={{color: "#3178C6"}}/>,
    "nextjs": <SiNextdotjs className={size} style={{color: "#000000"}}/>,
    "vercel": <SiVercel className={size} style={{color: "#000000"}}/>,
    "ruby": <SiRuby className={size} style={{color: "#CC342D"}}/>,
    "tailwind-css": <SiTailwindcss className={size} style={{color: "#06B6D4"}}/>,
    "docker": <SiDocker className={size} style={{color: "#2496ED"}}/>,
    "hibernate": <SiHibernate className={size} style={{color: "#59666C"}}/>,
    "firebase": <SiFirebase className={size} style={{color: "#DD2C00"}}/>,
    "spring": <SiSpring className={size} style={{color: "#6DB33F"}}/>,
    "spring-security": <SiSpringsecurity className={size} style={{color: "#6DB33F"}}/>,
    "git": <SiGit className={size} style={{color: "#F05032"}}/>,
    "linux": <SiLinux className={size} style={{color: "#FCC624"}}/>,
    "kotlin": <SiKotlin className={size} style={{color: "#7F52FF"}}/>,
    "postgres": <SiPostgresql className={size} style={{color: "#4169E1"}}/>,
    "supabase": <SiSupabase className={size} style={{color: "#3FCF8E"}}/>
  }

  return iconList[iconName] ?? <FaCircle/>
}

export function LinkButton(props: {
  title: string, href: string, children?: ReactNode
}) {
  return (
    <Link target="_blank" href={props.href}>
      <IconButton>
        {props.children}
      </IconButton>
    </Link>
  )
}

export function Footer({ className = "" }: { className?: string }) {
  return (
    <p className={className}>
      {"Made with </> by "}
      {
        <span className="font-bold">Neemias Santos</span>
      }
    </p>
  )
}

function IconButton(props: { children: ReactNode}) {
  return (
    <button type="button" className="rounded-full p-2.5">
      {props.children}
    </button>
  )
}

export function Chip(props: { className: string, label: string, variant: "filled" | "outlined", icon?: ReactNode}) {
  return (
    <div className={`w-fit px-3 py-1 rounded-3xl flex items-center justify-between gap-2 ${props.className}`}>
      { props.icon }
      <span className="inline">{ props.label }</span>
    </div>
  )
}