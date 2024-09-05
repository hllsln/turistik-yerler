import City from '../../models/model.city.js';

export const postCity = async (req, res) => {
	const { name } = req.body;

	try {
		const existingCity = await City.findOne({ name: name });

		if (existingCity) {
			console.log(existingCity);
			throw new Error('City already exists.');
		}

		const newCity = new City({
			name: name,
		});

		const savedCity = await newCity.save();
		res.json({
			message: 'City added successfully.',
			city: savedCity,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
