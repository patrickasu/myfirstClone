const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Reservation Model and Schema
const ReservationSchema = new Schema({
	firstname: {
		type: String,
	},
	lastname: {
		type: String,
	},
	purpose: {
		type: String,
	}
});