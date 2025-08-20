import { createContext, useContext, useState } from "react"

export let counterContext = createContext()
export default function MainContext({children}){
    let [count, setCount] = useState(1)
    return(
        <counterContext.Provider value={{count, setCount}}>
            {children}
        </counterContext.Provider>
    )
}

export let useCount = () => useContext(counterContext)