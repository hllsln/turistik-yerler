import express from 'express';

import { getCategories } from '../controllers/category/controller.category.get.js';
import { postCategory } from '../controllers/category/controller.category.post.js';
import { updateCategory } from '../controllers/category/controller.category.update.js';
import { deleteCategory } from '../controllers/category/controller.category.delete.js';

const router = express.Router();

router
	.get('/get', getCategories)
	.post('/post', postCategory)
	.post('/update', updateCategory)
	.delete('/delete', deleteCategory);

export default router;
