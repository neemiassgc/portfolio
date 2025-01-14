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
    "firebase": <Firebase/>
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

