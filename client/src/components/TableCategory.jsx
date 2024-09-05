import { useData } from '../contexts/Context.Data.jsx';
import EditCategory from '../components/EditCategory.jsx';
import 'datatables.net-buttons-bs5';
import 'datatables.net-keytable-bs5';
import 'datatables.net-responsive-bs5';
import { useState } from 'react';
import AddCategory from '../components/AddCategory.jsx';

const TableCategory = () => {
	const { categories } = useData();
	const [selectedCategory, setSelectedCategory] = useState({});

	return (
		<div className='container py-5'>
			<hr />
			<button
				className='btn btn-primary btn-sm'
				data-bs-toggle='modal'
				data-bs-target='#addcategory'>
				Ekle
			</button>
			<AddCategory />
			<table
				id='tableCategory'
				className='table table-hover align-middle caption-top '
				cellSpacing='0'
				width='100%'>
				{' '}
				<thead>
					<caption>Kategoriler</caption>
					<tr>
						<th className='th-sm'>#</th>
						<th className='th-sm'>Kategori Adı</th>
						<th className='th-sm'>Düzenle</th>
					</tr>
				</thead>
				<tbody>
					{categories &&
						categories.map((category, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{category.name}</td>
									<td>
										<button
											className='btn btn-primary btn-sm'
											data-bs-toggle='modal'
											data-bs-target='#editcategory'
											onClick={() =>
												setSelectedCategory(category)
											}>
											Düzenle
										</button>
										<EditCategory
											category={selectedCategory}
										/>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};
export default TableCategory;
