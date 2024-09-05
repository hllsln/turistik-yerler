import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const handleKeyDown = (event) => {
		if (input && event.key === 'Enter' && input !== '') {
			navigate('/yerler', {
				state: { name: input },
			});
		}
	};

	return (
		<div className='container my-5 py-5'>
			<div className='row height d-flex justify-content-center align-items-center'>
				<div className='col-md-11'>
					<div className='form'>
						<img
							src='src/assets/images/search.png'
							className='fa fa-search'></img>

						<input
							type='text'
							className='form-control form-input'
							placeholder='Turistik yer ara...'
							onChange={(event) => setInput(event.target.value)}
							onKeyDown={handleKeyDown}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Search;
