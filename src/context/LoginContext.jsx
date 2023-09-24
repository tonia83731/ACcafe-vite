import { createContext, useContext, useState } from "react";

const AuthContext = createContext()


export function AuthProvider({children}) {
  const [username, setUsername] = useState("");
  const [password, setPassWord] = useState("");

  const login = (username, password) => {
    setUsername(username)
    setPassWord(password)
  }
  return (
    <AuthContext.Provider value={{username, password, login}}>
      {children}
    </AuthContext.Provider>
  )
}


export function useAuth() {
  return useContext(AuthContext)
}