import React, {useContext, useEffect, useState} from "react";
import * as styles from "./dateSelector.module.css";
import Select from "react-select";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {selectStyles} from "../../styles/selectStyles";
import {useTranslation} from "react-i18next";
import NextArrow from "../sliderArrows/nextArrow";
import PrevArrow from "../sliderArrows/prevArrow";
import {get5UpcomingYears} from "../../utils/get5UpcomingYears";
import {getDaysInMonth} from "../../utils/getDaysInMonth";
import {DataContext} from "../../dataContext/DataContextProvider";
import {selectDay} from "../../recuders/dataReducer";

const MonthsOptions = [
    { value: 1, label: 'Jan'  },
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
    { value: 12, label: 'Dec' }
]
const YearsOptions = get5UpcomingYears()




const DaySelector = ()=>{
    const { dispatch } = useContext(DataContext)
    const {t,i18n} = useTranslation()
    const [years,setYears] = useState({
        options:YearsOptions,
        current:YearsOptions[0],
        selected:YearsOptions[0]
    })
    const [months,setMonths] = useState({
        options:MonthsOptions.map(option=>({...option,label:t(option.label)})),
        current:MonthsOptions.find(option=>option.value === new Date().getMonth()+1),
        selected:MonthsOptions.find(option=>option.value === new Date().getMonth()+1),
    })
    const [days,setDays] = useState({
        options:getDaysInMonth( years.selected.value, months.selected.value),
        current:new Date().setHours(0,0,0,0,),
        selected:new Date()
    })


    useEffect(()=> {
        let temp = MonthsOptions.find(option=> option.value === months.selected.value)
        setMonths( prev=>{
            return {
                ...prev,
                options:MonthsOptions.map(option=>({...option,label:t(option.label)})),
                selected: {...prev.selected,label: t(temp.label)}
            }
        })
    },[i18n.language])

    useEffect(()=>{
            setDays( prevState => {
                return{
                    ...prevState,
                    options: getDaysInMonth( years.selected.value, months.selected.value)
                }
            })
    },[months.selected,years.selected])

    function changeDay(day){
        setDays(prev=>{
            return {
                ...prev,
                selected: day
            }
        })
        dispatch(selectDay(day))
    }
    function changeYear(year){
        setYears(prev=>{
            return {
                ...prev,
                selected: year
            }
        })
    }
    function changeMonth(month){
        setMonths(prev=> {
            return {
                ...prev,
                selected: month
            }
        })
    }

    const sliderSettings = {
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 7,
        speed:500,
        // initialSlide:days.selected.getDate()-days.selected.getDate()%7,
        style: {
            display: 'flex',
            gap:'5px',
        },
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow/>
    };


    return(
        <div className={styles.dayContainer}>
            <div className={styles.dateHeader}>
                <span className={styles.inputName}>{t('Date')} *</span>
                <div className={styles.monthYear}>
                    <Select
                        value={months.selected }
                        placeholder={t('Month')}
                        name='month'
                        onChange={changeMonth}
                        options={months.options}
                        styles={selectStyles}
                    />
                    <Select
                        value={years.selected}
                        placeholder='Year'
                        name='year'
                        onChange={changeYear}
                        options={years.options}
                        styles={selectStyles}
                    />
                </div>

            </div>
            <div className={styles.days}>
                <Slider {...sliderSettings}>
                    {
                        days.options.map(item=>{
                            return <button type='button' disabled={item < days.current } key={item} className={item.setHours(0,0,0,0) === days.selected.setHours(0,0,0,0) ? `${styles.dayItem} ${styles.selectedDay}` : styles.dayItem}
                                           onClick={()=>changeDay(item)}>
                                         <p className={styles.dayText}>{t(item.toLocaleString('en', { weekday: 'short' }))}</p>
                                        <p className={styles.dayText}>{item.getDate()}</p>
                                    </button>
                        })}
                </Slider>
            </div>

        </div>
    )

}

export default DaySelector;
