import { Link, Outlet } from "react-router-dom"
import SwitchLanguage from "../components/shared/SwitchLanguage"
import useDictionary from "../hook/useDictionary"

const RootLayout = () => {
    const dictionary = useDictionary();

    return (
        <>
            <nav></nav>
            <Outlet />
            <footer className="bg-white text-black text-center py-8 flex justify-between align-center mx-4">
                    <p>&copy; 2024 TskMe. All rights reserved.{dictionary.HOME_FOOTER_TEXT}</p>
                <SwitchLanguage />
            </footer>

        </>
    )
}

export default RootLayout