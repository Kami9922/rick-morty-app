import { Link } from 'react-router-dom'
import charactersData from '../../db/characters.json'
import episodesData from '../../db/episodes.json'
import locationsData from '../../db/locations.json'

export const CategoryPage = ({ category }: { category: string }) => {
	return (
		<>
			<h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
			<ul>
				{category === 'characters' &&
					charactersData.map((item) => (
						<Link to={`/${category}/${item.id}`}>
							<li>{item.name}</li>
						</Link>
					))}

				{category === 'episodes' &&
					episodesData.map((item) => (
						<Link to={`/${category}/${item.id}`}>
							<li>{item.name}</li>
						</Link>
					))}
				{category === 'locations' &&
					locationsData.map((item) => (
						<Link to={`/${category}/${item.id}`}>
							<li>{item.name}</li>
						</Link>
					))}
			</ul>
		</>
	)
}
