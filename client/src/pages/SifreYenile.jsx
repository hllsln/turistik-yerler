import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom';
import BackToTop from '../components/BackToTop.jsx';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/Context.Auth.jsx';
import axios from 'axios';

const SifreYenile = () => {
	const navigate = useNavigate();
	const {
		register,
		formState: { errors },
	} = useForm();
	const [email, setEmail] = useState();
	const { isLoggedIn } = useAuth();
	const [error, setError] = useState(null);
	const [message, setMessage] = useState(null);

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/');
		}
	});

	const handleChange = (event) => {
		const { id, value } = event.target;

		if (id === 'email') {
			setEmail(value);
		}

		setError(false);
	};

	const forgotPassword = () => {
		axios({
			method: 'post',
			url: 'http://localhost:5000/auth/forgotpassword',
			data: {
				email,
			},
		})
			.then((result) => {
				setMessage(result.data.message);
			})
			.catch((error) => console.log(error));

		setEmail('');
	};

	return (
		<>
			<div className='main'>
				<Navbar />
				<div className='sign col-md-7 col-lg-5 container justify-content-center mt-4'>
					<div className='wrap'>
						<div className='img'></div>
						<div className='login-wrap p-4 p-md-5'>
							<div className='d-flex'>
								<div className='w-100'>
									<h3 className='mb-4'>
										Şifrenizi Mi Unuttunuz?
									</h3>
								</div>
							</div>
							<div className='pb-2'>
								{error && (
									<p className='text-danger'>
										Bir hata oluştu. Lütfen daha sonra
										tekrar deneyin.
									</p>
								)}
								{message && (
									<p className='text-info'>{message}</p>
								)}
							</div>

							<form className='signin-form'>
								<div className='form-group mt-3'>
									<input
										type='text'
										{...register('email', {
											required: true,
											pattern: /^\S+@\S+$/i,
										})}
										className='form-control'
										placeholder='isim@mail.com'
										id='email'
										value={email}
										onChange={handleChange}
									/>

									<label
										className='form-control-placeholder'
										htmlFor='username'>
										E-mail
									</label>
									{errors.email && (
										<p className='text-danger'>
											Lütfen geçerli bir e-mail adresi
											girin.
										</p>
									)}
								</div>

								<div className='form-group'>
									<button
										type='button'
										className='form-control btn btn-primary rounded submit px-3'
										onClick={(event) => {
											event.preventDefault();
											forgotPassword();
										}}>
										Şifremi Yenile
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<Footer />
			<BackToTop />
		</>
	);
};
export default SifreYenile;
