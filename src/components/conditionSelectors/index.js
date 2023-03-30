import React, { useState } from 'react'
import SelectContainer from '../form/components/selectContainer'
import * as styles from './conditions.module.css'
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select/creatable';
import dollarIcon from './../../images/dollar.svg'


const categoriesOptions = [
    { value: 'Restaurant', label: 'Restaurant' },
    { value: 'Cafe', label: 'Cafe' },
    { value: 'Club', label: 'Club' },
    { value: 'Pub', label: 'Pub' },
    { value: 'BeerHouse', label: 'BeerHouse' },
    { value: 'WineHouse', label: 'WineHouse' },
    { value: 'Bar', label: 'Bar' },
    { value: 'Kids', label: 'Kids' },
    { value: '', label: '+ Type for add other', isDisabled: true }
];
const additionalOptions = [
    { value: 'None smoking', label: 'None smoking' },
    { value: 'Parking', label: 'Parking' },
    { value: 'Late closing', label: 'Late closing' },
    { value: 'Open-Air', label: 'Open-Air' },
    { value: '', label: '+ Type for add other', isDisabled: true }
]

const customStyles = {
    control: (base, state) => ({
        ...base,
        backgroundColor: '#EFF3F5',
        border: 'none',
        outline: 'none',
        fontFamily: 'Montserrat',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '36px',
        letterSpacing: '0em',
        textAlign: 'left',
        boxShadow: '0',

    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: 'white',
        fontFamily: 'Montserrat',
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
        color: 'white',
        backgroundColor: 'black',
        with: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
        '&:hover': {
            color: 'white',
        },
    }),
    indicatorSeparator: (base, state) => ({
        ...base,
        backgroundColor: '#EFF3F5',
    }),
    multiValue: (base, state) => ({
        backgroundColor: '#565656',
        color: 'white',
        borderRadius: '20px',
        display: 'flex',
        padding: '0 6px',
        display: 'flex',
        justifayContent: "space-between",
        alignItems: 'center'
    }),
    multiValueLabel: (base, state) => ({
        fontSize: '70%',
        fontWeight: '400',
        fontFamily: 'Montserrat',
        color: 'white',
        lineHeight: '36px',

    }),
    multiValueRemove: (base, state) => ({
        color: '#565656',
        backgroundColor: 'white',
        borderRadius: '50%',
        width: '16px',
        height: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '-4px',
        marginLeft: '4px',
        '&:hover': {
            backgroundColor: '#d9d9d9',
            cursor: 'pointer',
        },
    }),

};

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
            selectGuests(evt.target.value)
        }
    }
    function incrGuests(){
        setGuests(prev=>++prev)
        selectGuests(guests+1)
    }
    function decGuests(){
        if(guests>0)  {
            setGuests(prev=>--prev);
            selectGuests(guests-1)
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
                        <span className={styles.btn} onClick={decGuests}>-</span>
                        <input type='number' min='0' value={guests} className={styles.guestsNumber} onChange={changeGuests}  />
                        <span className={styles.btn} onClick={incrGuests}>+</span>
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
                        styles={customStyles}
                    />
                </div>
            </SelectContainer>
            <SelectContainer>
                <div className={styles.selects}>
                    <span className={styles.inputName}>Select Price*</span>
                    <div className={styles.prices}>
                        {
                            prices.map(item => {
                                return <div className={item.selected ? styles.selectedPrice : styles.price} onClick={() => { changePrice(item.value) }}>
                                    {item.content}
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className={styles.selects}>
                    <Select
                        onChange={changeAddInfo}
                        styles={customStyles}
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