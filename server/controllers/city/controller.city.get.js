import City from '../../models/model.city.js';

export const getCities = async (req, res) => {
	try {
		const cities = await City.find();
		res.json(cities);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
