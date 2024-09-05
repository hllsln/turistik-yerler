import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useAuth } from '../contexts/Context.Auth.jsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios';
import { useData } from '../contexts/Context.Data.jsx';

const Profil = () => {
	const { currentUser, setCurrentUser, isLoggedIn } = useAuth();
	const { users, setUsers } = useData();
	const navigate = useNavigate();
	const { _id, username, email, membershipDate } = currentUser;
	const [isEditing, setIsEditing] = useState(false);
	const [newUsername, setNewUsername] = useState(username);
	const [newEmail, setNewEmail] = useState(email);
	const [newPassword, setNewPassword] = useState('');

	useEffect(() => {
		if (!isLoggedIn) {
			navigate('/');
		}
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (name === 'username') {
			setNewUsername(value);
		} else if (name === 'email') {
			setNewEmail(value);
		} else if (name === 'password') {
			setNewPassword(value);
		}
	};

	const updateProfile = () => {
		let data = {
			_id,
		};

		if (newUsername !== username) {
			data.username = newUsername;
		}
		if (newEmail !== email) {
			data.email = newEmail;
		}
		if (newPassword && newPassword !== '') {
			data.password = newPassword;
		}

		axios({
			method: 'post',
			url: 'http://localhost:5000/data/user/update',
			data,
		})
			.then((result) => {
				if (result.data.user) {
					const updatedUser = result.data.user;
					sessionStorage.setItem('user', JSON.stringify(updatedUser));
					setCurrentUser(updatedUser);
					const updatedUsers = users.filter(
						(usr) => usr._id !== updatedUser._id
					);
					updatedUsers.push(updatedUser);
					setUsers(updatedUsers);
					setIsEditing(false);
				}
				console.log(result);
			})
			.catch((error) => console.log(error));
	};

	const updateAvatar = (event) => {
		const file = event.target.files[0];

		if (file) {
			const formData = new FormData();
			formData.append('image', file);
			formData.append('userId', JSON.stringify(_id));

			axios({
				method: 'post',
				url: 'http://localhost:5000/data/user/updateavatar',
				data: formData,
			})
				.then((result) => {
					console.log(result);
					if (result.data.user) {
						const updatedUser = result.data.user;
						sessionStorage.setItem(
							'user',
							JSON.stringify(updatedUser)
						);
						setCurrentUser(updatedUser);
						const updatedUsers = users.filter(
							(usr) => usr._id !== updatedUser._id
						);
						updatedUsers.push(updatedUser);
						setUsers(updatedUsers);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<>
			<div className='main'>
				<Navbar />
				<div className='container d-flex flex-wrap justify-content-between mt-5'>
					<div className='container emp-profile'>
						<div>
							<div className='row'>
								<div className='col-md-4'>
									<div className='profile-img'>
										<img
											src={
												currentUser.avatar
													? `http://localhost:5000/uploads/${currentUser.avatar}`
													: `http://localhost:5000/uploads/placeholder-avatar.jpg`
											}
											alt=''
										/>
										<div className='file btn btn-lg btn-primary'>
											Profil Resmini Değiştir
											<input
												type='file'
												accept='.jpg, .jpeg, .png'
												name='image'
												onChange={(event) => {
													updateAvatar(event);
												}}
											/>
										</div>
									</div>
								</div>
								<div className='col-md-6'>
									<div className='profile-head'>
										<h5>{username}</h5>

										<ul
											className='nav nav-tabs'
											id='myTab'
											role='tablist'>
											<li className='nav-item'>
												<a
													className='nav-link active'
													id='home-tab'
													data-toggle='tab'
													href='#home'
													role='tab'
													aria-controls='home'
													aria-selected='true'>
													Hakkında
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className='col-md-2'>
									{isEditing ? (
										<button
											className='btn btn-sm btn-outline-secondary'
											name='btnAddMore'
											onClick={updateProfile}>
											Kaydet
										</button>
									) : (
										<button
											className='btn btn-sm btn-outline-secondary'
											name='btnAddMore'
											onClick={() => setIsEditing(true)}>
											Profili Düzenle
										</button>
									)}
								</div>
							</div>
							<div className='row'>
								<div className='col-md-4'>
									<div className='profile-work'></div>
								</div>
								<div className='col-md-8'>
									<div
										className='tab-content profile-tab'
										id='myTabContent'>
										<div
											className='tab-pane fade show active'
											id='home'
											role='tabpanel'
											aria-labelledby='home-tab'>
											<div className='row'>
												<div className='col-md-6'>
													<label>Kullanıcı Adı</label>
												</div>
												{isEditing ? (
													<div className='col-md-6'>
														<input
															type='text'
															name='username'
															placeholder={
																username
															}
															value={newUsername}
															onChange={(event) =>
																handleChange(
																	event
																)
															}
														/>
													</div>
												) : (
													<div className='col-md-6'>
														<p>{username}</p>
													</div>
												)}
											</div>

											<div className='row'>
												<div className='col-md-6'>
													<label>Email</label>
												</div>
												{isEditing ? (
													<div className='col-md-6'>
														<input
															type='text'
															name='email'
															placeholder={email}
															value={newEmail}
															onChange={(event) =>
																handleChange(
																	event
																)
															}
														/>
													</div>
												) : (
													<div className='col-md-6'>
														<p>{email}</p>
													</div>
												)}
											</div>
											{isEditing && (
												<div className='row'>
													<div className='col-md-6'>
														<label>Şifre</label>
													</div>
													<div className='col-md-6'>
														<input
															type='password'
															name='password'
															placeholder='******'
															value={newPassword}
															onChange={(event) =>
																handleChange(
																	event
																)
															}
														/>
													</div>
												</div>
											)}
											<div className='row'>
												<div className='col-md-6'>
													<label>Üyelik Tarihi</label>
												</div>
												<div className='col-md-6'>
													<p>
														{dayjs(
															membershipDate
														).format('DD/MM/YYYY')}
													</p>
												</div>
											</div>
										</div>
										<div
											className='tab-pane fade'
											id='profile'
											role='tabpanel'
											aria-labelledby='profile-tab'>
											<div className='row'>
												<div className='col-md-6'>
													<label>Experience</label>
												</div>
												<div className='col-md-6'>
													<p>Expert</p>
												</div>
											</div>

											<div className='row'>
												<div className='col-md-12'>
													<label>Your Bio</label>
													<br />
													<p>
														Your detail description
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
export default Profil;
