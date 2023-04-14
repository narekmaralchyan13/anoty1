import React, {useContext, useState} from "react";
import * as styles from './conditions.module.css'
import dollarIcon from "../../images/dollar.svg";
import {useTranslation} from "react-i18next";
import {DataContext} from "../../dataContext/DataContextProvider";
import {selectPrice} from "../../recuders/dataReducer";

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
const SelectPrice = ()=>{
    const {dispatch} = useContext(DataContext)
    const [prices, setPrices] = useState(pricesData)
    const {t} = useTranslation()

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
        dispatch(selectPrice(price))
    }
    return (
        <div className={styles.selects}>
            <span className={styles.inputName}>{t('Select Price')} *</span>
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
    )
}
export default SelectPrice