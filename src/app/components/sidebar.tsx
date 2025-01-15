import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Avatar, Box, Chip } from "@mui/material"
import { LinkButton } from './collection';
import { hues } from '@/tools';

export default function Sidebar() {
  const skills: string[] = [
    "Java", "Spring", "Spring Boot", "JPA", "Hibernate", "Javascript", "Typescript", "TailwindCss", "NextJS",
    "Spring Data JPA", "Kotlin", "Vercel", "Google Cloud", "AWS"
  ]
  
  return (
    <Box component="div" className="h-full w-[380px] fixed top-0 left-0">
      <Box className="pt-4 flex flex-col justify-between gap-0 h-full pl-2">
        <Box>
          <Avatar variant="circular" className="h-32 w-32 mx-auto" src="https://api.dicebear.com/9.x/shapes/svg?seed=pine">N</Avatar>
          <Box component="p" className="text-lg text-center mt-1 font-mono" sx={{color: hues.text}}>Neemias Santos</Box>
          <Box component="p" className="text-3xl text-center mt-1 font-bold" sx={{color: hues.text}}>Java Developer</Box>
          <Box component="p" className="text-center mt-1 p-2">
            Etiam imperdiet erat ac finibus porttitor. Nullam non dictum mauris. Phasellus ultrices bibendum sapien. Integer vehicula est vel risus congue, et efficitur eros tristique. Duis est augue, molestie ac enim ut, faucibus suscipit arcu. Maecenas odio justo, luctus sed viverra sed, facilisis ac nisl. Etiam iaculis nibh ac mollis imperdiet. Duis placerat tellus ex, ac varius libero ullamcorper vitae. Nulla tortor tortor, congue eu urna at, elementum iaculis dui.
          </Box>
        </Box>
        <Box component="div" className="w-full pt-3 px-3 text-center">
          <Box component="p" className="text-2xl font-bold hover:underline text-center mb-3" sx={{color: hues.text}}>Skills</Box>
          {
            skills.map((item, index) =>
              <Chip
                sx={{backgroundColor: hues['bg-secondary'], color: hues['text-secondary']}}
                size="small" label={item} className="m-1" key={index} />)
          }
        </Box>
        <SidebarFooter/>
      </Box>
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
        <Chip
          sx={{backgroundColor: hues['bg-secondary'], color: hues['text-secondary']}}
          icon={<EmailIcon/>} label="neemiassgc@outlook.com" variant="filled" className="ml-3"
        />
      </Box>
      <Box component="p">{"Made with </> by "}{<Box component="span" className="font-bold">Neemias Santos</Box>}</Box>
    </Box>
  )
}