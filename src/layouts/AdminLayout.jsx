import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer/Footer"

export const AdminLayout = () => {
  return (
    <>      
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}