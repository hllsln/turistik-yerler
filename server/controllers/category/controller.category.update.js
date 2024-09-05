import Category from '../../models/model.category.js';

export const updateCategory = async (req, res) => {
	const { _id, name } = req.body;

	try {
		const existingCategory = await Category.findOne({ _id });

		if (!existingCategory) {
			throw new Error('Category not found.');
		}

		const updatedCategory = await Category.findOneAndUpdate(
			{ _id },
			{ name: name },
			{ new: true }
		);

		res.status(200).json({
			message: 'Category updated successfully',
			category: updatedCategory,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
