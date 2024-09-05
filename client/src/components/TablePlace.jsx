import { useData } from '../contexts/Context.Data.jsx';
import EditPlace from '../components/EditPlace.jsx';
import 'datatables.net-buttons-bs5';
import 'datatables.net-keytable-bs5';
import 'datatables.net-responsive-bs5';
import AddPlace from '../components/AddPlace.jsx';
import { useState } from 'react';

const TablePlace = () => {
	const { places } = useData();
	const [selectedPlace, setSelectedPlace] = useState({});

	return (
		<div className='container py-5'>
			<hr />
			<button
				className='btn btn-primary btn-sm'
				data-bs-toggle='modal'
				data-bs-target='#addplace'>
				Ekle
			</button>
			<AddPlace />
			<table
				id='tablePlace'
				className='table table-hover align-middle caption-top '
				cellSpacing='0'
				width='100%'>
				{' '}
				<thead>
					<caption>Yerler</caption>
					<tr>
						<th className='th-sm'>#</th>
						<th className='th-sm'>Yer Adı</th>
						<th className='th-sm'>Düzenle</th>
					</tr>
				</thead>
				<tbody>
					{places &&
						places.map((place, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{place.name}</td>
									<td>
										<button
											className='btn btn-primary btn-sm'
											data-bs-toggle='modal'
											data-bs-target='#editplace'
											onClick={() =>
												setSelectedPlace(place)
											}>
											Düzenle
										</button>
										<EditPlace
											place={selectedPlace}
											setSelectedPlace={setSelectedPlace}
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

export default TablePlace;
