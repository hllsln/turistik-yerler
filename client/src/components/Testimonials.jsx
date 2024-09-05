const Testimonials = () => {
	return (
		<div className='container-xl testimonials'>
			<div className='row'>
				<div className='col-lg-8 mx-auto'>
					<h2>Kullanıcılarımız Ne Düşünüyor?</h2>
					<div
						id='myCarousel'
						className='carousel slide'
						data-ride='carousel'>
						<ol className='carousel-indicators'>
							<li
								data-target='#myCarousel'
								data-slide-to='0'
								className='active'></li>
							<li
								data-target='#myCarousel'
								data-slide-to='1'></li>
							<li
								data-target='#myCarousel'
								data-slide-to='2'></li>
						</ol>

						<div className='carousel-inner'>
							<div className='carousel-item active'>
								<div className='img-box'>
									<img
										src='src/assets/images/elder.jpg'
										alt=''
									/>
								</div>
								<p className='testimonial'>
									Bu siteyi kullanmaya başladığımdan beri
									hayatımda gerçek bir değişim yaşandı. Emekli
									olunca gezme isteğim hiç bitmedi ama nereden
									başlayacağımı bilemiyordum. Yıllar önce
									eşimi kaybettiğimden beri eve tıkılıp
									kalmıştım. Ama etrafımdaki güzellikleri
									keşfetmek için şahane bir rehber buldum.
									Artık her gün bir başka yerdeymişim gibi
									hissediyorum, tüm dünyayı keşfetmek için
									sabırsızlanıyorum.
								</p>
								<p className='overview'>
									<b>Hatice Solmaz</b>, 56
								</p>
							</div>
							<div className='carousel-item'>
								<div className='img-box'>
									<img
										src='src/assets/images/boy.jpg'
										alt=''
									/>
								</div>
								<p className='testimonial'>
									Benim için hayat sıkıcıydı, ta ki bu
									platformu keşfedene kadar. Şimdi her gün
									yeni bir macera yaşıyorum. Daha önce hayal
									bile edemeyeceğim yerlere gidebiliyor ve
									farklı kültürleri deneyimleyebiliyorum. Bu
									platform, hayatımı değiştirdi ve benim için
									bir keşif aracı haline geldi.
								</p>
								<p className='overview'>
									<b>Erdem Dinçer</b>, 19
								</p>
							</div>
							<div className='carousel-item'>
								<div className='img-box'>
									<img
										src='src/assets/images/girl.jpg'
										alt=''
									/>
								</div>
								<p className='testimonial'>
									İş hayatından sıkıldıktan sonra bu platformu
									bulmak gerçek bir kurtuluş oldu! Artık
									kafama göre gezebiliyor, yeni yerler
									keşfedebiliyorum. Seyahat etmek benim için
									özgürlüğün ve mutluluğun simgesi haline
									geldi. Artık hayatımı dolu dolu yaşıyorum!
								</p>
								<p className='overview'>
									<b>Buket Doğan</b>, 28
								</p>
							</div>
						</div>

						<a
							className='carousel-control-prev'
							href='#myCarousel'
							data-slide='prev'>
							<i className='fa fa-angle-left'></i>
						</a>
						<a
							className='carousel-control-next'
							href='#myCarousel'
							data-slide='next'>
							<i className='fa fa-angle-right'></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Testimonials;
