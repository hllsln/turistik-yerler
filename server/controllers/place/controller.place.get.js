import Place from '../../models/model.place.js';

export const getPlaces = async (req, res) => {
	try {
		const places = await Place.find();
		res.json(places);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
