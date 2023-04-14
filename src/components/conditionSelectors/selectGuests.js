import React, {useContext, useEffect, useState} from "react";
import * as styles from './conditions.module.css'
import incIcon from './../../images/incValue.svg'
import decIcon from './../../images/decValue.svg'
import {DataContext} from "../../dataContext/DataContextProvider";
import {selectGuests} from "../../recuders/dataReducer";
import {useTranslation} from "react-i18next";
const SelectGuests = ()=>{
    const {dispatch} = useContext(DataContext)
    const {t} = useTranslation()
    const [guests,setGuests] = useState(0)

    useEffect(()=>{
        dispatch(selectGuests(guests))
    },[guests])
    function changeGuests(evt){
        if(evt.target.value >= 0){
            setGuests(evt.target.value)
        }
    }
    function incrGuests(){
        setGuests(prev=>++prev)
    }
    function decGuests(){
        if(guests>0)  {
            setGuests(prev=>--prev);
        }
    }
    return(
        <div className={styles.selects}>
            <span className={styles.inputName}>{t("Guests")} *</span>
            <div className={styles.guests}>
                <img src={decIcon} alt='dec' className={styles.btn} onClick={decGuests} />
                <input type='number' min='0' value={guests} className={styles.guestsNumber} onChange={changeGuests}  />
                <img src={incIcon} alt='inc' className={styles.btn} onClick={incrGuests} />
            </div>
        </div>
    )
}

export default SelectGuests;