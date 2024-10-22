import { Link, Outlet } from "react-router-dom"
import SwitchLanguage from "../components/shared/SwitchLanguage"

const RootLayout = () => {
    return (
        <>
            <nav>
                <Link to="/console/profile">Profile</Link>
            </nav>
            <Outlet />
            <footer>
                <SwitchLanguage />
            </footer>
        </>
    )
}

export default RootLayout