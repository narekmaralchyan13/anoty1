import React from 'react'
import ConditionsSelect from '../conditionSelectors'
import DateSeletcor from '../dateSelector'
import FormHeader from '../fromHeader'
import * as styles from './formStyle.module.css'

const Form = () => {
  return (
    <form className={styles.form} >
      <FormHeader />
      <DateSeletcor />
      <ConditionsSelect />
          <button></button>
    </form>
  )
}

export default Form