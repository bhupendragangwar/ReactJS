import { useContext } from 'react'
import Footer from '../Common/Footer.jsx'
import { UserContext } from '../contextProvider/MainContext.jsx'


export default function Home(){
const {userName} = useContext(UserContext)
// console.log(obj.userName)

    return(
        <div>
            <h3>Welcome to Home Page: {userName}</h3>
            {/* <Footer /> */}
        </div>
    )
}