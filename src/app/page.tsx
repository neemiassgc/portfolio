import { Box } from "@mui/material"
import Sidebar from "./components/sidebar"

export default function Home() {
  return (
    <>
      <Box className="w-full min-h-screen" component="div">
        <Sidebar/>

        <Box component="div" className="ml-[360px] w-full">

        </Box>
      </Box>
    </>
  )
}