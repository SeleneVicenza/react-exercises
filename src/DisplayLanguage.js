import React, { useContext } from "react";
import { LanguageContext } from "./Container";


export default function DisplayLanguage() {

    const language = useContext(LanguageContext)


    return (
        <div>
            <h1>
                selected language is: {language}
            </h1>
        </div>
    )

}

