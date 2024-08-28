import React, { useContext } from 'react'

const AuthContext = React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState()
    const value ={
        currentUser
    }
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
