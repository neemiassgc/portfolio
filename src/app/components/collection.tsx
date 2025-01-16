import { SvgIcon, SvgIconProps, Tooltip, IconButton } from "@mui/material";
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
import CircleIcon from "@mui/icons-material/Circle"
import Link from "next/link";
import { ReactNode } from "react"

export function Svg({title, iconName, ...svgIconProps}:
  SvgIconProps & { title: string, iconName: string }
) {
  const importedIcons: {[key: string]: ReactNode} = {
    "java": <JavaSvg/>,
    "spring-boot": <SpringBootSvg/>,
    "google-cloud": <GoogleCloudSvg/>,
    "aws": <Aws/>,
    "css3": <Css3/>,
    "html5": <Html5/>,
    "javascript": <Javascript/>,
    "react": <React/>,
    "typescript": <Typescript/>,
    "nextjs": <NextJs/>,
    "vercel": <Vercel/>,
    "ruby": <Ruby/>,
    "tailwind-css": <TailwindCss/>,
    "docker": <Docker/>,
    "hibernate": <Hibernate/>,
    "firebase": <Firebase/>,
    "html": <Html/>,
    "css": <Css/>,
    "spring": <Spring/>,
    "spring-security": <SpringSecurity/>,
    "git": <Git/>,
    "linux": <Linux/>,
    "kotlin": <Kotlin/>,
    "postgres": <Postgres/>,
    "supabase": <Supabase/>
  }

  return (
    <Tooltip title={title} arrow>
      <SvgIcon {...svgIconProps} className={svgIconProps.className+" cursor-pointer"} inheritViewBox>
        {importedIcons[iconName] ?? <CircleIcon/>}
      </SvgIcon>
    </Tooltip>
  )
}

export function LinkButton(props: {
  title: string, href: string, children?: ReactNode
}) {
  return (
    <Tooltip title={props.title}>
      <Link target="_blank" href={props.href}>
        <IconButton>
          {props.children}
        </IconButton>
      </Link>
    </Tooltip>
  )
}

