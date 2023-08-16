import { createContext, useState } from "react";
//  ##CRIAR CONTEXT
export const CounterContext = createContext() //IMPORTAR O "counterContext" NO "main.jsx"

// ##CRIAR PROVIDER
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5)

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}