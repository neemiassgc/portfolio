import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import { Avatar, Box, Chip } from "@mui/material"

export default function Sidebar() {
  const skills: string[] = [
    "Java", "Spring", "Spring Boot", "JPA", "Hibernate", "Javascript", "Typescript", "TailwindCss", "NextJS",
    "Spring Data JPA", "Kotlin", "Vercel", "Google Cloud", "AWS"
  ]
  
  return (
    <Box component="div" className="h-full w-[360px] fixed top-0 left-0 z-50 pt-4 flex flex-col justify-between gap-0" sx={{borderRight: "1px solid grey"}}>
      <Box>
        <Avatar variant="circular" className="h-32 w-32 mx-auto" src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=apples">N</Avatar>
        <p className="text-lg text-center mt-3 font-mono">Neemias Santos</p>
        <p className="text-3xl text-center mt-5 font-bold">Java Developer</p>
        <p className="text-center mt-3 p-2">Com paixão por tecnologia, fica entusiasmado em criar coisas que torna a vida das pessoas mais fácil</p>
      </Box>
      <Box component="div" className="w-full pt-3 px-3 text-center">
        <p className="text-2xl italic underline text-center mb-3">Skills</p>
        {
          skills.map((item, index) => <Chip label={item} className="m-1" key={index} />)
        }
      </Box>
      <SidebarFooter/>
    </Box>
  )
}

function SidebarFooter() {
  return (
    <Box component="div" className="pb-1 text-center">
      <Box component="div" className="mx-auto w-fit">
        <Link href="https://linkedin.com/in/neemias-santos-68a348186">
          <LinkedInIcon className="mr-3 text-4xl" sx={{color: "#0077B5"}}/>
        </Link>
        <Link href="https://github.com/neemiassgc">
          <GitHubIcon className="text-4xl" sx={{color: "#181717"}}/>
        </Link>
        <Chip icon={<EmailIcon/>} label="neemiassgc@outlook.com" variant="outlined" className="ml-3"/>
      </Box>
      <p className="mt-4">Created by Neemias Santos</p>
    </Box>
  )
}