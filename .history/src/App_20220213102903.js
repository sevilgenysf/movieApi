import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const FEATURED_API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=';

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(FEATURED_API_URL)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMovies(data.results);
			});
	}, []);
	return (
		<div>
			<header>
				<input className="search" type="text" placeholder="Search..." />
			</header>
			<div className="movie-container">
				{movies.length > 0 &&
					movies.map((movie) => <Movie {...movie} key={movie.id} />)}
			</div>
		</div>
	);
}

export default App;
