import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./styles.module.css"
import logo from './../../images/logo.svg'
import armenianFlag from './../../images/armeniaFlag.svg'
import gbFlag from './../../images/gbFlag.svg'
import Select from "react-select";
import {selectStyles} from "../../styles/selectStyles";
import {useTranslation} from "react-i18next";


const languageOptions = [
    {
        value:'en-US',
        label:<div className={styles.language}>
            <img src={gbFlag} alt='english' />
            <span>English</span>
        </div>
    },
    {
        value:'am',
        label:<div className={styles.language}>
            <img src={armenianFlag} alt='armenian'/>
            <span>Հայերեն</span>
        </div>
    }
]

const Header = () => {
    const {t,i18n} = useTranslation()
    function  changeLanguage(lang){
        i18n.changeLanguage(lang.value)
    }
    return (
        <header className={styles.headerCont} >
            <img
                className={styles.logo}
                alt="Anoty logo"
                src={logo}
            />
            <Select
                onChange={changeLanguage}
                styles={selectStyles}
                isSearchable={false}
                options={languageOptions}
                value={languageOptions.find(lang=>lang.value === i18n.language)}
            />
        </header>
    )
}

export default Header
