import React, {useState} from "react"
const AuthContext = React.createContext(
    {
       token:'',
       email:'',
       isLoggedIn:false,
       login:(token)=>{},
       logout:()=>{} 
    }
)
export const AuthContextProvider =(props)=>{
    const initialtoken=localStorage.getItem('token') 
    const initialEmail = localStorage.getItem('email');
    const[token,setToken]=useState(initialtoken)
    const[email,setEmail]=useState(initialEmail)
    const userIsLoggedIn =!!token 


    const loginHandler =(token,urlemail)=>{
        setToken(token)
        localStorage.setItem('token',token)
        setEmail(urlemail)
        localStorage.setItem('email', email);
    }
    const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token')
        setEmail(null)
        localStorage.removeItem('email')

    }
    const contextValue={
        token:token,
        email:email,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;