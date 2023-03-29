import React from 'react'
import * as styles from './formStyle.module.css'
import image from './../../images/background.jpg'

const Form = () => {
  return (
    <form className={styles.form} >
      <div>Form Header</div>
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