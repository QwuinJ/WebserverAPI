require('dotenv').config();
const mongoose = require('mongoose');

const connection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log('connected to database');
	} catch (e) {
		console.log(e);
	}
};

connection();
