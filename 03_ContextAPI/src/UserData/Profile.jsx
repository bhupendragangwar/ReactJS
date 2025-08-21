import UserContext from "./UserContext";
import {useContext} from 'react'

const Profile = ()=>{
    const {user} = useContext(UserContext)
    if(!user) return "Please Login"

    return <div>
        <h2>Welcome: {user.userName}</h2>
        <h2>Password: {user.password}</h2>
    </div>
}

export default Profile;