import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import BackToTop from '../components/BackToTop.jsx';

const Hata = () => {
	<>
		<div className='main'>
			<Navbar />
			<div className='container d-flex flex-wrap justify-content-between mt-5'>
				<h2 className='col-12'>Yer </h2>Sayfa bulunamadı.
			</div>
		</div>
		<Footer />
		<BackToTop />
	</>;
};
export default Hata;
