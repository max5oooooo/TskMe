import { useContext } from "react";
import { LanguageContext } from "../providers/Language";

/**
 * 
 * @returns {{ lang: "it"|"en", setLang: () => {} }}
 */
export const useLanguage = () => {
    const [lang, setLang] = useContext(LanguageContext);

    return [lang, setLang]
}