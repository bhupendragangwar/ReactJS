import { useContext } from "react"
import { UserContext } from "../contextProvider/MainContext"

export default function Footer(){
    const obj = useContext(UserContext);
    console.log(obj)
    return(
        <div>
            <h4>Footer Section: {obj.userName}</h4>
            <button onClick={()=> obj.setUserName('Rock')}>Change Profile Name</button>
        </div>
    )
}