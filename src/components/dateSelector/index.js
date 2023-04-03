import React, { useEffect, useState } from 'react'
import * as styles from './dateSelector.module.css'
import SelectContainer from './../form/components/selectContainer'
import TimeSelector from "./timeSelector";
import DaySelector from "./daySelector";


const DateSeletcor = ({selectTime,selectDay,selectTimeMode}) => {

    return (
        <SelectContainer>
            <DaySelector selectDay={selectDay} />
            <TimeSelector selectTime={selectTime} selectTimeMode={selectTimeMode} />
        </SelectContainer>
    )
}

export default DateSeletcor