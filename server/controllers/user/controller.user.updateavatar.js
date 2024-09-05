import User from '../../models/model.user.js';

const updateAvatar = async (req, res) => {
	console.log(req.body);

	let userId;
	let imgname;

	if (req.body.userId) {
		userId = JSON.parse(req.body.userId);
	}

	if (req.file) {
		imgname = req.file.filename;
	}

	console.log(userId, imgname);

	await User.findOneAndUpdate(
		{ _id: userId },
		{ avatar: imgname },
		{ new: true }
	)
		.then((result) => {
			res.status(200).json({
				message: 'User updated succesfully.',
				user: result,
			});
		})
		.catch((error) => res.json(error));
};

export default updateAvatar;
