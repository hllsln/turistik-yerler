import express from 'express';

import { getCities } from '../controllers/city/controller.city.get.js';
import { postCity } from '../controllers/city/controller.city.post.js';
import { updateCity } from '../controllers/city/controller.city.update.js';
import { deleteCity } from '../controllers/city/controller.city.delete.js';

const router = express.Router();

router
	.get('/get', getCities)
	.post('/post', postCity)
	.post('/update', updateCity)
	.delete('/delete', deleteCity);

export default router;
