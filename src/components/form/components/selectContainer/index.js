import React from 'react'
import * as styles from './selectContainer.module.css'

const SelectContainer
 = ({children}) => {
  return (
    <div className={styles.selectContainer}>
        {children}
    </div>
  )
}

export default SelectContainer
