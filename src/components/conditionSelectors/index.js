import React, { useEffect, useState } from 'react'
import SelectContainer from '../form/components/selectContainer'
import * as styles from './conditions.module.css'
import { components } from "react-select";
import SelectCategory from "./selectCategory";
import SelectPrice from "./selectPrice";
import SelectGuests from "./selectGuests";
import SelectAdditionalInfo from "./selectAdditionalInfo";


// const Option = (props) => {
//     return (
//         <div>
//             <components.Option {...props}>
//                 <input
//                     type="checkbox"
//                     checked={props.isSelected}
//                     onChange={() => null}
//                 />{" "}
//                 <label>{props.label}</label>
//             </components.Option>
//         </div>
//     );
// };
const ConditionsSelect = () => {
    return (
        <>
            <SelectContainer>
                <SelectCategory />
                <SelectPrice />
            </SelectContainer>
            <SelectContainer>
                <SelectGuests />
                <SelectAdditionalInfo />
            </SelectContainer>
        </>
    )
}

export default ConditionsSelect