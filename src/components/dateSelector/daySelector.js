import React, {useEffect, useState} from "react";
import moment from "moment/moment";
import * as styles from "./dateSelector.module.css";
import Select from "react-select";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const customStyles = {
    control: (base, state) => ({
        ...base,
        backgroundColor: 'white',
        fontFamily: 'Montserrat',
        fontSize: '16px',
        fontWeight: '400',
        letterSpacing: '0em',
        height:'40px'

    }),
    option: (base, state) => ({
        ...base,
        backgroundColor:  state.isSelected ? "#EFF3F5" :"white",
        fontFamily: 'Montserrat',
        color:  "black" ,
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'left',
        '&:hover': {
            backgroundColor: '#EFF3F5',
        },
    }),
    dropdownIndicator: (base, state) => ({
        ...base,
        color: 'black',
        with: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
    }),
    indicatorSeparator: (base, state) => ({
        ...base,
        backgroundColor: 'none',
    }),


};


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
        year:'',
        month:'',
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

    const settings = {
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 7,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    };


    return(
        <div className={styles.dayContainer}>
            <div className={styles.dateHeader}>
                <span className={styles.inputName}>Date *</span>
                <div className={styles.monthYear}>
                    <Select
                        placeholder='Month'
                        name='month'
                        onChange={changeMonth}
                        options={MonthOptions}
                        styles={customStyles}
                    />
                    <Select
                        placeholder='Year'
                        name='year'
                        onChange={changeYear}
                        options={get5UpcomingYears()}
                        styles={customStyles}
                    />
                </div>
            </div>
            <div className={styles.days}>
                {
                    days.length ?
                        <Slider {...settings}>
                            {
                                days.map(item=>{
                                    return <div key={item.day} className={item.selected ? `${styles.dayItem} ${styles.selectedDay}` : styles.dayItem} onClick={()=>changeDay(item)}>
                                        <p>{item.weekDay}</p>
                                        <p>{item.day}</p>
                                    </div>
                                })}
                        </Slider>:
                        <Slider {...settings}>
                                <div className={styles.dayItem} ></div>
                                 <div className={styles.dayItem} ></div>
                                 <div className={styles.dayItem} ></div>
                                 <div className={styles.dayItem} ></div>
                                 <div className={styles.dayItem} ></div>
                                 <div className={styles.dayItem} ></div>
                                 <div className={styles.dayItem} ></div>
                        </Slider>
                }
            </div>

        </div>
    )

}

export default DaySelector;
