import { createContext, useState } from "react"

export const LanguageContext = createContext();

export const LanguageProvider = ({ children, defaultLang }) => {
    const [lang, setLang] = useState(defaultLang || "it");

    return (
        <LanguageContext.Provider value={[lang, setLang]}>
            {children}
        </LanguageContext.Provider>
    )
}