const { Router } = require('express');
const movieRouter = Router();
const {
	addMovie,
	listMovies,
	updateMovie,
	deleteMovie,
} = require('./movie.controllers');

movieRouter.post('/movie', addMovie);
movieRouter.get('/movie/:title', listMovies);
movieRouter.put('/movie', updateMovie);
movieRouter.delete('/movie/:title', deleteMovie);

module.exports = movieRouter;
