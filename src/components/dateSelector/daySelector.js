import React, {useContext, useEffect, useState} from "react";
import * as styles from "./dateSelector.module.css";
import Select from "react-select";
import {selectStyles} from "../../styles/selectStyles";
import {useTranslation} from "react-i18next";
import NextArrow from "../sliderArrows/nextArrow";
import PrevArrow from "../sliderArrows/prevArrow";
import {get5UpcomingYears} from "../../utils/get5UpcomingYears";
import {getDaysInMonth} from "../../utils/getDaysInMonth";
import {DataContext} from "../../dataContext/DataContextProvider";
import {selectDay} from "../../recuders/dataReducer";
import SCarousel from "../styledComponents/styledCarousel";

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
    const [days,setDays] = useState()

    useEffect(() => {
        const initialDays = {
            options:getDaysInMonth( years.selected.value, months.selected.value),
            current:new Date().setHours(0,0,0,0,),
            selected:new Date()
        }
        setDays(initialDays)
    },[])


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

    function handleClickDay(item,disabled){
        if(!disabled){
            changeDay(item)
        }
    }

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
                {days?.options && (
                    <SCarousel
                        arrows={true}
                        nextArrow={<NextArrow />}
                        prevArrow={<PrevArrow />}
                        slidesToShow={7}
                        slidesToScroll={7}
                        initialSlide={ (new Date()).getDate()-1 }
                        dots={false}
                        draggable
                        infinite={false}
                    >
                        {
                            days?.options.map(item=>{
                                const disabled = item < days.current
                                const selected = item.setHours(0,0,0,0) === days.selected.setHours(0,0,0,0)
                                return <div className={`${disabled ? styles.disabledDay:""} ${ selected ? styles.selectedDay:""} ${styles.dayItem}`}  key={item}
                                            onClick={()=> handleClickDay(item,disabled)}>
                                    <p className={styles.dayText}>{t(item.toLocaleString('en', { weekday: 'short' }))}</p>
                                    <p className={styles.dayText}>{item.getDate()}</p>
                                </div>
                            })}
                    </SCarousel>
                )}

            </div>

        </div>
    )

}

export default DaySelector;
