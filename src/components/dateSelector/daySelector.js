import React, {useEffect, useState} from "react";
import moment from "moment/moment";
import * as styles from "./dateSelector.module.css";
import Select from "react-select";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {selectStyles} from "../../styles/selectStyles";


const currentMonth = moment().month();
console.log(currentMonth,'dasdasdsadasdasdd')
const MonthOptions = [
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
            weekDay:date.format('ddd'),
            month:date.format('MMM'),
            year:date.format('YYYY'),
            selected:false
        })
        date.add(1, 'day');
    }
    return dates;
}


const DaySelector = ({selectDay})=>{
    const [days,setDays] = useState([])
    const [date,setDate] = useState({
        year:get5UpcomingYears()[0],
        month:moment().month(),
    })

    useEffect(()=>{
        if(date.month && date.year){
            setDays(getDaysInMonth(date.year,date.month))
        }
            selectDay('')

    },[date.month,date.year])

    function changeDay(date){
        setDays(prev=>prev.map(item=>{
            if(item.day === date.day){
                item.selected =true;
                return item
            }
            return  {
                ...item,
                selected:false
            };
        }))
        selectDay(`${date.weekDay} ${date.day} ${date.month} ${date.year} `)
    }
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

    const sliderSettings = {
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 7,
    };


    return(
        <div className={styles.dayContainer}>
            <div className={styles.dateHeader}>
                <span className={styles.inputName}>Select Date *</span>
                <div className={styles.monthYear}>
                    <Select
                        defaultValue={MonthOptions.find(month=>month.value===currentMonth)}
                        placeholder='Month'
                        name='month'
                        onChange={changeMonth}
                        options={MonthOptions}
                        styles={selectStyles}
                    />
                    <Select
                        defaultValue={get5UpcomingYears()[0]}
                        placeholder='Year'
                        name='year'
                        onChange={changeYear}
                        options={get5UpcomingYears()}
                        styles={selectStyles}
                    />
                </div>
            </div>
            <div className={styles.days}>
                <Slider {...sliderSettings}>
                    {
                        days.map(item=>{
                            return <div key={item.day} className={item.selected ? `${styles.dayItem} ${styles.selectedDay}` : styles.dayItem} onClick={()=>changeDay(item)}>
                                <p>{item.weekDay}</p>
                                <p>{item.day}</p>
                            </div>
                        })}
                </Slider>
            </div>

        </div>
    )

}

export default DaySelector;