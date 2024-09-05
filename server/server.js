import express from 'express';
import cors from 'cors';
import connectDB from './mongodb.js';
import routeCategory from './routes/route.category.js';
import routeCity from './routes/route.city.js';
import routePlace from './routes/route.place.js';
import routeAuth from './routes/route.auth.js';
import routeUser from './routes/route.user.js';
import routeComment from './routes/route.comment.js';
import passport from 'passport';
import session from 'express-session';
import passportConfig from './passport.config.js';
import path from 'path';
import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT;
const sessionSecret = process.env.SESSION_SECRET;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use(
	session({
		secret: sessionSecret,
		resave: false,
		saveUninitialized: true,
	})
);

app.use(passport.initialize());
app.use(passport.session());

connectDB();

app.use('/data/category', routeCategory);
app.use('/data/city', routeCity);
app.use('/auth', routeAuth);
app.use('/data/place', routePlace);
app.use('/data/user', routeUser);
app.use('/data/comment', routeComment);

app.listen(port, () => {
	console.log('Server started on port', port);
});
