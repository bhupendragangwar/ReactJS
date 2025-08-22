import { useState } from "react";
import { useAuth } from "../AuthContextProvider";

const Login = ()=>{

        const {login, logout, isAuthenticated, user} = useAuth()

    const handleLogin = () => {
    login({ id: "1", name: "Rohit Kumar", email: "rohit@example.com" });
  };

    return(
        <div>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user?.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
    )
}

export default Login;