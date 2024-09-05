import Place from '../../models/model.place.js';

export const postPlace = async (req, res) => {
	const { name, city, category, info, link } = req.body;

	try {
		const existingPlace = await Place.findOne({ name: name });

		if (existingPlace) {
			throw new Error('City already exists.');
		}

		const newPlace = new Place({
			name,
			city,
			category,
			info,
			link,
		});

		const savedPlace = await newPlace.save();

		res.json({
			message: 'Place added successfully.',
			place: savedPlace,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
