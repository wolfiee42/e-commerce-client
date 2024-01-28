import { Outlet } from "react-router-dom"
import NavBar from "./components/Navigation bar/NavBar"
import Footersec from "./components/Footer/Footersec"
import bannerIMG from './assets/img/bgWebsite.jpg'
function App() {

  return (
    <div className=" bg-repeat-y bg-cover" style={{ backgroundImage: `url(${bannerIMG})` }}>
      <div className="opacity-50"></div>
      <NavBar />
      <Outlet />
      <Footersec/>
    </div>
  )
}

export default App
