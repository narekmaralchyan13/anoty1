import React, { useState } from 'react'
import ConditionsSelect from '../conditionSelectors'
import DateSeletcor from '../dateSelector'
import FormHeader from '../fromHeader'
import * as styles from './formStyle.module.css'

const Form = () => {
  const [state, setState] = useState({
    day: "",
    time: "7:00",
    timeMode: "PM",
    guests: 1,
    category: "",
    price: "normal",
    additionalInfo: "",
    email: "",
    phone: "",
    message: ""
  })

  function changeState(key, value) {
    setState(prev => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  function selectDay(day) {
    changeState('day', day)
  }
  function selectTime(time) {
    changeState('time', time)
  }
  function selectTimeMode(mode) {
    changeState('timeMode', mode)
  }
  function selectGuests(guests) {
    changeState('guests', guests)
  }
  function selectCategory(category){
    changeState('category', category)
  }
  function selectPrice(price){
    changeState('price', price)
  }
  function selectAdditionalInfo(info){
    changeState('additionalInfo',info)
  }



  function sendRequest(e) {
    e.preventDefault();
  }

  const btnActive = state.day && state.category

  return (
    <form className={styles.form} onSubmit={sendRequest} >
      <FormHeader />
      <DateSeletcor
        selectDay={selectDay}
        selectTime={selectTime}
        selectTimeMode={selectTimeMode}
      />
      <ConditionsSelect
        selectGuests={selectGuests}
        selectCategory={selectCategory}
        selectPrice={selectPrice}
        selectAdditionalInfo={selectAdditionalInfo}
      />
      <button
        className={styles.sendBtn}
        disabled={!btnActive}
      >
        Send request
      </button>
    </form>
  )
}

export default Form