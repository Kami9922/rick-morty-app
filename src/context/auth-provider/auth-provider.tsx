import { createContext, ReactNode, useContext, useState } from 'react'

interface AuthContextType {
	user: string | null
	signin: (newUser: string, callback: () => void) => void
	signout: (callback: () => void) => void
}

interface AuthProviderProps {
	children: ReactNode
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}

const getItemFromLocalStorage = () => {
	const storedUser = localStorage.getItem('user')
	return storedUser ? storedUser : null
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<string | null>(getItemFromLocalStorage())

	const signin = (newUser: string, callback: () => void) => {
		setUser(newUser)
		localStorage.setItem('user', newUser)
		callback()
	}

	const signout = (callback: () => void) => {
		setUser(null)
		localStorage.removeItem('user')
		callback()
	}

	const value: AuthContextType = {
		user,
		signin,
		signout,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
