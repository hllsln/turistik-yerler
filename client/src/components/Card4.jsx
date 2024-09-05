import { useEffect, useState } from 'react';
import { useData } from '../contexts/Context.Data.jsx';
import { Link } from 'react-router-dom';

const Card4 = (props) => {
	const { place } = props;
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

			setCategoryName(foundCategory.name);
			setCityName(foundCity.name);
		}
	});

	return (
		<div className='card card-blog col-4'>
			<div className='card-image'>
				<a href='#'>
					<img
						className='img'
						src={`src/assets/images/places/${_id}.jpg`}
					/>
				</a>
				<div className='ripple-cont'></div>
			</div>
			<div className='table'>
				<h6 className='category text-success'>{categoryName}</h6>

				<h4 className='card-caption'>
					<a href='#'>{name}</a>
				</h4>
				<p className='card-description'>
					{info.substr(0, 150) + '...'}
				</p>
				<div className='ftr'>
					<h6 className='stats text-info'>{cityName}</h6>
				</div>
				<Link
					to={`/yer/${_id}`}
					state={place}
					role='button'
					className='btn btn-sm btn-light btn-outline-secondary mb-2'>
					Daha Fazla Bilgi
				</Link>
			</div>
		</div>
	);
};
export default Card4;
