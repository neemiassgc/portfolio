import { SvgIcon, SvgIconProps, Tooltip, IconButton } from "@mui/material"
import SpringBootSvg from "../assets/spring-boot.svg"
import JavaSvg from "../assets/java.svg"
import GoogleCloudSvg from "../assets/google-cloud.svg"
import Aws from "../assets/aws.svg"
import Css3 from "../assets/css3.svg"
import Html5 from "../assets/html5.svg"
import Javascript from "../assets/javascript.svg"
import React from "../assets/react.svg"
import Typescript from "../assets/typescript.svg"
import NextJs from "../assets/next-js.svg"
import Vercel from "../assets/vercel.svg"
import Ruby from "../assets/ruby.svg"
import TailwindCss from "../assets/tailwind-css.svg"
import Docker from "../assets/docker.svg"
import Hibernate from "../assets/hibernate.svg"
import CircleIcon from "@mui/icons-material/Circle"
import GitHubIcon from '@mui/icons-material/GitHub';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import DocsIcon from '@mui/icons-material/Article';
import Link from "next/link";
import { ReactNode } from "react"

export function Svg({title, iconName, ...svgIconProps}:
  SvgIconProps & { title: string, iconName: string }
) {
  const importedIcons: {[key: string]: ReactNode} = {
    "java": <JavaSvg/>,
    "springBoot": <SpringBootSvg/>,
    "googleCloud": <GoogleCloudSvg/>,
    "aws": <Aws/>,
    "css3": <Css3/>,
    "html5": <Html5/>,
    "javascript": <Javascript/>,
    "react": <React/>,
    "typescript": <Typescript/>,
    "nextJs": <NextJs/>,
    "vercel": <Vercel/>,
    "ruby": <Ruby/>,
    "tailwindCss": <TailwindCss/>,
    "docker": <Docker/>,
    "hibernate": <Hibernate/>
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
  title: string, href: string, iconName: "live-demo" | "docs" | "github"
}) {

  const buttonIcons: { [key: string]: React.ReactNode } = {
    "live-demo": <GpsFixedIcon className="text-3xl"/>,
    "docs": <DocsIcon className="text-3xl"/>,
    "github": <GitHubIcon className="text-3xl"/>
  }

  return (
    <Tooltip title={props.title}>
      <Link href={props.href}>
        <IconButton>
          {buttonIcons[props.iconName]}
        </IconButton>
      </Link>
    </Tooltip>
  )
}

