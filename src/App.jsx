import { Outlet } from "react-router-dom"
import NavBar from "./components/Navigation bar/NavBar"

function App() {

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
