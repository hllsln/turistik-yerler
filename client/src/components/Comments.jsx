import Comment from './Comment.jsx';
import { useAuth } from '../contexts/Context.Auth.jsx';
import { useData } from '../contexts/Context.Data.jsx';
import { useState } from 'react';
import axios from 'axios';

const Comments = (props) => {
	const { place } = props;
	const { currentUser, isLoggedIn } = useAuth();
	const { comments, setComments } = useData();
	const [input, setInput] = useState('');

	const postComment = () => {
		if (!input || input === '') {
			return;
		}

		const data = {
			postedBy: currentUser._id,
			placeId: place._id,
			content: input,
		};

		axios({
			method: 'post',
			url: 'http://localhost:5000/data/comment/post',
			data,
		})
			.then((result) => {
				const postedComment = result.data.comment;
				setComments((prev) => {
					return [...prev, postedComment];
				});
			})
			.catch((error) => console.log(error));

		setInput('');
	};

	return (
		<div className='container my-5'>
			<div className='d-flex justify-content-center row'>
				<div className='col-md-8'>
					<div className='d-flex flex-column comment-section'>
						{comments &&
							comments.map((cmt, index) => {
								if (cmt.placeId === place._id) {
									return (
										<Comment
											key={index}
											comment={cmt}
										/>
									);
								}
							})}

						{isLoggedIn && (
							<div className='bg-light p-2'>
								<div className='d-flex flex-row align-items-start'>
									<img
										className='rounded-circle'
										src={
											currentUser.avatar
												? `http://localhost:5000/uploads/${currentUser.avatar}`
												: `http://localhost:5000/uploads/placeholder-avatar.jpg`
										}
										height='45'
										width='45'
										style={{ objectFit: 'cover' }}
									/>
									<textarea
										className='form-control ml-1 shadow-none textarea'
										placeholder='Bu yer hakkında ne düşünüyorsun?'
										rows={5}
										value={input}
										onChange={(event) =>
											setInput(event.target.value)
										}></textarea>
								</div>
								<div className='mt-2 text-right'>
									<button
										className='btn btn-primary btn-sm shadow-none'
										type='button'
										onClick={postComment}>
										Yorum Gönder
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Comments;
