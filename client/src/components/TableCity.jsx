import { useData } from '../contexts/Context.Data.jsx';
import 'datatables.net-buttons-bs5';
import 'datatables.net-keytable-bs5';
import 'datatables.net-responsive-bs5';
import { useState } from 'react';
import EditCity from './EditCity.jsx';
import AddCity from './AddCity.jsx';

const TableCity = () => {
	const { cities } = useData();
	const [selectedRow, setSelectedRow] = useState({});

	return (
		<div className='container py-5'>
			<hr />
			<button
				className='btn btn-primary btn-sm'
				data-bs-toggle='modal'
				data-bs-target='#addcity'>
				Ekle
			</button>
			<AddCity />
			<table
				id='tableCity'
				className='table table-hover align-middle caption-top '
				cellSpacing='0'
				width='100%'>
				{' '}
				<thead>
					<caption>Şehirler</caption>
					<tr>
						<th className='th-sm'>#</th>
						<th className='th-sm'>Şehir Adı</th>
						<th className='th-sm'>Düzenle</th>
					</tr>
				</thead>
				<tbody>
					{cities &&
						cities.map((city, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{city.name}</td>
									<td>
										<button
											className='btn btn-primary btn-sm'
											data-bs-toggle='modal'
											data-bs-target='#editcity'
											onClick={() =>
												setSelectedRow(city)
											}>
											Düzenle
										</button>
										<EditCity city={selectedRow} />
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};
export default TableCity;
