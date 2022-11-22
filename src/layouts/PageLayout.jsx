import Header from "./navigation/Header"
import Footer from "./navigation/Footer"
import { Outlet } from "react-router-dom";

const PageLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default PageLayout;
