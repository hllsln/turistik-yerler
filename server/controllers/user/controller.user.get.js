import User from '../../models/model.user.js';

export const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
