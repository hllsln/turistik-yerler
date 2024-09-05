const Card3 = (props) => {
	const { title } = props;
	return (
		<div className='card card3 text-bg-light mb-4'>
			<div className='card-body my-3'>
				<h5 className='card-title m-0'>{title}</h5>
			</div>
		</div>
	);
};
export default Card3;
