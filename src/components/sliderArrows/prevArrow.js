import React from "react";
import prevArrow from './../../images/nextArrow.svg'
const PrevArrow= ({onClick})=><img src={prevArrow} alt='prev' style={{cursor:'pointer',transform: 'rotate(180deg)'}} onClick={onClick}/>
export default PrevArrow