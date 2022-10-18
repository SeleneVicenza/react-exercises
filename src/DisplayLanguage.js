import React from "react";
import { LanguageContext } from "./Container";

const Strings = {
    en: {LANG: "english"},
    it: {LANG: "italiano"}
}

export default class DisplayLanguage extends React.Component {



    render() {
        return (
            <div>
                <LanguageContext.Consumer>
                    {(language)=>{
                        return (<h1>
                            selected language is: {Strings[language].LANG}
                        </h1>)
                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}

