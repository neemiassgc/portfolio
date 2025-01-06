import { Box } from "@mui/material"
import Sidebar from "./components/sidebar"
import MainContent from "./components/content"

export default function Home() {
  return (
    <>
      <Box className="w-full min-h-screen" component="div">
        <Sidebar/>
        <MainContent/>
      </Box>
    </>
  )
}