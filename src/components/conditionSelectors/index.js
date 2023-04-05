import React, { useEffect, useState } from 'react'
import SelectContainer from '../form/components/selectContainer'
import * as styles from './conditions.module.css'
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select/creatable';
import dollarIcon from './../../images/dollar.svg'
import arrowIcon from './../../images/openOptions.svg';
import incIcon from './../../images/incValue.svg'
import decIcon from './../../images/decValue.svg'
import {creatableSelectStyles} from "../../styles/selectStyles";

const categoriesOptions = [
    { value: '', label: '+ Select or add new one',isDisabled:true },
    { value: 'Restaurant', label: 'Restaurant' },
    { value: 'Cafe', label: 'Cafe' },
    { value: 'Club', label: 'Club' },
    { value: 'Pub', label: 'Pub' },
    { value: 'BeerHouse', label: 'BeerHouse' },
    { value: 'WineHouse', label: 'WineHouse' },
    { value: 'Bar', label: 'Bar' },
    { value: 'Kids', label: 'Kids' },
];
const additionalOptions = [
    { value: '', label: '+ Select or add new one',isDisabled:true },
    { value: 'None smoking', label: 'None smoking' },
    { value: 'Parking', label: 'Parking' },
    { value: 'Late closing', label: 'Late closing' },
    { value: 'Open-Air', label: 'Open-Air' },

]

const pricesData = [
    {
        value: "low",
        content: <img src={dollarIcon} alt='priceIcon' />,
        selected: false,
    },
    {
        value: "normal",
        content: <>
            <img src={dollarIcon} alt='priceIcon' />
            <img src={dollarIcon} alt='priceIcon' />
        </>,
        selected: true,
    },
    {
        value: "high",
        content: <>
            <img src={dollarIcon} alt='priceIcon' />
            <img src={dollarIcon} alt='priceIcon' />
            <img src={dollarIcon} alt='priceIcon' />
        </>,
        selected: false,
    },
]



const ConditionsSelect = ({selectGuests,selectCategory,selectPrice,selectAdditionalInfo}) => {
    const [prices, setPrices] = useState(pricesData)
    const [guests,setGuests] = useState(1)

    useEffect(()=>{
        selectGuests(guests)
    },[guests])

    function changePrice(price) {
        setPrices(prev => {
            return prev.map(item => {
                if (item.value === price) return {
                    ...item,
                    selected: true
                }
                return {
                    ...item,
                    selected: false
                }
            })
        })
        selectPrice(price)
    }
    function changeGuests(evt){
        if(evt.target.value >= 0){
            setGuests(evt.target.value)
        }
    }
    function incrGuests(){
        setGuests(prev=>++prev)
    }
    function decGuests(){
        if(guests>0)  {
            setGuests(prev=>--prev);
        }
    }
    function changeCategory(category){
        selectCategory(category?.value || '')
    }
    function changeAddInfo(info){
        selectAdditionalInfo(info.map(info=>info.value))
    }


    return (
        <>
            <SelectContainer>
                <div className={styles.selects}>
                    <span className={styles.inputName}>Guests*</span>
                    <div className={styles.guests}>
                        <img src={decIcon} alt='dec' className={styles.btn} onClick={decGuests} />
                        <input type='number' min='0' value={guests} className={styles.guestsNumber} onChange={changeGuests}  />
                        <img src={incIcon} alt='inc' className={styles.btn} onClick={incrGuests} />
                    </div>
                </div>
                <div className={styles.selects}>
                    <CreatableSelect
                        onChange={changeCategory}
                        name='category'
                        options={categoriesOptions}
                        isClearable
                        placeholder="Create or select category*"
                        className={styles.categories}
                        styles={creatableSelectStyles}

                    />
                </div>
            </SelectContainer>
            <SelectContainer>
                <div className={styles.selects}>
                    <span className={styles.inputName}>Select Price*</span>
                    <div className={styles.prices}>
                        {
                            prices.map(item => {
                                return <div className={item.selected ? styles.selectedPrice : styles.price} key={item.value} onClick={() => { changePrice(item.value) }}>
                                    {item.content}
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className={styles.selects}>
                    <Select
                        onChange={changeAddInfo}
                        styles={creatableSelectStyles}
                        className={styles.categories}
                        placeholder='Additional requirements'
                        isMulti
                        options={additionalOptions}
                    />
                </div>

            </SelectContainer>
        </>
    )
}

export default ConditionsSelect