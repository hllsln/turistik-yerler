import { Link } from 'react-router-dom';

const Card1 = (props) => {
	const { place } = props;
	const { _id, name, info } = place;

	return (
		<div className='col-sm-12 col-lg-4 mb-3'>
			<div className='card card1 h-100'>
				<img
					src={`src/assets/images/places/${_id}.jpg`}
					className='card-img-top'
					alt='...'
				/>
				<div className='card-body'>
					<h5 className='card-title'>{name}</h5>
					<p className='card-text'>{info.substr(0, 300) + '...'}</p>
				</div>
				<div className='card-footer text-end'>
					<Link
						className='btn btn-outline-secondary'
						to={`/yer/${_id}`}
						state={place}>
						Daha Fazla Bilgi
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Card1;
