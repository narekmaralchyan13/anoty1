import * as styles from "./dateSelector.module.css";
import React, {useState} from "react";


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

const TimeSelector = ({selectTime,selectTimeMode})=>{
    const [timesState, setTimesState] = useState(times)

    function changeTime(time) {
        setTimesState(prev => {
            return prev.map(item => {
                if (item.value === time) return {
                    ...item,
                    selected: true
                }
                else return {
                    ...item,
                    selected: false
                }
            })
        })
        selectTime(time)
    }

    function changeTimeMode(evt){
        selectTimeMode(evt.target.value)
    }

    return(
        <div className={styles.timeContainer}>
            <div className={styles.timeHead}>
                <span className={styles.inputName}>Select Time*</span>
                <select name='timeMode' className={styles.timePeriod} onChange={changeTimeMode}>
                    <option value='PM'>PM</option>
                    <option value='AM'>AM</option>
                </select>
            </div>
            <div className={styles.timeBody}>
                <div className={styles.timeBodySlice}>
                    {
                        timesState.slice(0, 6).map(time => {
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
                        timesState.slice(6).map(time => {
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