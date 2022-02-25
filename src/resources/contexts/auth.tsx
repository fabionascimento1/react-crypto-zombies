import { Children, createContext, ReactNode, useContext, useState } from 'react'

type AuthContextType = {
  address: string
  setAddress: (address: string) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

type AuthProviderProps = {
  children: ReactNode | ReactNode[]
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [address, setAddress] = useState('')
  
  const setInternalAddress = (address: string) => {
    setAddress(address)
  }

  return(
    <AuthContext.Provider value={{ address, setAddress: setInternalAddress }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('Você precisa usar o AuthProvider')
  }
  return context
}

