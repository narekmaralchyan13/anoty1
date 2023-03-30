import React from 'react'
import DateSelecor from '../dateSelector'
import FormHeader from '../fromHeader'
import * as styles from './formStyle.module.css'

const Form = () => {
  return (
    <form className={styles.form} >
      <FormHeader />
      <div>
          <DateSelecor />
          <div>guests category</div>
          <div>price additional</div>
          <button></button>
      </div>
    </form>
  )
}

export default Form