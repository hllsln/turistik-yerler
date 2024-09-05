import { useEffect, useState } from 'react';
import { useData } from '../contexts/Context.Data.jsx';
import axios from 'axios';

const EditCategory = (props) => {
	const { category } = props;
	const { _id, name } = category;
	const [categoryName, setCategoryName] = useState(name);
	const { categories, setCategories } = useData();

	useEffect(() => {
		setCategoryName(name);
	}, [name]);

	const updateCategory = () => {
		axios({
			method: 'post',
			url: 'http://localhost:5000/data/category/update',
			data: {
				_id,
				name: categoryName,
			},
		})
			.then((result) => {
				console.log(result);

				const updatedCategory = result.data.category;
				const index = categories.findIndex((ctg) => ctg._id === _id);
				const updatedCategories = [...categories];
				updatedCategories[index] = updatedCategory;
				setCategories(updatedCategories);
			})
			.catch((error) => console.log(error));

		setCategoryName('');
	};

	const deleteCategory = () => {
		axios({
			method: 'delete',
			url: 'http://localhost:5000/data/category/delete',
			data: {
				_id,
			},
		})
			.then((result) => {
				console.log(result);
				const deletedCategory = result.data.category;

				setCategories((prevCategories) =>
					prevCategories.filter(
						(ctg) => ctg._id !== deletedCategory._id
					)
				);
				setCategoryName('');
			})
			.catch((error) => console.log(error));
	};

	return (
		<div
			className='modal'
			id='editcategory'
			tabIndex='-1'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Kategoriyi Düzenle</h5>
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
														Kategori İsmi
													</label>
													<input
														type='text'
														id='fname'
														name='fname'
														placeholder={name}
														value={categoryName}
														onChange={(event) =>
															setCategoryName(
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
							onClick={updateCategory}>
							Değişiklikleri Kaydet
						</button>

						<button
							className='btn btn-danger'
							data-bs-dismiss='modal'
							onClick={deleteCategory}>
							Sil
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default EditCategory;
