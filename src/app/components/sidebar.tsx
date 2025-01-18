import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Avatar, Box, Chip, Divider } from "@mui/material"
import { LinkButton, Svg } from './collection';
import { ReactNode } from 'react';

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
    <Box className="h-full w-full md:w-[380px] relative md:fixed top-0 left-0">
      <Box className="scrollbar pt-4 flex flex-col justify-between gap-5 h-full pl-2 overflow-auto font-core">
        {children}
      </Box>
    </Box>
  )
}

function SidebarHeader() {
  return (
  <Box>
    <Avatar variant="circular" className="h-32 w-32 mx-auto" src="https://api.dicebear.com/9.x/shapes/svg?seed=pine">N</Avatar>
    <Box component="p" className="text-lg text-center mt-1 text-hues-primary">Neemias Santos</Box>
    <Box component="p" className="text-3xl text-center mt-1 font-bold text-hues-primary">Java Developer</Box>
    <Box component="p" className="text-center mt-1 px-2">
      Etiam imperdiet erat ac finibus porttitor. Nullam non dictum mauris. Phasellus ultrices bibendum sapien.
      Integer vehicula est vel risus congue, et efficitur eros tristique. Duis est augue, molestie ac enim ut,
      faucibus suscipit arcu. Maecenas odio justo, luctus sed viverra sed, facilisis ac nisl. Etiam iaculis
      nibh ac mollis imperdiet. Duis placerat tellus ex, ac varius libero ullamcorper vitae. Nulla tortor
      tortor, congue eu urna at, elementum iaculis dui.
    </Box>
  </Box>
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
    <Box className="w-full text-center flex-grow px-2">
      <Box component="p" className="text-2xl text-center text-hues-primary italic mb-3">
        <Divider className="pt-1" variant="middle">
          Skills
        </Divider>
      </Box>
      <Box className="flex flex-wrap justify-center gap-7">
      {
        skills.map((item, index) =>
          <Svg className="text-4xl" key={index} title={item} iconName={item.toLocaleLowerCase()}/>)
      }
      </Box>
    </Box>
  )
}

function SidebarContact() {
  return (
    <Box className="w-full">
      <Divider className="italic text-2xl" variant="middle">
        Contact
      </Divider>
      <Box className="w-fit mx-auto">
        <Box component="span" className="w-fit">
          <LinkButton href="https://linkedin.com/in/neemias-santos-68a348186" title="LinkedIn">
            <LinkedInIcon className="text-4xl" sx={{color: "#0077B5"}}/>
          </LinkButton>
          <LinkButton href="https://github.com/neemiassgc" title="GitHub">
            <GitHubIcon className="text-4xl" sx={{color: "#181717"}}/>
          </LinkButton>
        </Box>
        <Chip
          className="text-hues-secondary bg-hues-secondary font-core font-bold ml-4"
          icon={<EmailIcon/>} label="neemiassgc@outlook.com" variant="filled"
        />
      </Box>
    </Box>
  )
}