const { Router } = require('express');
const movieRouter = Router();
const {
	addMovie,
	listMovies,
	updateMovie,
	deleteMovie,
} = require('./movie.controllers');

movieRouter.post('./movie', addMovie);

// Add functions in movie models
movieRouter.post('/.movie', listMovies);
movieRouter.post('./movie', updateMovie);
// this one has a :param
movieRouter.delete('./movie/:title', deleteMovie);

module.exports = movieRouter;
