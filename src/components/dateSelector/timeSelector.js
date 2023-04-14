import * as styles from "./dateSelector.module.css";
import React, {useContext, useState} from "react";
import {selectStyles} from "../../styles/selectStyles";
import Select from "react-select";
import {useTranslation} from "react-i18next";
import {DataContext} from "../../dataContext/DataContextProvider";
import {selectTime} from "../../recuders/dataReducer";

const times = [
    {
        value: '1:00',
        selected: false,
    },
    {
        value: '2:00',
        selected: false,
    },
    {
        value: '3:00',
        selected: false,
    },
    {
        value: '4:00',
        selected: false,
    },
    {
        value: '5:00',
        selected: false,
    },
    {
        value: '6:00',
        selected: false,
    },
    {
        value: '7:00',
        selected: true,
    },
    {
        value: '8:00',
        selected: false,
    },
    {
        value: '9:00',
        selected: false,
    },
    {
        value: '10:00',
        selected: false,
    },
    {
        value: '11:00',
        selected: false,
    }, {
        value: '12:00',
        selected: false,
    },
]
const timeModeOptions = [
    {
        label:"PM",
        value:"PM"
    },
    {
        label: "AM",
        value: "AM"
    }
]

const TimeSelector = ()=>{
    const {dispatch} = useContext(DataContext)
    const [state,setState] = useState({
        times:times,
        mode:'PM'
    })
    const {t} = useTranslation()
    function changeTime(time) {
        setState(prev=>{
            return {
                ...prev,
                times: prev.times.map(item => {
                    if (item.value === time) return {
                        ...item,
                        selected: true
                    }
                    else return {
                        ...item,
                        selected: false
                    }
                })
            }
        })
        dispatch(selectTime(`${time} ${state.mode}`))
    }


    function changeTimeMode(mode){
        setState(prev=>{
            return {
                ...prev,
                mode: mode.value
            }
        })
        const time = state.times.find(t=>t.selected)
        dispatch(selectTime(`${time.value} ${mode.value}`))

    }

    return(
        <div className={styles.timeContainer}>
            <div className={styles.timeHead}>
                <span className={styles.inputName}>{t('Time')} *</span>
                <Select
                    defaultValue={timeModeOptions[0]}
                    name='timeMode'
                    onChange={changeTimeMode}
                    options={timeModeOptions}
                    styles={selectStyles}
                />
            </div>
            <div className={styles.timeBody}>
                <div className={styles.timeBodySlice}>
                    {
                        state.times.slice(0, 6).map(time => {
                            return <span
                                className={time.selected ? styles.selectedTime : styles.time}
                                key={time.value}
                                onClick={() => { changeTime(time.value) }}
                            >
                                    {time.value}
                                </span>
                        })
                    }
                </div>
                <div className={styles.timeBodySlice}>
                    {
                        state.times.slice(6).map(time => {
                            return <span
                                className={time.selected ? styles.selectedTime : styles.time}
                                key={time.value}
                                onClick={() => { changeTime(time.value) }}
                            >
                                    {time.value}
                                </span>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export  default TimeSelector;