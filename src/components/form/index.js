import React, {createContext, useContext, useEffect, useReducer, useState} from 'react'
import ConditionsSelect from '../conditionSelectors'
import DateSeletcor from '../dateSelector'
import FormHeader from '../formHeader'
import SubmitRequestForm from '../submitRequestForm'
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';
import * as styles from './formStyle.module.css'
import {useTranslation} from "react-i18next";
import  {DataContext} from "../../dataContext/DataContextProvider";
import {dataConverter} from "../../utils/dataConverter";

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
    zIndex: '9999',
  }}

const Form = () => {
  const {state,dispatch} = useContext(DataContext)
  const {t,i18n} = useTranslation()
  const [disable, setDisable] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalState,setModalState] = useState('idle')


  useEffect(() => {
    setDisable(!(state.category))
  }, [state.category])

  function closeModal(){
    setModalIsOpen(false)
    setModalState('idle')
  }

  function openModal(e) {
    e.preventDefault();
    setModalIsOpen(true)
  }
  function sendEmail(popUpInfo){
    const body  = dataConverter({...popUpInfo,...state})
    emailjs.send('service_l91vh88','template_le57tlq',body,'Jy_THQHbbVeM1_fiV')
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
        <DateSeletcor/>
        <ConditionsSelect/>
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

export default Form;