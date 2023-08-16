import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
    switch (action.type) {
        case "RED":
            return {...state, color: "red"}
        case "BLUE":
            return {...state, color: "blue"}    
        default:
            return state
    }
} 

export const TitleColorContextProvider = ({children}) => {

    const [state, dispathc] = useReducer(titleColorReducer, {color: "purple"})

    return(
        <TitleColorContext.Provider value={{...state, dispathc}}>
            {children}
        </TitleColorContext.Provider>
    )
}