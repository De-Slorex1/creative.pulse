import { Outlet } from "react-router-dom"
import Navbar from "../modules/component/navbar"

function RootLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default RootLayout