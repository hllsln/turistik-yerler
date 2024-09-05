import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	membershipDate: {
		type: Date,
		required: true,
	},
	avatar: String,
});

const User = new mongoose.model('User', userSchema);

export default User;
