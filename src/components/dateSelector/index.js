import React, { useEffect, useState } from 'react'
import * as styles from './dateSelector.module.css'
import SelectContainer from './../form/components/selectContainer'
import moment, {months} from 'moment'
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
export const MonthOptions = [
    { value: 1, label: 'Jan' },
    { value: 2, label: 'Feb' },
    { value: 3, label: 'Mar' },
    { value: 4, label: 'Apr' },
    { value: 5, label: 'May' },
    { value: 6, label: 'Jun' },
    { value: 7, label: 'Jul' },
    { value: 8, label: 'Aug' },
    { value: 9, label: 'Sep' },
    { value: 10, label: 'Oct' },
    { value: 11, label: 'Nov' },
    { value: 12, label: 'Dec' },
];

function get5UpcomingYears (){
    const currentYear = moment().year();
    const upcomingYears = [];

    for (let i = 0; i < 5; i++) {
        const year = moment().add(i, 'year').year();
        upcomingYears.push({
            label:year,
            value:year
        });
    }

    return upcomingYears;

}

function getDaysInMonth(year, month) {
    const dates = [];
    const date = moment(`${year}-${month}-01`);
  
    while (date.month() === parseInt(month) - 1) {
      // dates.push(date.format('ddd MMM DD YYYY'));
        dates.push({
            day:date.format("DD"),
            weekDay:date.format('ddd')
        })
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
    const [days,setDays] = useState('')
    const [date,setDate] = useState({
        year:'',
        month:'',
        day:''
    })
    const [timesState, setTimesState] = useState(times)

    console.log(date,"date")
    useEffect(()=>{
    if(date.month && date.year){
        console.log(getDaysInMonth(date.year,date.month))
    }
    },[date.month,date.year])

    function changeYear(year){
        setDate(prev=>{
            return {
                ...prev,
                year:year.value
            }
        })
    }
    function changeMonth(month){
        setDate(prev=>{
            return {
                ...prev,
                month:month.value
            }
        })
    }


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


    return (
        <SelectContainer>
            <div className={styles.dayContainer}>
                <div className={styles.dateHeader}>
                    <span className={styles.inputName}>Date *</span>
                    <div className={styles.monthYear}>
                        <Select
                            name='month'
                            onChange={changeMonth}
                            options={MonthOptions}
                        />
                        <Select
                            name='year'
                            onChange={changeYear}
                            options={get5UpcomingYears()}
                        />
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