import User from '../../models/model.user.js';
import bcrypt from 'bcrypt';

export const updateUser = async (req, res) => {
	const { _id, email, username, password } = req.body;

	try {
		const existingUser = await User.findOne({ _id });

		if (!existingUser) {
			throw new Error('User not found.');
		}

		const updatedData = {
			email: email,
			username: username,
		};

		if (password) {
			const hashedPassword = await bcrypt.hash(password, 10);
			updatedData.password = hashedPassword;
		}

		const updatedUser = await User.findOneAndUpdate({ _id }, updatedData, {
			new: true,
		});

		res.status(200).json({
			message: 'User updated successfully',
			user: updatedUser,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
