import mongoose from 'mongoose';
import Place from './model.place.js';
import User from './model.user.js';

const commentSchema = new mongoose.Schema({
	postedBy: {
		type: mongoose.ObjectId,
		ref: 'User',
		required: true,
	},
	placeId: {
		type: mongoose.ObjectId,
		ref: 'Place',
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	datePosted: {
		type: Date,
		required: true,
	},
});

const Comment = new mongoose.model('Comment', commentSchema);

export default Comment;
