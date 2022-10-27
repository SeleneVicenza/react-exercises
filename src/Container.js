import React, { useState } from "react";
import { createContext } from "react";
import DisplayLanguage from "./DisplayLanguage";

export const LanguageContext = createContext('en')
export default function Container() {

    const [language, setLang] = useState('en')

    const handleLanguage = (event) => {
        setLang(event.target.value)
    }


    return (
        <div>
            <select value={language} onChange={handleLanguage}>
                <option value='en'>ENGLISH</option>
                <option value='it'>ITALIANO</option>
            </select>
            <LanguageContext.Provider value={language}>
                <DisplayLanguage />
            </LanguageContext.Provider>
        </div>

    )

}
