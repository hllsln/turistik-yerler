import Comment from '../../models/model.comment.js';

export const postComment = async (req, res) => {
	const { postedBy, placeId, content } = req.body;

	try {
		const datePosted = new Date();

		const newComment = new Comment({
			postedBy,
			placeId,
			content,
			datePosted,
		});

		const savedComment = await newComment.save();
		res.json({
			message: 'Comment added successfully.',
			comment: savedComment,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
