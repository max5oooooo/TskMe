import { Outlet, useLocation } from "react-router-dom"
import SwitchLanguage from "../components/shared/SwitchLanguage"
import useDictionary from "../hook/useDictionary"
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const RootLayout = () => {
    const dictionary = useDictionary();
    const location = useLocation();

    return (
        <>
            <Navbar />
            {
                location.pathname == "/" && (
                    <header className="w-full flex justify-center bg-primary mt-[98px]">
                        <div className="w-full max-w-[1320px]">
                            <Header />
                        </div>
                    </header>
                )
            }
            <main className="w-full flex flex-col items-center justify-center">
                <Outlet />
            </main>
            <footer className="bg-white text-black text-center py-8 flex justify-between align-center mx-4">
                    <p>&copy; 2024 TskMe. All rights reserved.{dictionary.HOME_FOOTER_TEXT}</p>
                <SwitchLanguage />
            </footer>

        </>
    )
}

export default RootLayout