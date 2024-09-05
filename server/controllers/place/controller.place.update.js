import Place from '../../models/model.place.js';

export const updatePlace = async (req, res) => {
	const { _id, name, city, category, info, link } = req.body;

	try {
		if (!_id) {
			throw new Error('_id is required for updating the place.');
		}

		const existingPlace = await Place.findById(_id);
		if (!existingPlace) {
			throw new Error('Place not found.');
		}

		if (name) existingPlace.name = name;
		if (city) existingPlace.city = city;
		if (category) existingPlace.category = category;
		if (info) existingPlace.info = info;
		if (link) existingPlace.link = link;

		const updatedPlace = await existingPlace.save();

		res.status(200).json({
			message: 'Place updated successfully',
			place: updatedPlace,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
