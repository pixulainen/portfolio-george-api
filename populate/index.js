const config = require('../config');
const mongoose = require('mongoose');

const fakeDb = require('./FakeDB');
mongoose.connect(
	config.DB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	},
	async (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log('> Starting adding data to DB... ');
			await fakeDb.populate();
			await mongoose.connection.close();
			console.log('> DB has been populated...');
		}
	}
);
