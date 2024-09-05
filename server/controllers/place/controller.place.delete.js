import Place from '../../models/model.place.js';

export const deletePlace = async (req, res) => {
	const { _id } = req.body;

	try {
		const deletedPlace = await Place.findOneAndDelete({ _id });

		if (!deletedPlace) {
			return res.status(404).json({
				error: 'Place not found.',
			});
		}

		res.status(200).json({
			message: 'Place deleted successfully.',
			place: deletedPlace,
		});
	} catch (error) {
		res.status(400).json({
			error: error.message,
		});
	}
};
