import SpringBootSvg from "../assets/spring-boot.svg";
import JavaSvg from "../assets/java.svg";
import GoogleCloudSvg from "../assets/google-cloud.svg";
import Aws from "../assets/aws.svg";
import Css3 from "../assets/css3.svg";
import Html5 from "../assets/html5.svg";
import Javascript from "../assets/javascript.svg";
import React from "../assets/react.svg";
import Typescript from "../assets/typescript.svg";
import NextJs from "../assets/next-js.svg";
import Vercel from "../assets/vercel.svg";
import Ruby from "../assets/ruby.svg";
import TailwindCss from "../assets/tailwind-css.svg";
import Firebase from "../assets/firebase.svg";
import Docker from "../assets/docker.svg";
import Hibernate from "../assets/hibernate.svg";
import Html from "../assets/html5.svg";
import Css from "../assets/css3.svg";
import Spring from "../assets/spring.svg";
import SpringSecurity from "../assets/spring-security.svg";
import Git from "../assets/git.svg";
import Linux from "../assets/linux.svg";
import Kotlin from "../assets/kotlin.svg";
import Postgres from "../assets/postgresql.svg";
import Supabase from "../assets/supabase.svg";
import { FaCircle } from "react-icons/fa6";
import Link from "next/link";
import { ReactNode } from "react"

export function Svg({title, iconName}:
  { title: string, iconName: string, className?: string }
) {
  const importedIcons: {[key: string]: ReactNode} = {
    "java": <JavaSvg className="w-8 h-8"/>,
    "spring-boot": <SpringBootSvg className="w-8 h-8"/>,
    "google-cloud": <GoogleCloudSvg className="w-8 h-8"/>,
    "aws": <Aws className="w-8 h-8"/>,
    "css3": <Css3 className="w-8 h-8"/>,
    "html5": <Html5 className="w-8 h-8"/>,
    "javascript": <Javascript className="w-8 h-8"/>,
    "react": <React className="w-8 h-8"/>,
    "typescript": <Typescript className="w-8 h-8"/>,
    "nextjs": <NextJs className="w-8 h-8"/>,
    "vercel": <Vercel className="w-8 h-8"/>,
    "ruby": <Ruby className="w-8 h-8"/>,
    "tailwind-css": <TailwindCss className="w-8 h-8"/>,
    "docker": <Docker className="w-8 h-8"/>,
    "hibernate": <Hibernate className="w-8 h-8"/>,
    "firebase": <Firebase className="w-8 h-8"/>,
    "html": <Html className="w-8 h-8"/>,
    "css": <Css className="w-8 h-8"/>,
    "spring": <Spring className="w-8 h-8"/>,
    "spring-security": <SpringSecurity className="w-8 h-8"/>,
    "git": <Git className="w-8 h-8"/>,
    "linux": <Linux className="w-8 h-8"/>,
    "kotlin": <Kotlin className="w-8 h-8"/>,
    "postgres": <Postgres className="w-8 h-8"/>,
    "supabase": <Supabase className="w-8 h-8"/>
  }

  return  importedIcons[iconName] ?? <FaCircle/>
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