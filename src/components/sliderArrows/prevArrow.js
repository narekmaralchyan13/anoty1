import React from "react";
import prevArrow from './../../images/prevArrow.svg'
const PrevArrow= ({onClick})=><img src={prevArrow} alt='prev' style={{cursor:'pointer'}} onClick={onClick}/>
export default PrevArrow