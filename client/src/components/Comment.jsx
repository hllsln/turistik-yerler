import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useData } from '../contexts/Context.Data.jsx';

const Comment = (props) => {
	const { comment } = props;
	const { postedBy, placeId, content, datePosted } = comment;
	const { users } = useData();
	const [user, setUser] = useState({});

	useEffect(() => {
		const findUser = () => {
			const foundUser = users.find((usr) => usr._id === postedBy);
			if (foundUser) {
				setUser(foundUser);
			}
		};

		findUser();
	}, [user]);

	return (
		<div className='bg-white p-2'>
			<div className='d-flex flex-row user-info'>
				<img
					className='rounded-circle'
					src={
						user.avatar
							? `http://localhost:5000/uploads/${user.avatar}`
							: `http://localhost:5000/uploads/placeholder-avatar.jpg`
					}
					width='45'
					height='45'
					style={{ objectFit: 'cover' }}
				/>
				<div className='d-flex flex-column justify-content-start ml-2'>
					<span className='d-block font-weight-bold name'>
						{user && user.username}
					</span>
					<span className='date text-black-50'>
						{dayjs(datePosted).format('DD/MM/YYYY')}
					</span>
				</div>
			</div>
			<div className='mt-2'>
				<p className='comment-text'>{content}</p>
			</div>
		</div>
	);
};
export default Comment;
