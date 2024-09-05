import Category from '../../models/model.category.js';

export const deleteCategory = async (req, res) => {
	const { _id } = req.body;

	try {
		const deletedCategory = await Category.findOneAndDelete({ _id });

		if (!deletedCategory) {
			return res.status(404).json({
				error: 'Category not found.',
			});
		}

		res.status(200).json({
			message: 'Category deleted successfully.',
			category: deletedCategory,
		});
	} catch (error) {
		res.status(400).json({
			error: error.message,
		});
	}
};
