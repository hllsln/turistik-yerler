import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import BackToTop from '../components/BackToTop.jsx';

const Hakkinda = () => {
	return (
		<>
			<div className='main'>
				<Navbar />
				<div className='container d-flex flex-wrap justify-content-between mt-5'>
					<h2 className='col-12'>Hoş geldin gezgin! </h2>
					<div className='col-6'>
						<p>
							Bu platform tam senlik! Ülkenin dört bir yanındaki
							popüler turistik mekanları keşfetmek ve deneyimlemek
							için buradayız. Seyahat planlarını yaparken sana
							rehberlik etmek ve unutulmaz anılar biriktirmene
							yardımcı olmak istiyoruz.
						</p>
						<p>
							Burada sadece turistik mekanları keşfetmekle
							kalmıyor, aynı zamanda bu mekanları canlı olarak
							deneyimlemeni sağlıyoruz. Canlı tur özelliğimiz
							sayesinde, mekanları gerçek zamanlı olarak
							gezebilir, tarihlerini öğrenebilir ve sanki
							oradaymış gibi hissedebilirsin. Seyahat planlarını
							yaparken daha bilinçli kararlar almana ve daha
							keyifli bir gezi deneyimi yaşamana yardımcı
							oluyoruz.
						</p>
						<p>
							Amacımız, seyahat etmeyi seven herkesin seyahat
							deneyimini zenginleştirmek. Size yeni bir turizm
							deneyimi sunmayı ve seyahatlerinizi daha bilinçli
							hale getirmeyi amaçlıyoruz. Ülke üzerindeki popüler
							turistik mekanları keşfetme ve gerçek zamanlı olarak
							deneyimleme fırsatı sunarak, unutulmaz bir macera
							yaşamanızı hedefliyoruz.
						</p>
						<p>
							Bize katıl ve çevrendeki turistik mekanları
							keşfetmenin heyecanını bizimle yaşa! Hemen bir
							profil oluştur ve seyahat listeni yapmaya başla.
							Unutma, her yolculuk bir maceradır ve bu macerada
							seninle birlikte olmak için sabırsızlanıyoruz!
						</p>
					</div>
					<div className='col-6'>
						<img
							className='col-12'
							src='src/assets/images/about.jpg'
							alt=''
						/>
					</div>
				</div>
			</div>
			<Footer />
			<BackToTop />
		</>
	);
};
export default Hakkinda;
