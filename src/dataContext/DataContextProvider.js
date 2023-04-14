import React from "react";
import {createContext, useReducer} from "react";
import {dataInitialState, dataReducer} from "../recuders/dataReducer";

export const DataContext = createContext()

export default function DataContextProvider ({children}){
    const [state,dispatch] = useReducer(dataReducer , dataInitialState)

    return (
        <DataContext.Provider value={{state,dispatch}}>
            {children}
    </DataContext.Provider>
    )
}