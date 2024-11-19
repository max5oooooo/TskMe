import useDictionary from '../hook/useDictionary';
import { Link } from 'react-router-dom';
import SwitchLanguage from "../components/shared/SwitchLanguage";

const Navbar = () => {
    const dictionary = useDictionary();

    return (
        <nav className="flex w-full justify-center items-center p-6 bg-white text-black fixed top-0 left-0 shadow">
            <div className="w-full max-w-[1320px] flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-primary"><i className="fa-regular fa-lemon" aria-hidden="true"></i>TSK Me</h1>

                <div className="flex space-x-6">
                    {/* Links per le sezioni */}
                    <a href="#features" className="hover:text-[#40916C] transition duration-300">
                        Features Section
                    </a>
                    <a href="#about" className="hover:text-[#40916C] transition duration-300">
                        About Section
                    </a>
                    <a href="#cta" className="hover:text-[#40916C] transition duration-300">
                        Call to Action
                    </a>
                </div>
                <div className="flex gap-1">
                    <Link
                        to="/login"
                        className="rounded-full border border-slate-100 shadow p-3 px-5 items-center cursor-pointer bg-primary text-white"
                    >
                        {dictionary.HOME_CTA_BUTTON}
                    </Link>
                    <Link
                        to="/register"
                        className="rounded-full border border-slate-100 shadow p-3 px-5 items-center cursor-pointer bg-primary text-white"
                    >
                        Registrati
                    </Link>
                    <SwitchLanguage />
                </div>
            </div>
        </nav>
    )
}

export default Navbar