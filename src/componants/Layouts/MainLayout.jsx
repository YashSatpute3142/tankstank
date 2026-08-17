import { Outlet } from "react-router-dom"
import { Header } from "./Footer "
import { Footer } from "./Header"

export const MainLayout = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}