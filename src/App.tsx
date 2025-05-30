import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CategoryPage, ElementPage } from './components'
import { NavLayout } from './layout/nav-layout'

export const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route
					path=''
					element={<NavLayout />}>
					<Route
						path='/category-page'
						element={<CategoryPage />}
					/>
					<Route
						path='element-page'
						element={<ElementPage />}
					/>
				</Route>
			</Routes>
		</div>
	)
}
