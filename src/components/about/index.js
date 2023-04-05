import React from 'react'
import * as styles from './about.module.css'
import {useTranslation} from "react-i18next";

const About = () => {
    const {t} = useTranslation()
  return (
    <div className={styles.about}>
        {t('aboutText')}
    </div>
  )
}

export default About