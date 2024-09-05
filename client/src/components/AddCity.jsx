import { useState } from 'react';
import { useData } from '../contexts/Context.Data.jsx';
import axios from 'axios';

const AddCity = () => {
	const [cityName, setCityName] = useState();
	const { cities, setCities } = useData();

	const addCity = () => {
		axios({
			method: 'post',
			url: 'http://localhost:5000/data/city/post',
			data: {
				name: cityName,
			},
		})
			.then((result) => {
				console.log(result);
				const newCity = result.data.city;
				setCities((prev) => {
					return [...prev, newCity];
				});
			})
			.catch((error) => {
				console.log(error);
			});
		setCityName('');
	};

	return (
		<div
			className='modal'
			id='addcity'
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
							onClick={addCity}>
							Kaydet
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AddCity;
