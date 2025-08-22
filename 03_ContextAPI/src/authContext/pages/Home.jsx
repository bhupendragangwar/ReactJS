import { useAuth } from "../AuthContextProvider";

const Home = ()=>{
    const {isAuthenticated, user} = useAuth();
    return <div>
        <h2>Home Page</h2>
        
        {isAuthenticated ? (<div><h1>Welcome back user</h1><p>Logged in as {user?.email}</p> </div>): <p>You are not logged in.</p>}
    </div>
    
}

export default Home;