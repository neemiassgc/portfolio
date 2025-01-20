import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { LinkButton, Svg, Chip } from './collection';
import { ReactNode } from 'react';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader/>
      <SidebarSkills/>
      <SidebarContact/>
    </SidebarContainer>
  )
}

function SidebarContainer({ children }: { children: ReactNode}) {
  return (
    <div className="h-full w-full md:w-[380px] relative md:fixed top-0 left-0">
      <div className="scrollbar pt-4 flex flex-col justify-between gap-5 h-full pl-2 overflow-auto font-core">
        {children}
      </div>
    </div>
  )
}

function SidebarHeader() {
  return (
  <div>
    <Image
      
      width={160}
      height={160}
      alt="avatar"
      className="rounded-full mx-auto"
      src="https://api.dicebear.com/9.x/shapes/svg?seed=pine"
    />
    <p className="text-lg text-center mt-1 text-hues-primary">Neemias Santos</p>
    <p className="text-3xl text-center mt-1 font-bold text-hues-primary">Java Developer</p>
    <p className="text-center mt-1 px-2">
      Etiam imperdiet erat ac finibus porttitor. Nullam non dictum mauris. Phasellus ultrices bibendum sapien.
      Integer vehicula est vel risus congue, et efficitur eros tristique. Duis est augue, molestie ac enim ut,
      faucibus suscipit arcu. Maecenas odio justo, luctus sed viverra sed, facilisis ac nisl. Etiam iaculis
      nibh ac mollis imperdiet. Duis placerat tellus ex, ac varius libero ullamcorper vitae. Nulla tortor
      tortor, congue eu urna at, elementum iaculis dui.
    </p>
  </div>
  )
}

function SidebarSkills() {
  const skills: string[] = [
    "Java", "Spring", "Spring-Boot", "Spring-security", "Postgres", "Docker",
    "Hibernate", "Javascript", "Typescript", "Tailwind-css", "NextJS", "Kotlin",
    "Vercel", "Google-Cloud", "AWS", "Ruby", "React", "HTML",
    "CSS", "Git", "Supabase", "Linux", "Firebase"
  ]

  return (
    <div className="w-full text-center flex-grow px-2">
      <div className="text-2xl text-center text-hues-primary italic mb-3">
        <Divider>
          Skills
        </Divider>
      </div>
      <div className="flex flex-wrap justify-center gap-7">
      {
        skills.map((item, index) =>
          <Svg className="text-4xl" key={index} title={item} iconName={item.toLocaleLowerCase()}/>)
      }
      </div>
    </div>
  )
}

function SidebarContact() {
  return (
    <div className="w-full">
      <Divider className="italic text-2xl">
        Contact
      </Divider>
      <div className="w-full flex items-center justify-evenly">
        <span className="w-fit">
          <LinkButton href="https://linkedin.com/in/neemias-santos-68a348186" title="LinkedIn">
            <SiLinkedin className="text-3xl" style={{color: "#0077B5"}}/>
          </LinkButton>
          <LinkButton href="https://github.com/neemiassgc" title="GitHub">
            <SiGithub className="text-3xl" style={{color: "#181717"}}/>
          </LinkButton>
        </span>
        <Chip
          className="text-hues-secondary bg-hues-secondary font-core"
          icon={<MdEmail className="w-6 h-6"/>} label="neemiassgc@outlook.com" variant="filled"
        />
      </div>
    </div>
  )
}

function Divider(props: {className?: string, children?: ReactNode}) {
  return (
    <div className="flex items-center gap-2">
      <hr className="w-full border-gray-300"/>
      <span className={props.className}>{props.children}</span>
      <hr className="w-full border-gray-300"/>
    </div>
  )
}