import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./styles.module.css"
import logo from './../../images/logo.svg'
import armenianFlag from './../../images/armeniaFlag.svg'
import gbFlag from './../../images/gbFlag.svg'

const languages = [
  {
    title: 'Հայերեն',
    flag: armenianFlag,
    value: 'hy'
  },
  {
    title: 'English',
    flag: gbFlag,
    value: 'en'
  }
]

const Header = () => (
  <header className={styles.headerCont} >
    <img
      className={styles.logo}
      alt="Anoty logo"
      src={logo}
    />
    <select>
      {
        languages.map(language => {
          return <option value={language.value} >
            {/* <img
              height={16}
              width={16} 
              alt={language.title}
              src={language.flag}
            /> */}
            {language.title}
          </option>
        })
      }
    </select>
  </header>
)

export default Header
