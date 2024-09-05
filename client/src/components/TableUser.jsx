import { useData } from '../contexts/Context.Data.jsx';
import EditUser from '../components/EditUser.jsx';
import 'datatables.net-buttons-bs5';
import 'datatables.net-keytable-bs5';
import 'datatables.net-responsive-bs5';
import { useState } from 'react';

const TableUser = () => {
	const { users } = useData();
	const [selectedUser, setSelectedUser] = useState({});

	return (
		<div className='container py-5'>
			<hr />
			<table
				id='tableUser'
				className='table table-hover align-middle caption-top '
				cellSpacing='0'
				width='100%'>
				<thead>
					<caption>Üyeler</caption>
					<tr>
						<th className='th-sm'>#</th>
						<th className='th-sm'>E-mail</th>
						<th className='th-sm'>Kullanıcı Adı</th>
						<th className='th-sm'>Düzenle</th>
					</tr>
				</thead>
				<tbody>
					{users &&
						users.map((user, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{user.email}</td>
									<td>{user.username}</td>
									<td>
										<button
											className='btn btn-primary btn-sm'
											data-bs-toggle='modal'
											data-bs-target='#edituser'
											onClick={() =>
												setSelectedUser(user)
											}>
											Düzenle
										</button>
										<EditUser user={selectedUser} />
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};
export default TableUser;
