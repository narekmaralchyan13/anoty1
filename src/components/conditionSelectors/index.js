import React, { useState } from 'react'
import SelectContainer from '../form/components/selectContainer'
import * as styles from './conditions.module.css'
import CreatableSelect from 'react-select/creatable';
import dollarIcon from './../../images/dollar.svg'


const options = [
    { value: 'Restaurant', label: 'Restaurant', color: "red" },
    { value: 'Cafe', label: 'Cafe' },
    { value: 'Club', label: 'Club' },
    { value: 'Pub', label: 'Pub' },
    { value: 'BeerHouse', label: 'BeerHouse' },
    { value: 'WineHouse', label: 'WineHouse' },
    { value: 'Bar', label: 'Bar' },
    { value: 'Kids', label: 'Kids' },
    { value: '', label: '+ Type for add other', isDisabled: true }
];

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
};

const pricesData = [
    {
        value: "low",
        content: <img src={dollarIcon} alt='priceIcon'/>,
        selected: false,
    },
    {
        value: "normal",
        content: <>
            <img src={dollarIcon} alt='priceIcon'/>
            <img src={dollarIcon} alt='priceIcon'/>
        </>,
        selected: true,
    },
    {
        value: "high",
        content: <>
            <img src={dollarIcon} alt='priceIcon'/>
            <img src={dollarIcon} alt='priceIcon'/>
            <img src={dollarIcon} alt='priceIcon'/>
        </>,
        selected: false,
    },
]


const ConditionsSelect = () => {
    const [prices,setPrices] = useState(pricesData)

    function changePrice(price){
        setPrices(prev=>{
            return prev.map(item=>{
                if(item.value===price) return {
                    ...item,
                    selected:true
                }
                return {
                    ...item,
                    selected:false
                }
            })
        })
    }

    return (
        <>
            <SelectContainer>
                <div className={styles.selects}>
                    <span className={styles.inputName}>Guests*</span>
                    <div className={styles.guests}>
                        <span className={styles.btn}>-</span>
                        <input type='number' min='1' defaultValue='1' className={styles.guestsNumber} />
                        <span className={styles.btn}>+</span>
                    </div>
                </div>
                <div className={styles.selects}>
                    <CreatableSelect
                        name='Category'
                        options={options}
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
                            prices.map(item=>{
                                return <div className={item.selected ?styles.selectedPrice : styles.price} onClick={()=>{changePrice(item.value)}}>
                                    {item.content}
                                </div>
                            })
                        }

                        {/* <div className={styles.price}>
                            <img src={dollarIcon} />
                        </div>
                        <div className={styles.price}>
                            <img src={dollarIcon} />
                            <img src={dollarIcon} />
                        </div>
                        <div className={styles.price}>
                            <img src={dollarIcon} />
                            <img src={dollarIcon} />
                            <img src={dollarIcon} />
                        </div> */}
                    </div>
                </div>
                <div className={styles.selects}>
                    <span className={styles.inputName}>Additional requirements</span>
                </div>

            </SelectContainer>
        </>
    )
}

export default ConditionsSelect