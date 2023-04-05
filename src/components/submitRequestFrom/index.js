import React, { useEffect, useState } from 'react'
import closeBtn from './../../images/closeBtn.svg'
import successImg from './../../images/succesImage.png'
import errorImg from './../../images/errorImg.png'
import oopsImg from './../../images/oopsImg.png'
import * as styles from './submitRequest.module.css'
import {useTranslation} from "react-i18next";

const inputFields = [
  {
    title: 'Email *',
    name: 'email',
    placeholder: 'Type your Email address'
  },
  {
    title: 'Phone *',
    name: 'phone',
    placeholder: 'Type your Phone number'

  },
  {
    title: 'Message',
    name: 'message',
    placeholder: 'Any information related to a place or event...'
  }
]


const SubmitRequestForm = ({closeModal,sendEmail,modalState}) => {
    const {t} = useTranslation()
  const [disabled,setDisabled] = useState(true)
  const [inputValues, setInputValues] = useState({
    email: "",
    phone: "",
    message: ""
  })
    useEffect(()=>{
        if(inputValues.email && inputValues.phone){
            setDisabled(false)
        }
        else setDisabled(true)
    },[inputValues.email,inputValues.phone])

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => { document.body.style.overflow = ''; }
  }, [])


  function chnageInputValues(evt) {
    setInputValues(prev => {
      return {
        ...prev,
        [evt.target.name]: evt.target.value
      }
    })
  }
  function sendRequest(evt){
    evt.preventDefault()
    sendEmail(inputValues)
  }

  if(modalState==='idle') {
      return (
          <form className={styles.modalContainer} onSubmit={sendRequest}>
              <div className={styles.header}>
                  <span>{t('Submit Request')}</span>
                  <img src={closeBtn} alt='close' className={styles.closeBtn} onClick={closeModal} />
              </div>
              <p className={styles.infoText}>{t('Please fill your Email/Phone number. We will answer as soon, as we can.')}</p>
              <div className={styles.field}>
                  <span className={styles.filedName}>{t('Email')} *</span>
                  <input placeholder={t('Type your Email address')} name='email' onChange={chnageInputValues} className={styles.fieldInput}/>
              </div>
              <div className={styles.field}>
                  <span className={styles.filedName}>{t('Phone')} *</span>
                  <input placeholder={t('Type your Phone number')} name='phone' onChange={chnageInputValues} className={styles.fieldInput}/>
              </div>
              <div className={styles.field}>
                  <span className={styles.filedName}>{t('Message')}</span>
                  <textarea placeholder={t('Any information related to a place or event...')} name='message' onChange={chnageInputValues} className={styles.fieldTextArea}/>
              </div>
              <div className={styles.btnGroup}>
                  <button className={`${styles.btn} ${styles.closeBtn}`} onClick={closeModal}>{t('Cancel')}</button>
                  <button className={styles.btn} disabled={disabled} >{t('Submit')}</button>
              </div>
          </form>
      );
  }

  else if(modalState === 'success') {
      return <div className={styles.modalContainer}>
          <div className={styles.header}>
              <span>{t('Information')}</span>
              <img src={closeBtn} alt='close' className={styles.closeBtn} onClick={closeModal} />
          </div>
          <img className={styles.messageImg} src={successImg} alt="succes"/>
          <span className={styles.messageText}>{t("successText")}</span>
      </div>
  }
  else if(modalState === 'error'){
      return <div className={styles.modalContainer}>
          <div className={styles.header}>
              <span>{t('Information')}</span>
              <img src={closeBtn} alt='close' className={styles.closeBtn} onClick={closeModal} />
          </div>
          <img className={styles.messageImg} src={errorImg} alt="error"/>
          <img className={styles.messageImg} src={oopsImg} alt="oops"/>
          <span className={styles.messageText}>{t('errorText')}</span>
      </div>
  }
}

export default SubmitRequestForm