import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Category, Element, NotFound } from './components'
import { NavLayout } from './layout/nav-layout'
import { AuthProvider } from './context/auth-provider/auth-provider'
import { Login } from './components/pages/login/login'
import { PrivateRoute } from './components/private-route/private-route'

export const App = () => {
	return (
		<div className='App'>
			<AuthProvider>
				<Routes>
					<Route
						path='/'
						element={<NavLayout />}>
						<Route
							path='/characters'
							element={
								<PrivateRoute>
									<Category category='characters' />
								</PrivateRoute>
							}
						/>
						<Route />
						<Route
							path='/locations'
							element={
								<PrivateRoute>
									<Category category='locations' />
								</PrivateRoute>
							}
						/>
						<Route
							path='/episodes'
							element={
								<PrivateRoute>
									<Category category='episodes' />
								</PrivateRoute>
							}
						/>
						<Route />
						<Route
							path='/:category/:id'
							element={
								<PrivateRoute>
									<Element />
								</PrivateRoute>
							}
						/>
					</Route>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</AuthProvider>
		</div>
	)
}
