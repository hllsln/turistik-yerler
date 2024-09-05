import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import BackToTop from '../components/BackToTop.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useData } from '../contexts/Context.Data.jsx';
import Comments from '../components/Comments.jsx';

const Yer = () => {
	const { state: place } = useLocation();
	const { _id, name, city, category, info, link } = place;
	const { categories, cities } = useData();
	const [categoryName, setCategoryName] = useState();
	const [cityName, setCityName] = useState();

	useEffect(() => {
		if (place && categories && cities) {
			const foundCategory = categories.find(
				(ctg) => ctg._id === category
			);
			const foundCity = cities.find((cty) => cty._id === city);

			if (foundCategory) {
				setCategoryName(foundCategory.name);
			}

			if (foundCity) {
				setCityName(foundCity.name);
			}
		}
	}, [place, categories, cities, category, city]);

	return (
		<>
			<div className='main '>
				<Navbar />

				<div className='container-fluid g-0'>
					<img
						style={{ maxHeight: '400px', objectFit: 'cover' }}
						className='img-fluid w-100 min-vh-25 min-vh-md-50 mb-n7'
						src={`src/assets/images/places/${_id}.jpg`}
					/>
				</div>
				<div className='container col-8 d-flex justify-content-between mt-3'>
					<div className='d-flex'>
						<h6 className='me-2'>Kategori: </h6>
						<h6 className='text-success'>{categoryName}</h6>
					</div>
					<div className='d-flex'>
						<h6 className='me-2'>Şehir: </h6>
						<h6 className='text-info'>{cityName}</h6>
					</div>
				</div>
				<div className='container d-flex flex-wrap justify-content-center mb-5 pb-5'>
					<h2 className='col-12'>{name} </h2>
					<p className='col-9 lead text-secondary '>{info}</p>

					<div className='col-9 mt-5'>
						<h4>Önizleme</h4>
						<iframe
							src={link}
							width='960'
							height='720'
							style={{ border: 0 }}
							allowfullscreen='true'
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'></iframe>
					</div>
				</div>
				<Comments place={place} />
			</div>
			<BackToTop />
			<Footer />
		</>
	);
};
export default Yer;
