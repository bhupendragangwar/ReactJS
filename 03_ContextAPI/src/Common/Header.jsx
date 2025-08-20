import { useContext } from "react"
import { counterContext } from "../contextProvider/MainContext"


export default function Header(){
    let obj = useContext(counterContext)
    return(
        <div>
            <h4>Headrer Section
                <button onClick={()=> obj.setCount(obj.count+1)}>Value Change</button>
            </h4>
        </div>
    )
}