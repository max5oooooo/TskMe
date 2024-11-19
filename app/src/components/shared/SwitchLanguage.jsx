import { useLanguage } from "../../hook/useLanguage"

const SwitchLanguage = () => {
    const [lang, setLang] = useLanguage();
    
    return (
        <select className="cursor-pointer text-black rounded-full border border-slate-100 shadow ml-2 p-1 px-3" onChange={(e) => setLang(e.target.value)} value={lang}>
            <option value="it">IT</option>
            <option value="en">EN</option>
        </select>
    )
}

export default SwitchLanguage