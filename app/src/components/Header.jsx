import { Link } from 'react-router-dom';
import useDictionary from '../hook/useDictionary';

const Header = () => {
    const dictionary = useDictionary();

    return (
        <div className=" text-white py-16 flex items-center justify-between gap-12">
            <div className="flex-1 max-w-[420px]">
                <h2 className="text-4xl font-semibold">{dictionary.HOME_HERO_TITLE}</h2>
                <p className="mt-4 text-xl">{dictionary.HOME_HERO_SUBTITLE}</p>
                <div className="flex justify-start">
                    <Link
                        to="/login"
                        className="mt-8 px-8 py-3 rounded-full border border-slate-100 shadow items-center cursor-pointer bg-white text-primary block"
                    >
                        {dictionary.HOME_HERO_CTA_BUTTON}
                    </Link>
                </div>
            </div>
            <div className="flex-1">
                {/* Qui puoi inserire la tua immagine */}
                <img
                    src="https://images.ctfassets.net/xjcz23wx147q/2oiMdOggDxqcAwWPBbWrOZ/bebd506e5bcf49b163efca81049729be/pm-marketing-hero.webp"
                    alt="Hero Image"
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    )
}

export default Header