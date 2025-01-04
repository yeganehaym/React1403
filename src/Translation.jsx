import {useTranslation} from "react-i18next";
import {useEffect} from "react";

export const Translation=()=>{

const {t,i18n} = useTranslation();


const changeLanguage=(lang)=>{
    i18n.changeLanguage(lang);
    localStorage.setItem("language",lang);
}

    useEffect(() => {
        const lang = localStorage.getItem("language");
        if(lang!=undefined && lang!=null){
            i18n.changeLanguage(lang);
        }
    }, []);

    return <>

        <h1>{t('Hello')}</h1>
        <h1>{t('Age',{age1:10,age2:20})}</h1>

            <button className={"btn btn-primary"} onClick={()=>changeLanguage("en")}>English</button>
            <button className={"btn btn-primary"} onClick={()=>changeLanguage("fa")}>Persian</button>
    </>
}