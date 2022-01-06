// need CRUD functions

// add user
// list users
// update user
// delete user

// THEN

// add password checking functionality

const User = require('./user.model');

exports.addUser = async (req, res) => {
	try {
		const user = await User.create(req.body);
		res.status(201).send({ message: 'Success', user });
	} catch (e) {
		console.log(e);
		res.status(500).send({ message: 'Check server logs' });
	}
};

exports.listUser = async (req, res) => {
	try {
		const user = await User.findOne({ username: req.params.username });
		res.status(201).send({ message: 'Success', user });
	} catch (e) {
		console.log(e);
		res.status(500).send({ message: 'Check server logs' });
	}
};

exports.updateUser = async (req, res) => {
	try {
		const updatedUser = await User.updateOne(
			{ username: req.body.username },
			{ $set: { email: req.body.email } },
			{ new: true }
		);
		res.status(200).send({ message: 'Success', updatedUser });
	} catch (e) {
		console.log(e);
		res.status(500).send({ message: 'Check server logs' });
	}
};

exports.deleteUser = async (req, res) => {
	try {
		const deletedUser = await User.deleteOne({ username: req.params.username });
		res.status(200).send({ message: 'Success', deletedUser });
	} catch (e) {
		console.log(e);
		res.status(500).send({ message: 'Check server logs' });
	}
};
