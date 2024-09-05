import { useState } from 'react';
import { useData } from '../contexts/Context.Data.jsx';
import axios from 'axios';

const AddPlace = () => {
	const [placeName, setPlaceName] = useState();
	const [placeCity, setPlaceCity] = useState();
	const [placeCategory, setPlaceCategory] = useState();
	const [placeInfo, setPlaceInfo] = useState();
	const [placeLink, setPlaceLink] = useState();
	const { categories, cities, setPlaces } = useData();

	const addPlace = () => {
		axios({
			method: 'post',
			url: 'http://localhost:5000/data/place/post',
			data: {
				name: placeName,
				city: placeCity,
				category: placeCategory,
				info: placeInfo,
				link: placeLink,
			},
		})
			.then((result) => {
				const newPlace = result.data.place;
				setPlaces((prev) => {
					return [...prev, newPlace];
				});
			})
			.catch((error) => {
				console.log(error);
			});

		setPlaceName('');
		setPlaceCity('');
		setPlaceCategory('');
		setPlaceInfo('');
		setPlaceLink('');
	};

	return (
		<div
			className='modal'
			id='addplace'
			tabIndex='-1'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Yeri Düzenle</h5>
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
														Yer Adı
													</label>
													<input
														type='text'
														id='name'
														name='name'
														value={placeName}
														onChange={(event) =>
															setPlaceName(
																event.target
																	.value
															)
														}
													/>
												</div>
												<div className='form-group col-sm-6 flex-column d-flex'>
													<label className='form-control-label'>
														Kategori
													</label>
													<select
														name='placeCategory'
														onChange={(event) =>
															setPlaceCategory(
																event.target
																	.value
															)
														}>
														<option
															disabled
															selected></option>
														{categories &&
															categories.map(
																(
																	ctgr,
																	index
																) => (
																	<option
																		key={
																			index
																		}
																		value={
																			ctgr._id
																		}>
																		{
																			ctgr.name
																		}
																	</option>
																)
															)}
													</select>
												</div>
											</div>
											<div className='row justify-content-between text-left mb-2'>
												<div className='form-group col-sm-6 flex-column d-flex '>
													<label className='form-control-label'>
														Şehir
													</label>

													<select
														name='placeCity'
														onChange={(event) =>
															setPlaceCity(
																event.target
																	.value
															)
														}>
														<option
															disabled
															selected></option>
														{cities &&
															cities.map(
																(
																	cty,
																	index
																) => (
																	<option
																		key={
																			index
																		}
																		value={
																			cty._id
																		}>
																		{
																			cty.name
																		}
																	</option>
																)
															)}
													</select>
												</div>
											</div>

											<div className='row justify-content-between text-left'>
												<div className='form-group col-12 flex-column d-flex'>
													<label className='form-control-label'>
														Bilgi
													</label>
													<textarea
														type='text'
														id='info'
														name='info'
														value={placeInfo}
														onBlur='validate(6)'
														rows={10}
														onChange={(event) =>
															setPlaceInfo(
																event.target
																	.value
															)
														}
													/>
												</div>
											</div>
											<div className='row justify-content-between text-left'>
												<div className='form-group col-12 flex-column d-flex'>
													<label className='form-control-label'>
														Link
													</label>
													<input
														type='text'
														id='link'
														name='link'
														value={placeLink}
														onBlur='validate(6)'
														onChange={(event) =>
															setPlaceLink(
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
							onClick={addPlace}>
							Kaydet
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AddPlace;
