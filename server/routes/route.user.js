import express from 'express';
import upload from '../multer.js';
import { getUsers } from '../controllers/user/controller.user.get.js';
import { updateUser } from '../controllers/user/controller.user.update.js';
import updateAvatar from '../controllers/user/controller.user.updateavatar.js';

const router = express.Router();

router
	.get('/get', getUsers)
	.post('/update', updateUser)
	.post('/updateavatar', upload.single('image'), updateAvatar);

export default router;
