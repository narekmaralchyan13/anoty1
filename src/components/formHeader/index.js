import React from 'react'
import {useTranslation} from "react-i18next";
import * as styles from './formHeader.module.css'
import "@fontsource/titan-one"
import "@fontsource/montserrat"


const FormHeader
 = () => {
    const {t} = useTranslation()
  return (
    <div className={styles.formHeader}>
        <h1 className={styles.headerText}>{t("Hold Your Table!")}</h1>
        <div className={styles.infoText}>
          <p>{t("We will help you to find a place")}</p>
        </div>
    </div>
  )
}

export default FormHeader
