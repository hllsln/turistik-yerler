import { useState } from 'react';
import { useData } from '../contexts/Context.Data.jsx';
import axios from 'axios';

const AddCategory = () => {
	const [categoryName, setCategoryName] = useState();
	const { setCategories } = useData();

	const addCategory = () => {
		axios({
			method: 'post',
			url: 'http://localhost:5000/data/category/post',
			data: {
				name: categoryName,
			},
		}).then((result) => {
			console.log(result);
			const newCategory = result.data.category;
			setCategories((prevCategories) => {
				return [...prevCategories, newCategory];
			});
		});
		setCategoryName('');
	};

	return (
		<div
			className='modal'
			id='addcategory'
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
							className='btn btn-primary'
							data-bs-dismiss='modal'
							onClick={addCategory}>
							Kaydet
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AddCategory;
