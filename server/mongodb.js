import mongoose from 'mongoose';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL;

const connectDB = async () => {
	await mongoose
		.connect(databaseURL)
		.then(() => console.log('Connected to database.'))
		.catch((err) => console.log(err));
};

export default connectDB;
