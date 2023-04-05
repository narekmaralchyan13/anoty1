import React, { useEffect, useState } from 'react'
import ConditionsSelect from '../conditionSelectors'
import DateSeletcor from '../dateSelector'
import FormHeader from '../formHeader'
import SubmitRequestForm from '../submitRequestFrom'
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';
import * as styles from './formStyle.module.css'
import {useTranslation} from "react-i18next";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '320px',
    background: 'white',
    zIndex:'9999',

  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.425)',
    zIndex: 9999,
  }
};

const Form = () => {
  const {t} = useTranslation()
  const [state, setState] = useState({
    day: "",
    time: "7:00",
    timeMode: "PM",
    guests: 1,
    category: "",
    price: "normal",
    additionalInfo: "",
  })
  const [disable, setDisable] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalState,setModalState] = useState('idle')

  useEffect(() => {
    setDisable(!(state.day && state.category))
  }, [state.day, state.category])

  function closeModal(){
    setModalIsOpen(false)
    setModalState('idle')
  }


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
  function selectCategory(category) {
    changeState('category', category)
  }
  function selectPrice(price) {
    changeState('price', price)
  }
  function selectAdditionalInfo(info) {
    changeState('additionalInfo', info)
  }
 

  function openModal(e) {
    e.preventDefault();
    setModalIsOpen(true)
  }
  function sendEmail(popUpInfo){
    emailjs.send('service_l91vh88','template_le57tlq',{ ...popUpInfo,...state},'Jy_THQHbbVeM1_fiV')
        .then(res=>{
          setModalState('success')
          console.log(res)
        })
        .catch(err=>{
          setModalState('error')
          console.log(err)
        })
  }

  return (
    <>
      <form className={styles.form} onSubmit={openModal} >
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
        <div>
        <button
          className={styles.sendBtn}
          disabled={disable}
          onClick={openModal}
        >
          {t('Send Request')}
        </button>
        </div>
      </form>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <SubmitRequestForm closeModal={closeModal} sendEmail={sendEmail} modalState={modalState}/>
      </Modal>
    </>
  )
}

export default Form