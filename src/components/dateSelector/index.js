import React, { useEffect, useState } from 'react'
import * as styles from './dateSelector.module.css'
import SelectContainer from './../form/components/selectContainer'
import moment from 'moment'

function getDaysInMonth(year, month) {
    const dates = [];
    const date = moment(`${year}-${month}-01`);
  
    while (date.month() === parseInt(month) - 1) {
      dates.push(date.format('ddd MMM DD YYYY'));
      date.add(1, 'day');
    }
  
    return dates;
  }

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

const DateSeletcor = ({selectTime,selectDay,selectTimeMode}) => {
            
    useEffect(()=>{
        const years = []
        const months = moment.months()
        const currentYear = moment().year()
        for(let i=0 ; i <5 ; i++){
            years.push(currentYear+i)
        }
      
        console.log(getDaysInMonth(2023,2))
        
    },[])
    // const [date,setDate] = useState({
    //     year: ,
    //     month: ,
    //     day: 
    // })
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
    function changeDay(evt){
        selectDay(evt.target.value);
    }
    function changeTimeMode(evt){
        selectTimeMode(evt.target.value)
    }


    return (
        <SelectContainer>
            <div className={styles.dayContainer}>
                {/* <span className={styles.inputName}>Date *</span>
                <input type='date' onChange={changeDay}  /> */}
                <div className={styles.dateHeader}>
                    <span className={styles.inputName}>Date *</span>
                    <div className={styles.monthYear}>
                        <select name='month' className={styles.timePeriod} >
                            <option value='PM'>PM</option>
                            <option value='AM'>AM</option>
                        </select>
                        <select name='timeMode' className={styles.timePeriod} >
                            <option value='PM'>PM</option>
                            <option value='AM'>AM</option>
                        </select>
                    </div>
                </div>
                <div>

                </div>
            </div>
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
        </SelectContainer>
    )
}

export default DateSeletcor