import { useEffect, useState } from 'react';
import { useData } from '../contexts/Context.Data.jsx';
import axios from 'axios';

const EditUser = (props) => {
	const { user } = props;
	const { _id, email, username } = user;
	const { users, setUsers } = useData();
	const [newEmail, setNewEmail] = useState(email);
	const [newUsername, setNewUsername] = useState(username);

	useEffect(() => {
		setNewEmail(email);
		setNewUsername(username);
	}, [email, username]);

	const updateUser = () => {
		axios({
			method: 'post',
			url: 'http://localhost:5000/data/user/update',
			data: {
				_id,
				email: newEmail,
				username: newUsername,
			},
		})
			.then((result) => {
				console.log(result);

				const updatedUser = result.data.user;
				const index = users.findIndex((usr) => usr._id === _id);
				const updatedUsers = [...users];
				if (index !== -1) {
					updatedUsers[index] = updatedUser;
				}
				setUsers(updatedUsers);
			})
			.catch((error) => {
				console.log(error);
			});
		setNewEmail('');
		setNewUsername('');
	};

	return (
		<div
			className='modal'
			id='edituser'
			tabIndex='-1'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Üyeyi Düzenle</h5>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'></button>
					</div>
					<div className='modal-body'>
						<div className='container-fluid p-3 mx-auto'>
							<div className='row d-flex justify-content-center'>
								<div className=' text-center'>
									<div className='card5'>
										<form
											className='form-card'
											onSubmit={(event) =>
												event.preventDefault()
											}>
											<div className='row justify-content-between text-left mb-2'>
												<div className='form-group col-sm-6 flex-column d-flex'>
													<label className='form-control-label'>
														E-mail
													</label>
													<input
														type='text'
														id='fname'
														name='fname'
														placeholder={email}
														value={newEmail}
														onChange={(event) =>
															setNewEmail(
																event.target
																	.value
															)
														}
													/>
												</div>
												<div className='form-group col-sm-6 flex-column d-flex'>
													<label className='form-control-label'>
														Kullanıcı Adı
													</label>
													<input
														type='text'
														id='fname'
														name='fname'
														placeholder={username}
														value={newUsername}
														onChange={(event) =>
															setNewUsername(
																event.target
																	.value
															)
														}
													/>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'>
							İptal
						</button>
						<button
							type='button'
							className='btn btn-primary'
							data-bs-dismiss='modal'
							onClick={updateUser}>
							Değişiklikleri Kaydet
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default EditUser;
