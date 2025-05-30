import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CategoryPage, ElementPage, NotFound } from './components'
import { NavLayout } from './layout/nav-layout'

export const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route
					path=''
					element={<NavLayout />}>
					<Route
						path='/characters'
						element={<CategoryPage category='characters' />}
					/>
					<Route
						path='/locations'
						element={<CategoryPage category='locations' />}
					/>
					<Route
						path='/episodes'
						element={<CategoryPage category='episodes' />}
					/>
					<Route
						path='/:category/:id'
						element={<ElementPage />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Route>
			</Routes>
		</div>
	)
}
