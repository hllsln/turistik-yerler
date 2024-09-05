import mongoose from 'mongoose';
import Category from './model.category.js';
import City from './model.city.js';

const placeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	info: {
		type: String,
		required: true,
	},
	link: {
		type: String,
	},
	city: {
		type: mongoose.ObjectId,
		ref: 'City',
		required: true,
	},
	category: {
		type: mongoose.ObjectId,
		ref: 'Category',
		required: true,
	},
});

const Place = new mongoose.model('Place', placeSchema);

export default Place;
