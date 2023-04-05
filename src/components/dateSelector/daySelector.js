import React, {useEffect, useState} from "react";
import moment from "moment/moment";
import * as styles from "./dateSelector.module.css";
import Select from "react-select";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {selectStyles} from "../../styles/selectStyles";
import {useTranslation} from "react-i18next";



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
    const {t,i18n} = useTranslation()
    const [days,setDays] = useState([])
    const months = [
        { value: 1, label: t('Jan') },
        { value: 2, label: t('Feb') },
        { value: 3, label: t('Mar') },
        { value: 4, label: t('Apr') },
        { value: 5, label: t('May') },
        { value: 6, label: t('Jun') },
        { value: 7, label: t('Jul') },
        { value: 8, label: t('Aug') },
        { value: 9, label: t('Sep') },
        { value: 10, label: t('Oct') },
        { value: 11, label: t('Nov') },
        { value: 12, label: t('Dec') },]

    const [date,setDate] = useState({
        year:get5UpcomingYears()[0].value,
        month:moment().month()+1,
    })

    useEffect(()=>{
        if(date.month && date.year){
            setDays(getDaysInMonth(date.year,date.month).map(day=>{
                return {
                    ...day,
                    weekDay:t(day.weekDay)
                }
            }))
        }
            selectDay('')

    },[date.month,date.year,i18n.language])

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
                <span className={styles.inputName}>{t('Date')} *</span>
                <div className={styles.monthYear}>
                    <Select
                        value={months.find(month=>month.value === date.month)}
                        placeholder='Month'
                        name='month'
                        onChange={changeMonth}
                        options={months}
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
