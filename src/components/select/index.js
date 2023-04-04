import * as styles from "../conditionSelectors/conditions.module.css";
import React from "react";
import {creatableSelectStyles} from "../../styles/selectStyles";
import CreatableSelect from "react-select/creatable";

const SCreatableSelect =(props) =>{

    return (
        <CreatableSelect
            {...props}
            isClearable
            styles={creatableSelectStyles}
        />
    )
}
export default SCreatableSelect;