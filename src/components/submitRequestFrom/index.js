import React, { useEffect, useState } from 'react'
import closeBtn from './../../images/closeBtn.svg'
import * as styles from './submitRequest.module.css'

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


const SubmitRequestForm = ({closeModal,sendEmail}) => {

  const [inputValues, setInputValues] = useState({
    email: "",
    phone: "",
    message: ""
  })

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

  return (
    <form className={styles.modalContainer} onSubmit={sendRequest}>
      <div className={styles.header}>
        <span>Submit request</span>
        <img src={closeBtn} alt='close' className={styles.closeBtn} onClick={closeModal} />
      </div>
      <p className={styles.infoText}>Please fill your Email/Phone number. We will answer as soon, as we can.</p>
      <div className={styles.field}>
            <span className={styles.filedName}>Email *</span>
            <input placeholder='Type your Email address' name='email' onChange={chnageInputValues} className={styles.fieldInput}/>
      </div>
      <div className={styles.field}>
            <span className={styles.filedName}>Phone *</span>
            <input placeholder='Type your Phone number' name='phone' onChange={chnageInputValues} className={styles.fieldInput}/>
      </div>
      <div className={styles.field}>
            <span className={styles.filedName}>Message</span>
            <textarea placeholder='Any information related to a place or event...' name='message' onChange={chnageInputValues} className={styles.fieldTextArea}/>
      </div>
      <div className={styles.btnGroup}>
        <button className={`${styles.btn} ${styles.closeBtn}`} onClick={closeModal}>Cancel</button>
        <button className={styles.btn} >Submit</button>
      </div>
    </form>
  );
}

export default SubmitRequestForm