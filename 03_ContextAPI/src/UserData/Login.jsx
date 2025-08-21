import UserContext from "./UserContext"
import { useContext, useState } from "react"

const Login = () =>{
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

const {setUser} = useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({userName, password})
    }
    return(
        <>
        <div>
            <input 
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            type="text" placeholder="Username" 
            />
            {" "}
            <input 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type="text" placeholder="Enter Password" />
            <button onClick={handleSubmit}>Login</button>
        </div>
        </>
    )
}
export default Login