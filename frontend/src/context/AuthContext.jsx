import Reacr, { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({childern}) => {
    const[user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const login  = ()=>{
        
    }
    const register = ()=>{

    }
    const logout = ()=>{

    }

  return (
    <AuthContext.Provider value={{user,register,login,logout}}>
        {childern}
    </AuthContext.Provider>
  )
}
export const useAuth = ()=> useContext(AuthContext);

export default AuthContext