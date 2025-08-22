// Build an authentication context (AuthContext) 
// that stores login state (isAuthenticated, user) and provides login/logout functionality.

import {createContext, useContext} from 'react'

const AuthContext = createContext();

export default AuthContext;