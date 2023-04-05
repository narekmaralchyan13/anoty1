import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./styles.module.css"
import logo from './../../images/logo.svg'
import armenianFlag from './../../images/armeniaFlag.svg'
import gbFlag from './../../images/gbFlag.svg'
import Select from "react-select";
import {selectStyles} from "../../styles/selectStyles";


const languageOptions = [
    {
        value:'en',
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

const Header = () => (
  <header className={styles.headerCont} >
    <img
      className={styles.logo}
      alt="Anoty logo"
      src={logo}
    />
      <Select
          styles={selectStyles}
          isSearchable={false}
          options={languageOptions}
          defaultValue={languageOptions[0]}
      />
  </header>
)

export default Header
