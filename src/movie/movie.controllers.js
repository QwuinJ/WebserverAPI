const Movie = require('./movie.model');

exports.addMovie = async (req, res) => {
	try {
		const movie = await Movie.create(req.body);
		res.status(201).send({ message: 'success', movie });
	} catch (e) {
		console.log(e);
		res.status(500).send({ message: 'check server logs' });
	}
};

exports.listMovies = async (req, res) => {
	try {
		const movies = await Movie.findOne({});
		res.status(200).send({ message: 'Success', movies });
	} catch (e) {
		console.log(e);
		res.status(500).send({ message: 'check server logs' });
	}
};

exports.updateMovie = async (req, res) => {
	try {
		const updatedMovie = await Movie.updateOne(
			{
				title: req.params.title,
			},
			{ $set: { actor: req.body.actor } },
			{ new: true }
		);
		res.status(200).send({ message: 'success', updatedMovie });
	} catch (e) {
		console.log(e);
	}
};

exports.deleteMovie = async (req, res) => {
	try {
		const deletedMovie = await Movie.deleteOne({ title: req.params.title });
		res.status(200).send({ message: 'success', deletedMovie });
	} catch (e) {
		console.log(e);
		res.status(500).send({ message: 'check server logs' });
	}
};
