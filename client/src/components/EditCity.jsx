import { useEffect, useState } from 'react';
import { useData } from '../contexts/Context.Data.jsx';
import axios from 'axios';

const EditCity = (props) => {
	const { city } = props;
	const { _id, name } = city;
	const [cityName, setCityName] = useState(name);
	const { cities, setCities } = useData();

	useEffect(() => {
		setCityName(name);
	}, [name]);

	const updateCity = () => {
		axios({
			method: 'post',
			url: 'http://localhost:5000/data/city/update',
			data: {
				_id,
				name: cityName,
			},
		})
			.then((result) => {
				console.log(result);

				const updatedCity = result.data.city;
				const index = cities.findIndex((cty) => cty._id === _id);
				const updatedCities = [...cities];
				updatedCities[index] = updatedCity;
				setCities(updatedCities);
			})
			.catch((error) => {
				console.log(error);
			});

		setCityName('');
	};

	const deleteCity = () => {
		axios({
			method: 'delete',
			url: 'http://localhost:5000/data/city/delete',
			data: {
				_id,
			},
		})
			.then((result) => {
				console.log(result);
				const deletedCity = result.data.city;

				setCities((prevCities) =>
					prevCities.filter((cty) => cty._id !== deletedCity._id)
				);
				setCityName('');
			})
			.catch((error) => console.log(error));
	};

	return (
		<div
			className='modal'
			id='editcity'
			tabIndex='-1'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Şehri Düzenle</h5>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'></button>
					</div>
					<div className='modal-body'>
						<div className='container-fluid p-3 mx-auto'>
							<div className='row d-flex justify-content-center'>
								<div className=' text-center'>
									<div className='card5'>
										<form
											className='form-card'
											onSubmit={(event) =>
												event.preventDefault()
											}>
											<div className='row justify-content-between text-left mb-2'>
												<div className='form-group col-sm-6 flex-column d-flex'>
													<label className='form-control-label'>
														Şehir Adı
													</label>
													<input
														type='text'
														id='city'
														name='city'
														placeholder={name}
														value={cityName}
														onChange={(event) =>
															setCityName(
																event.target
																	.value
															)
														}
													/>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'>
							İptal
						</button>
						<button
							type='button'
							className='btn btn-primary'
							data-bs-dismiss='modal'
							onClick={updateCity}>
							Değişiklikleri Kaydet
						</button>{' '}
						<button
							className='btn btn-danger'
							data-bs-dismiss='modal'
							onClick={deleteCity}>
							Sil
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default EditCity;
