import React from 'react';
import Movie from './components/Movie';

const FEATURED_API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

function App() {
	const movies = ['1', '2', '3'];

	return (
		<div className="App">
			{movies.map((movie) => (
				<Movie />
			))}
		</div>
	);
}

export default App;
