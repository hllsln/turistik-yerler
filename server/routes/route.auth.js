import express from 'express';
import {
	signin,
	signup,
	signout,
	forgotPassword,
} from '../controllers/auth/controller.auth.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);
router.post('/forgotpassword', forgotPassword);

export default router;
