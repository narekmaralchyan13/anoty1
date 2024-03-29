import React, {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import SSelect from "../styledComponents/styledSelect";
import {Input, Button, Space, Row, Col} from "antd";
import {DataContext} from "../../dataContext/DataContextProvider";
import {selectAdditionalInfo} from "../../recuders/dataReducer";

const AdditionalOptions = [
    { value: 'None smoking', label: 'None smoking',},
    { value: 'Parking', label: 'Parking',},
    { value: 'Late closing', label: 'Late closing' },
    { value: 'Open-Air', label: 'Open-Air' }
]
const SelectAdditionalInfo = () => {
    const {state,dispatch} =  useContext(DataContext)
    const {t,i18n} = useTranslation()
    const [additionalInfo,setAdditionalInfo] = useState({
        options:AdditionalOptions.map(option=>({ ...option , label:t(option.label)})),
        selected:[]
    })
    const [inputValue,setInputValue] =  useState('')

    useEffect(()=>{
        setAdditionalInfo(prev=>{
            return {
                options: prev.options.map(option=>({ ...option , label:t(option.value)})),
                selected: prev.selected.map(option=>({...option,label:t(option.value)}))
            }
        })
    },[i18n.language])
    function handleChangeInputValue (e){
        setInputValue(e.target.value)
    }
    function changeAddInfo(selected,objArr){
        console.log({objArr})
        setAdditionalInfo(prev=>{
            return {
                ...prev,
                selected: objArr
            }
        })
        dispatch(selectAdditionalInfo(selected))
    }

    function addCustomValue(e){
        if(inputValue){
            const newOption = {value:inputValue,label:inputValue,selected:true}
            setAdditionalInfo(prev=>{
                return {
                    ...prev,
                    options: [...prev.options,newOption],
                    selected: [...prev.selected,newOption]
                }
            })
            setInputValue('')
        }
    }

    return(
        <SSelect
            size='large'
            maxTagCount='responsive'
            mode='multiple'
            value={additionalInfo.selected.map(op=>op.value)}
            onChange={changeAddInfo}
            showArrow
            showSearch={false}
            placeholder={t('Additional requirements')}
            dropdownRender={(menu) => (
                <>
                    {menu}
                    <Row>
                        <Col span={18}>
                            <Input
                                className={inputValue ? 'inputNotEmpty' :''}
                                placeholder={t('+ Add other')}
                                value={inputValue}
                                onChange={handleChangeInputValue}
                            />
                        </Col>
                        <Col span={6}>
                            <Button type="primary" disabled={!inputValue} onClick={addCustomValue} >
                                {t('Add')}
                            </Button>
                        </Col>
                    </Row>
                </>
            )}
            options={additionalInfo.options}
        />

    )
}
export default SelectAdditionalInfo

