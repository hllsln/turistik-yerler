import { Link } from 'react-router-dom';

const Card2 = (props) => {
	const { place } = props;
	const { _id, name, info } = place;
	return (
		<div className='col-sm-12 col-lg-8 mb-3'>
			<div className='card card2 h-100'>
				<img
					src={`src/assets/images/places/${_id}.jpg`}
					className='card-img-top h-100'
				/>
				<div className='card-img-overlay text-white d-flex flex-column justify-content-center align-items-start m-5'>
					<h4>{name}</h4>
					<p className='card-text'>{info}</p>

					<Link
						className='btn btn-light btn-outline-secondary'
						to={`/yer/${_id}`}
						state={place}>
						Daha Fazla Bilgi
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Card2;
