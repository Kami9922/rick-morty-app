import charactersData from '../../../db/characters.json'
import episodesData from '../../../db/episodes.json'
import locationsData from '../../../db/locations.json'
import { useParams } from 'react-router-dom'
interface Character {
	id: number
	name: string
	status: string
	species: string
	type: string
	gender: string
	image: string
}

interface Episode {
	id: number
	name: string
	air_date: string
	episode: string
}

interface Location {
	id: number
	name: string
	type: string
	dimension: string
}

export const ElementPage = () => {
	const { category, id } = useParams<{ category?: string; id?: string }>()

	const elementId = id ? parseInt(id, 10) : null

	const character =
		elementId !== null && category === 'characters'
			? charactersData.find((element: Character) => element.id === elementId)
			: null
	const episode =
		elementId !== null && category === 'episodes'
			? episodesData.find((element: Episode) => element.id === elementId)
			: null
	const location =
		elementId !== null && category === 'locations'
			? locationsData.find((element: Location) => element.id === elementId)
			: null

	return (
		<div>
			<div>
				{category === 'characters' && character ? (
					<ul>
						<li className='title-name'>{character.name}</li>
						<img
							src={character.image}
							alt={character.name}
						/>
						<li>Status: {character.status}</li>
						<li>Species: {character.species}</li>
						{character.type && <li>{character.type}</li>}
						<li>Gender: {character.gender}</li>
					</ul>
				) : category === 'episodes' && episode ? (
					<ul>
						<li className='title-name'>{episode.name}</li>
						<li>Air Date: {episode.air_date}</li>
						<li>Episode: {episode.episode}</li>
					</ul>
				) : category === 'locations' && location ? (
					<ul>
						<li className='title-name'>{location.name}</li>
						<li>Type: {location.type}</li>
						<li>Dimension: {location.dimension}</li>
					</ul>
				) : (
					<li>Element not found</li>
				)}
			</div>
		</div>
	)
}
