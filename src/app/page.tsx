import Sidebar from "./components/sidebar"
import MainContent from "./components/content"

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen">
        <Sidebar/>
        <MainContent/>
      </div>
    </>
  )
}