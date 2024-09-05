import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop.jsx';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../contexts/Context.Auth.jsx';

const Kayit = () => {
	const navigate = useNavigate();
	const { registerUser, isLoggedIn, authError, setAuthError } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/');
		}
	});
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
									<h3 className='mb-4'>Kaydol</h3>
								</div>
							</div>
							<form
								className='signin-form'
								onSubmit={handleSubmit((data) => {
									registerUser(data);
								})}
								onKeyDown={(event) => {
									if (event.key === 'Enter') {
										handleSubmit((data) => {
											registerUser(data);
										});
									}
								}}>
								{authError === 'unknown' && (
									<p className='text-danger'>
										Bir hata oluştu. Lütfen daha sonra
										tekrar deneyin.
									</p>
								)}
								<div className='form-group mt-3'>
									<input
										type='text'
										{...register('username', {
											required: true,
										})}
										className='form-control'
										placeholder='kullaniciadi'
										onChange={() => setAuthError(null)}
									/>
									<label
										className='form-control-placeholder'
										htmlFor='username'>
										Kullanıcı Adı
									</label>
									{errors.username && (
										<p className='text-danger'>
											Lütfen geçerli bir kullanıcı adı
											girin.
										</p>
									)}
									{authError === 'username' && (
										<p className='text-danger'>
											Kullanıcı adı zaten alınmış.
										</p>
									)}
								</div>
								<div className='form-group mt-4'>
									<input
										type='text'
										{...register('email', {
											required: true,
											pattern: /^\S+@\S+$/i,
										})}
										className='form-control'
										placeholder='isim@mail.com'
										id='email'
										onChange={() => setAuthError(null)}
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
									{authError === 'email' && (
										<p className='text-danger'>
											E-posta adresi zaten alınmış.
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
								</div>
								<div className='form-group'>
									<button
										type='submit'
										className='form-control btn btn-primary rounded submit px-3'>
										Kaydol
									</button>
								</div>
							</form>
							<p className='text-center'>
								Zaten üye misin?
								<Link
									className='ms-2'
									data-toggle='tab'
									to='/giris'>
									Giriş yap
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
export default Kayit;
