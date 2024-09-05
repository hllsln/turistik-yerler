import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Link, useNavigate } from 'react-router-dom';
import BackToTop from '../components/BackToTop.jsx';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/Context.Auth.jsx';

const Giris = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const { loginUser, isLoggedIn, authError, setAuthError } = useAuth();

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

		if (id === 'password') {
			setPassword(value);
		}

		setAuthError(null);
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
									<h3 className='mb-4'>Giriş Yap</h3>
								</div>
							</div>
							{authError === 'unknown' && (
								<p className='text-danger'>
									Bir hata oluştu. Lütfen daha sonra tekrar
									deneyin.
								</p>
							)}
							<form
								className='signin-form'
								onSubmit={handleSubmit(() => {
									loginUser({ email, password });
								})}>
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
									{authError === 'Incorrect email.' && (
										<p className='text-danger'>
											E-mail adresi kayıtlı değil.
										</p>
									)}
								</div>
								<div className='form-group mt-4'>
									<input
										type='password'
										className='form-control'
										{...register('password', {
											required: true,
										})}
										placeholder='************'
										id='password'
										onChange={handleChange}
										onKeyDown={(event) => {
											if (event.key === 'Enter') {
												handleSubmit(() => {
													loginUser({
														email,
														password,
													});
												});
											}
										}}
									/>

									<label
										className='form-control-placeholder'
										htmlFor='password'>
										Şifre
									</label>
									{errors.password && (
										<p className='text-danger'>
											Lütfen geçerli bir şifre girin.
										</p>
									)}
									{authError === 'Incorrect password.' && (
										<p className='text-danger'>
											Hatalı şifre.
										</p>
									)}
								</div>
								<div className='form-group'>
									<button
										type='submit'
										className='form-control btn btn-primary rounded submit px-3'>
										Giriş Yap
									</button>
								</div>
								{
									<div className='form-group d-md-flex'>
										<div className='w-50 text-left'></div>
										<div className='w-50 text-md-right'>
											<Link to='/sifreyenile'>
												Şifremi Unuttum
											</Link>
										</div>
									</div>
								}
							</form>
							<p className='text-center'>
								Henüz üye olmadın mı?
								<Link
									className='ms-2'
									data-toggle='tab'
									to='/kayit'>
									Kaydol
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
			<BackToTop />
		</>
	);
};
export default Giris;
