import React from 'react'
import * as styles from './formHeader.module.css'
import "@fontsource/titan-one"
import "@fontsource/montserrat"


const FormHeader
 = () => {
  return (
    <div className={styles.formHeader}>
        <h1 className={styles.headerText}>HOLD YOUR TABLE</h1>
        <div className={styles.infoText}>
          <p>We will help you to find a place</p>
        </div>
    </div>
  )
}

export default FormHeader
