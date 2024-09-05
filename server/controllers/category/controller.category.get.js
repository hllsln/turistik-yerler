import Category from '../../models/model.category.js';

export const getCategories = async (req, res) => {
	try {
		const categories = await Category.find();
		res.json(categories);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
