import { Outlet } from "react-router-dom"
import NavBar from "./components/Navigation bar/NavBar"

function App() {

  return (
    <div className="bg-[#D0F0E1]">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
