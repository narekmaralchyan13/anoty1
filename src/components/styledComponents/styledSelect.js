import styled , {withTheme} from "styled-components";
import {Select} from "antd";
const SSelect = styled(Select)`
  
  &.ant-select {
    background-color: #EFF3F5;
    padding: 16px 0 !important;
    border-radius: 20px;
    width: 30%;
    min-width: 350px;
    @media (max-width: 800px) {
      width: 100%;
      background-color: #EFF3F5;
    }
  }
  .ant-select-selection-overflow-item{
    opacity: 1;
    order: 1;
    border-radius: 20px;
    background-color: rgba(86, 86, 86, 1);
    overflow: hidden;
  .ant-select-selection-search{
    display: none;
  }
    .anticon-close{
      color: black;
      background-color: white;
      display: flex;
      font-size: 16px;
      padding: 2px;
      border-radius: 100%;
      align-items: center;
    }
    .ant-select-selection-item{
      border: none;
      background-color: inherit;
      color: white;
      align-items: center;
    }
  }
    .ant-select-selector{
      width: 100%;
      min-width: 350px;
      background-color: #EFF3F5 !important;
      outline: none;
      border: none !important;
      font-size: 24px;
      line-height: 36px;
      box-shadow: none !important;
      @media (max-width: 800px) {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;     
      }
    }
    .ant-select-selection-search-input ,.ant-select-selection-overflow{
      cursor: pointer !important;
    }
    .ant-input{
      font-size: 16px;
      padding: 0;
    }
    .ant-select-arrow{
      cursor: pointer;
      right: 16px;
      user-select: none;
      width: 24px;
      height: 24px;
      font-size: 16px;
      background-color: black;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      transform: translate(0, -25%);  
    }
    .ant-select-clear{
      cursor: pointer;
      right: 48px;
      font-size: 30px;
      user-select: none;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      transform: translate(0, -25%);
    }
    
  }
`

export default withTheme(SSelect)