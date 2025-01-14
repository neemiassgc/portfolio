import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Avatar, Box, Chip } from "@mui/material"
import { LinkButton } from './collection';

export default function Sidebar() {
  const skills: string[] = [
    "Java", "Spring", "Spring Boot", "JPA", "Hibernate", "Javascript", "Typescript", "TailwindCss", "NextJS",
    "Spring Data JPA", "Kotlin", "Vercel", "Google Cloud", "AWS"
  ]
  
  return (
    <Box component="div" className="h-full w-[360px] fixed top-0 left-0 z-50 pt-4 flex flex-col justify-between gap-0" sx={{borderRight: "1px solid grey"}}>
      <Box>
        <Avatar variant="circular" className="h-32 w-32 mx-auto" src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=apples">N</Avatar>
        <Box component="p" className="text-lg text-center mt-1 font-mono">Neemias Santos</Box>
        <Box component="p" className="text-3xl text-center mt-1 font-bold">Java Developer</Box>
        <Box component="p" className="text-center mt-1 p-2">
          Etiam imperdiet erat ac finibus porttitor. Nullam non dictum mauris. Phasellus ultrices bibendum sapien. Integer vehicula est vel risus congue, et efficitur eros tristique. Duis est augue, molestie ac enim ut, faucibus suscipit arcu. Maecenas odio justo, luctus sed viverra sed, facilisis ac nisl. Etiam iaculis nibh ac mollis imperdiet. Duis placerat tellus ex, ac varius libero ullamcorper vitae. Nulla tortor tortor, congue eu urna at, elementum iaculis dui.
        </Box>
      </Box>
      <Box component="div" className="w-full pt-3 px-3 text-center">
        <Box component="p" className="text-2xl italic hover:underline text-center mb-3">Skills</Box>
        {
          skills.map((item, index) => <Chip size="small" label={item} className="m-1" key={index} />)
        }
      </Box>
      <SidebarFooter/>
    </Box>
  )
}

function SidebarFooter() {
  return (
    <Box component="div" className="pb-1 text-center">
      <Box component="div" className="w-fit mx-auto">
        <Box component="span" className="w-fit">
          <LinkButton href="https://linkedin.com/in/neemias-santos-68a348186" title="LinkedIn">
            <LinkedInIcon className="text-4xl" sx={{color: "#0077B5"}}/>
          </LinkButton>
          <LinkButton href="https://github.com/neemiassgc" title="GitHub">
            <GitHubIcon className="text-4xl" sx={{color: "#181717"}}/>
          </LinkButton>
        </Box>
        <Chip icon={<EmailIcon/>} label="neemiassgc@outlook.com" variant="outlined" className="ml-3"/>
      </Box>
      <Box component="p" className="mt-4">{"Made with </> by Neemias Santos"}</Box>
    </Box>
  )
}