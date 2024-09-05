import City from '../../models/model.city.js';

export const deleteCity = async (req, res) => {
	const { _id } = req.body;

	try {
		const deletedCity = await City.findOneAndDelete({ _id });

		if (!deletedCity) {
			return res.status(404).json({
				error: 'City not found.',
			});
		}

		res.status(200).json({
			message: 'City deleted successfully.',
			city: deletedCity,
		});
	} catch (error) {
		res.status(400).json({
			error: error.message,
		});
	}
};
