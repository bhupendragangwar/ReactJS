import { useContext, useEffect, useState } from "react"
import AuthContext from "./AuthContext"
const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    // Load user from localstorage when app starts
    useEffect(()=>{
        const storedUser = localStorage.getItem('user')
        if(storedUser){
            setUser(JSON.parse(storedUser))
            setIsAuthenticated(true)
        }
    }, [])

    // Login Function
    const login = (userData)=>{
        setUser(userData)
        setIsAuthenticated(true)
        localStorage.setItem("user", JSON.stringify(userData))
        
    }

    // Logout Function
    const logout = () =>{
        setUser(null)
        setIsAuthenticated(false)
        localStorage.removeItem('user')
    }
    
    const value = {user, isAuthenticated, login, logout}
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext)