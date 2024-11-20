import useDictionary from '../hook/useDictionary';
import { Link } from 'react-router-dom';
import SwitchLanguage from "../components/shared/SwitchLanguage";
import svg from "../assets/img/TskMeLogo.svg";


const Navbar = () => {
    const dictionary = useDictionary();

    return (
        <nav className="flex w-full justify-center items-center p-2 bg-white text-black fixed top-0 left-0 shadow">
            <div className="w-full max-w-[1320px] flex justify-between items-center">
            <div className="">
                        <Link to={"/"}> <img src={svg} alt="Register image" className="object-contain size-20"/></Link>
                    </div>

                <div className="flex space-x-6">
                    {/* Links per le sezioni */}
                    <a href="#about" className="hover:text-[#40916C] transition duration-300">
                    {dictionary.HOME_ABOUT_TITLE}
                    </a>
                    <a href="#HowItWorks" className="hover:text-[#40916C] transition duration-300">
                    {dictionary.HOME_HDIW_TITLE}
                    </a>
                    <a href="#Analytics" className="hover:text-[#40916C] transition duration-300">
                    {dictionary.HOME_ANALYTICS_TITLE}
                    </a>
                    <a href="#features" className="hover:text-[#40916C] transition duration-300">
                    {dictionary.HOME_FEATURES_TITLE}
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