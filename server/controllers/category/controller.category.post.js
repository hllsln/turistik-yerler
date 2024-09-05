import Category from '../../models/model.category.js';

export const postCategory = async (req, res) => {
	const { name } = req.body;

	try {
		const existingCategory = await Category.findOne({ name: name });

		if (existingCategory) {
			console.log(existingCategory);
			throw new Error('Category already exists.');
		}

		const newCategory = new Category({
			name: name,
		});

		const savedCategory = await newCategory.save();
		res.json({
			message: 'Category added successfully.',
			category: savedCategory,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
