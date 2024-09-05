import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar.jsx';
import Search from './components/Search.jsx';
import Footer from './components/Footer.jsx';
import Card1 from './components/Card1.jsx';
import Card2 from './components/Card2.jsx';
import Card3 from './components/Card3.jsx';
import Testimonials from './components/Testimonials.jsx';
import BackToTop from './components/BackToTop.jsx';
import { useData } from './contexts/Context.Data.jsx';

const App = () => {
	const { places } = useData();

	return (
		<>
			<div className='main-home'>
				<div className='header d-flex flex-column align-items-center justify-content-start'>
					<Navbar />

					<h1 className='header-title-first mt-5 pt-5'>Dünya</h1>
					<h1 className='header-title-second ms-5 ps-5'>
						Seni bekliyor
					</h1>
					<Search />
				</div>
				{places.length > 0 && (
					<div className='container d-flex flex-wrap justify-content-around mb-3 pb-3'>
						<Card1 place={places[0]} />
						<Card2 place={places[11]} />
						<Card2 place={places[9]} />
						<Card1 place={places[3]} />
					</div>
					
				)}

				<Testimonials />
				<div className='bottom d-flex justify-content-center align-items-start'>
					<div className='container'>
						<h2 className='text-center mb-5'>Popüler Şehirler</h2>
						<div className='d-flex flex-wrap justify-content-evenly'>
							<Card3 title='İSTANBUL' />
							<Card3 title='İZMİR' />
							<Card3 title='DENİZLİ' />
							<Card3 title='MUĞLA' />
							<Card3 title='ANTALYA' />
						</div>
					</div>
				</div>
			</div>

			<Footer />

			<BackToTop />
		</>
	);
};
export default App;
