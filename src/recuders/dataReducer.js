import {get5UpcomingYears} from "../utils/get5UpcomingYears";
import moment from "moment";
const currentDay =  new Date()
const ACTION_TYPES = {
    SELECT_DAY:'SELECT_DAY',
    SELECT_CATEGORY:'SELECTCATEGORY',
    SELECT_PRICE:'SELECTPRICE',
    SELECT_GUESTS:'SELECTGUESTS',
    SELECT_ADDINFO:'SELECTADDINFO',
    SELECT_TIME:'SELECTTIME'
}
export const dataInitialState = {
    day:`${currentDay.getDate()}/${currentDay.getMonth()+1}/${currentDay.getFullYear()}`,
    category:'',
    price:'normal',
    guests:0,
    additionalInfo:[],
    time:'7:00 PM'
}


export function dataReducer (state,action){
    switch (action.type){
        case ACTION_TYPES.SELECT_DAY: return {
            ...state,
            day:action.body
        }
        case ACTION_TYPES.SELECT_CATEGORY: return {
            ...state,
            category: action.body
        }
        case ACTION_TYPES.SELECT_PRICE: return {
            ...state,
            price:action.body
        }
        case ACTION_TYPES.SELECT_GUESTS: return {
            ...state,
            guests: action.body
        }
        case ACTION_TYPES.SELECT_ADDINFO: return {
            ...state,
            additionalInfo: action.body
        }
        case ACTION_TYPES.SELECT_TIME : return {
            ...state,
            time:action.body
        }
        default: return state;
    }

}

const actions ={
    selectDay: (day) =>{
        return {
            type: ACTION_TYPES.SELECT_DAY,
            body:`${day.getDate()}/${day.getMonth()+1}/${day.getFullYear()}`
        }
    },
    selectCategory: (category)=>{
        return {
            type: ACTION_TYPES.SELECT_CATEGORY,
            body:category
        }
    },
    selectPrice: (price)=>{
        return{
            type: ACTION_TYPES.SELECT_PRICE,
            body:price
        }
    },
    selectGuests:(guests)=>{
        return{
            type:ACTION_TYPES.SELECT_GUESTS,
            body:guests
        }
    },
    selectAdditionalInfo: (addInfo) => {
        return {
            type:ACTION_TYPES.SELECT_ADDINFO,
            body:addInfo
        }
    },
    selectTime: (time) => {
        return {
            type:ACTION_TYPES.SELECT_TIME,
            body:time
        }
    }

}

export const {selectDay,selectCategory,selectPrice,selectGuests,selectAdditionalInfo,selectTime} = actions