import express from 'express';

import { getPlaces } from '../controllers/place/controller.place.get.js';
import { postPlace } from '../controllers/place/controller.place.post.js';
import { updatePlace } from '../controllers/place/controller.place.update.js';
import { deletePlace } from '../controllers/place/controller.place.delete.js';

const router = express.Router();

router
	.get('/get', getPlaces)
	.post('/post', postPlace)
	.post('/update', updatePlace)
	.delete('/delete', deletePlace);

export default router;
