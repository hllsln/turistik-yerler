const Footer = () => {
	return (
		<footer className='footer-basic d-flex flex-wrap justify-content-between align-items-center px-2'>
			<div className=''>
				<div className='social'>
					<a
						href='https://www.instagram.com'
						target='_blank'>
						<img
							className='icon'
							src='src/assets/images/instagram.png'></img>
					</a>
					<a
						href='https://www.twitter.com'
						target='_blank'>
						<img
							className='icon'
							src='src/assets/images/twitter.png'></img>
					</a>
					<a
						href='https://www.facebook.com'
						target='_blank'>
						<img
							className='icon'
							src='src/assets/images/facebook.png'></img>
					</a>
				</div>
			</div>

			<div className=''>
				<ul className='list-inline'>
					<li className='list-inline-item'>
						<a href='#'>Sıkça Sorulan Sorular (SSS)</a>
					</li>
					<li className='list-inline-item'>
						<a href='#'>Kullanım Şartları</a>
					</li>
					<li className='list-inline-item'>
						<a href='#'>Gizlilik Politikası</a>
					</li>
					<li className='list-inline-item'>
						<p className='copyright'>Turistik Yerler © 2024</p>
					</li>
				</ul>
			</div>
		</footer>
	);
};
export default Footer;
