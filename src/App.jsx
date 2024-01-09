import { Outlet } from "react-router-dom"
import NavBar from "./components/Navigation bar/NavBar"
import Footersec from "./components/Footer/Footersec"

function App() {

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footersec/>
    </div>
  )
}

export default App
