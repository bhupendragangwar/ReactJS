import {createContext, useContext, useState} from 'react'

// Create a UserContext that stores a username and display 
// it in multiple components without using props.

// step 1: create userContext

export const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [userName, setUserName] = useState('Rohit')

    const value = {userName, setUserName}
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
