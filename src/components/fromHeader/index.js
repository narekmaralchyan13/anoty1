import React from 'react'
import * as styles from './formHeader.module.css'
import "@fontsource/titan-one"
import "@fontsource/montserrat"


const FormHeader
 = () => {
  return (
    <div className={styles.formHeader}>
        <h1 className={styles.headerText}>HOLD YOUR TABLE</h1>
        <p className={styles.infoText}>We will help you to find a place</p>
    </div>
  )
}

export default FormHeader
