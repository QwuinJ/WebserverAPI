// using bcrypt js to crypt passwords
// just use hash and compare - hash to crypt, compare to check it matches

// create two middleware functions that deal with password hashing
// first should hash the password before it's stored in the DB
// second should decrypt the password

const bcrypt = require('bcryptjs');

exports.hassPassword = async (req, res, next) => {
	try {
		// const tempPassword = req.body.password;
		// const hashedPassword = bcrypt.hash(tempPassword, 8);
		// req.body.password = hashedPassword;

		req.body.password = await bcrypt.hash(req.body.password, 8);

		next();
	} catch (e) {
		console.log(e);
		res.status(500).send({ message: 'check server' });
	}
};

exports.decryptPassword = async (req, res, next) => {
	try {
		req.user = await User.findOne({ username: req.body.username });
		if (await bcrypt.compare(req.body.password, req.user.password)) {
			next();
		} else {
			throw new Error();
		}
	} catch (e) {
		console.log(e);
	}
};
