import HeaderTwo from "./navigation/HeaderTwo"
import Footer from "./navigation/Footer"
import { Outlet } from "react-router-dom"

const PageLayoutTwo = () => {
    return (
        <>
            <HeaderTwo />
            <Outlet />
            <Footer />
        </>
    )
}
export default PageLayoutTwo;
