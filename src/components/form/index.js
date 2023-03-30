import React from 'react'
import FormHeader from '../fromHeader'
import * as styles from './formStyle.module.css'

const Form = () => {
  return (
    <form className={styles.form} >
      <FormHeader />
      <div>
          <div>date time</div>
          <div>guests category</div>
          <div>price additional</div>
          <button></button>
      </div>
    </form>
  )
}

export default Form