import React, { useState } from 'react'
import * as styles from './dateSelector.module.css'

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

const DateSelecor = () => {

    const [timesState, setTimesState] = useState(times)

    function selectTime(time) {
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
    }
    return (
        <div className={styles.DateSelecor}>
            <div className={styles.container}>
                <span className={styles.inputName}>Date *</span>
                <input type='date' />
            </div>
            <div className={styles.timeContainer}>
                <div className={styles.timeHead}>
                    <span className={styles.inputName}>Time*</span>
                    <select name='timePeriod'>
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
                                    onClick={() => { selectTime(time.value) }}
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
                                    onClick={() => { selectTime(time.value) }}
                                >
                                    {time.value}
                                </span>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateSelecor