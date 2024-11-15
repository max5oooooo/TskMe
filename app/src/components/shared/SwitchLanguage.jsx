import { useLanguage } from "../../hook/useLanguage"

const SwitchLanguage = () => {
    const [lang, setLang] = useLanguage();
    
    return (
        <select className="cursor-pointer text-black" onChange={(e) => setLang(e.target.value)} value={lang}>
            <option value="it">IT</option>
            <option value="en">EN</option>
        </select>
    )
}

export default SwitchLanguage