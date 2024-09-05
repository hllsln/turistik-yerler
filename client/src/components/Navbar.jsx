import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/Context.Auth.jsx';

const Navbar = () => {
	const { currentUser, isLoggedIn, logoutUser } = useAuth();

	return (
		<>
			<nav className='navbar navbar-expand-lg p-1 col-12'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarTogglerDemo03'
						aria-controls='navbarTogglerDemo03'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<Link to='/'>
						<img
							className='navbar-brand'
							src='src/assets/images/logo.png'
							height='50px'
							draggable='false'
						/>
					</Link>

					<div
						className='collapse navbar-collapse'
						id='navbarTogglerDemo03'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link
									className='nav-link active'
									aria-current='page'
									to='/yerler'
									draggable='false'>
									Turistik Yerler
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link active'
									aria-current='page'
									to='/hakkinda'
									draggable='false'>
									Hakkında
								</Link>
							</li>
							{isLoggedIn && (
								<li className='nav-item'>
									<Link
										className='nav-link active'
										aria-current='page'
										to='/profil'
										draggable='false'>
										Profil
									</Link>
								</li>
							)}
							{currentUser.username === 'admin' && (
								<li className='nav-item'>
									<Link
										className='nav-link active'
										aria-current='page'
										to='/panel'
										draggable='false'>
										Admin Paneli
									</Link>
								</li>
							)}
						</ul>
						<hr className='my-1' />
						{isLoggedIn ? (
							<div>
								<ul className='navbar-nav mb-2 mb-lg-0'>
									<p className='pt-2 pe-2 m-0'>{`Hoş geldin ${currentUser.username}!`}</p>

									<li className='nav-item nav-btn m-1 btn-sm'>
										<button
											className='nav-link active'
											aria-current='page'
											draggable='false'
											onClick={logoutUser}>
											Çıkış Yap
										</button>
									</li>
								</ul>
							</div>
						) : (
							<ul className='navbar-nav mb-2 mb-lg-0'>
								<li className='nav-item nav-btn m-1'>
									<Link
										className='nav-link active'
										aria-current='page'
										to='/giris'
										draggable='false'>
										Giriş Yap
									</Link>
								</li>

								<li className='nav-item nav-btn m-1'>
									<Link
										className='nav-link active'
										aria-current='page'
										to='/kayit'
										draggable='false'>
										Kaydol
									</Link>
								</li>
							</ul>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
