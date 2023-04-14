import React, {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {DataContext} from "../../dataContext/DataContextProvider";
import {selectCategory} from "../../recuders/dataReducer";
import {Button, Divider, Input, Space,Select} from 'antd';
import SSelect from "../styledComponents/styledSelect";


const CategoriesOptions = [
    {value: 'Restaurant', label: 'Restaurant'},
    {value: 'Cafe', label: 'Cafe'},
    {value: 'Club', label: 'Club'},
    {value: 'Pub', label: 'Pub'},
    {value: 'BeerHouse', label: 'BeerHouse'},
    {value: 'WineHouse', label: 'WineHouse'},
    {value: 'Bar', label: 'Bar'},
    {value: 'Kids', label: 'Kids'},
]
const SelectCategory = () => {
    const {t, i18n} = useTranslation()
    const [open, setOpen] = useState(false);
    const {state,dispatch} = useContext(DataContext)
    const [categories, setCategories] = useState({
        options: CategoriesOptions.map(category => ({...category, label: t(category.label)})),
        selected:null,
    })
    const [inputValue,setInputValue] = useState('')

    useEffect(() => {
        const temp = CategoriesOptions.find(opt => opt.value === categories.selected?.value)
        setCategories(prev => {
            return {
                options: CategoriesOptions.map(category => ({...category, label: t(category.label)})),
                selected: temp && {...prev.selected, label: t(temp.label)}
            }
        })
    }, [i18n.language])
    const handleChangeInputValue =(e)=>{
        setInputValue(e.target.value)
    }
    const handleChangeCategory = (categoryName,category) => {
        setCategories(prev => {
            return {
                ...prev,
                selected: category
            }
        })
        dispatch(selectCategory(categoryName))
    }
    const addCustomValue = (e)=>{

            if (inputValue){
                handleChangeCategory(inputValue,{value:inputValue,label:inputValue})
                setInputValue('')
                setOpen(false)

            }
        }

        function handleClear (){
            handleChangeCategory()
        }

    return (
        <SSelect
            size='large'
            allowClear
            onClear = {handleClear}
            value={categories.selected?.label}
            onSelect={handleChangeCategory}
            showSearch
            onDropdownVisibleChange={(visible) => setOpen(visible)}
            placeholder={t('Create or select category')+' *'}
            open={open}
            dropdownRender={(menu) => (
                <>
                    {menu}
                    <Space>
                        <Input
                            placeholder={t('+ Add other')}
                            value={inputValue}
                            onChange={handleChangeInputValue}
                            // onBlur={addCustomValue}
                        />
                        <Button type="primary"  disabled={!inputValue} onClick={addCustomValue} >
                            {t('Add')}
                        </Button>
                        </Space>
                </>
            )}
            options={categories.options}
        />
    )
}

export default SelectCategory;

