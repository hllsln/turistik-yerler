import Comment from '../../models/model.comment.js';

export const getComments = async (req, res) => {
	try {
		const foundComments = await Comment.find({});
		res.json(foundComments);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
