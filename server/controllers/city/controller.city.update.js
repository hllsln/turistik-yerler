import City from '../../models/model.city.js';

export const updateCity = async (req, res) => {
	const { _id, name } = req.body;

	try {
		const existingCity = await City.findOne({ _id });

		if (!existingCity) {
			throw new Error('City not found.');
		}

		const updatedCity = await City.findOneAndUpdate(
			{ _id },
			{ name: name },
			{ new: true }
		);

		res.status(200).json({
			message: 'City updated successfully',
			city: updatedCity,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
