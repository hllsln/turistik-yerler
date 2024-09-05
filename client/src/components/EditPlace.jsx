import { useEffect, useState } from 'react';
import { useData } from '../contexts/Context.Data.jsx';
import axios from 'axios';

const EditPlace = (props) => {
	const { _id, name, city, category, info, link } = props.place;
	const [placeName, setPlaceName] = useState(name);
	const [placeCity, setPlaceCity] = useState(city);
	const [placeCategory, setPlaceCategory] = useState(category);
	const [placeInfo, setPlaceInfo] = useState(info);
	const [placeLink, setPlaceLink] = useState(link);
	const { categories, cities, places, setPlaces } = useData();

	useEffect(() => {
		setPlaceName(name);
		setPlaceCity(city);
		setPlaceCategory(category);
		setPlaceInfo(info);
		setPlaceLink(link);
	}, [name, city, category, info, link]);

	const updatePlace = () => {
		axios({
			method: 'post',
			url: 'http://localhost:5000/data/place/update',
			data: {
				_id,
				name: placeName,
				city: placeCity,
				category: placeCategory,
				info: placeInfo,
				link: placeLink,
			},
		})
			.then((result) => {
				console.log(result);

				const updatedPlace = result.data.place;
				const index = places.findIndex((plc) => plc._id === _id);
				const updatedPlaces = [...places];
				updatedPlaces[index] = updatedPlace;
				setPlaces(updatedPlaces);
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

	const deletePlace = () => {
		axios({
			method: 'delete',
			url: 'http://localhost:5000/data/place/delete',
			data: {
				_id,
			},
		})
			.then((result) => {
				console.log(result);
				const deletedPlace = result.data.place;

				setPlaces((prevPlaces) =>
					prevPlaces.filter((plc) => plc._id !== deletedPlace._id)
				);
			})
			.catch((error) => console.log(error));

		setPlaceName('');
		setPlaceCity('');
		setPlaceCategory('');
		setPlaceInfo('');
		setPlaceLink('');
	};

	return (
		<div
			className='modal'
			id='editplace'
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
														placeholder={name}
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
														value={placeCategory}
														onChange={(event) =>
															setPlaceCategory(
																event.target
																	.value
															)
														}>
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
																		}
																		selected={
																			ctgr._id ===
																			category
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
														value={placeCity}
														onChange={(event) =>
															setPlaceCity(
																event.target
																	.value
															)
														}>
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
																		}
																		selected={
																			cty._id ===
																			city
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
														placeholder={info}
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
														placeholder={link}
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
							onClick={updatePlace}>
							Değişiklikleri Kaydet
						</button>{' '}
						<button
							className='btn btn-danger'
							data-bs-dismiss='modal'
							onClick={deletePlace}>
							Sil
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default EditPlace;
