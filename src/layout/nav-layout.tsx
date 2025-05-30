import { Link, Outlet } from 'react-router-dom'

export const NavLayout = () => {
	return (
		<>
			<ul>
				<li>
					<Link to='#'>Персонажи</Link>
				</li>
				<li>
					<Link to='#'>Эпизоды</Link>
				</li>
				<li>
					<Link to='#'>Локации</Link>
				</li>
			</ul>
			<Outlet />
		</>
	)
}
