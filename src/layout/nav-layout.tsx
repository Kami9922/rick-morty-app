import { AuthStatus } from '../components/auth-status/auth-status'
import { Header } from '../ui/header/header'
import { Outlet } from 'react-router-dom'

export const NavLayout = () => {
	return (
		<>
			<AuthStatus />
			<Header />
			<Outlet />
		</>
	)
}
