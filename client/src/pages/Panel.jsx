import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import BackToTop from '../components/BackToTop.jsx';
import { useEffect, useState } from 'react';
import { useData } from '../contexts/Context.Data.jsx';
import DataTable from 'datatables.net-bs5';
import language from '../TableLanguage.js';
import TableCategory from '../components/TableCategory.jsx';
import TableCity from '../components/TableCity.jsx';
import TablePlace from '../components/TablePlace.jsx';
import TableUser from '../components/TableUser.jsx';
import { useAuth } from '../contexts/Context.Auth.jsx';
import { useNavigate } from 'react-router-dom';

const Panel = () => {
	const { categories, cities, places, users } = useData();
	const [selectedTable, setSelectedTable] = useState('categories');
	const { isLoggedIn, currentUser } = useAuth();
	const { username } = currentUser;
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoggedIn || username !== 'admin') {
			console.log(isLoggedIn, username);
			navigate('/');
		}
	});

	useEffect(() => {
		setSelectedTable('categories');
	}, []);

	useEffect(() => {
		let tableCategory;
		let tableCity;
		let tablePlace;
		let tableUser;

		if (categories && categories.length > 0) {
			tableCategory = new DataTable('#tableCategory', {
				language,
			});
		}

		if (cities && cities.length > 0) {
			tableCity = new DataTable('#tableCity', {
				language,
			});
		}

		if (places && places.length > 0) {
			tablePlace = new DataTable('#tablePlace', {
				language,
			});
		}

		if (users && users.length > 0) {
			tableUser = new DataTable('#tableUser', {
				language,
			});
		}

		return () => {
			if (tableCategory) tableCategory.destroy();
			if (tableCity) tableCity.destroy();
			if (tablePlace) tablePlace.destroy();
			if (tableUser) tableUser.destroy();
		};
	}, [selectedTable, categories, cities, places, users]);

	return (
		<>
			<div className='main'>
				<Navbar />
				<div className='container mt-5'>
					<button
						href=''
						className='btn btn-primary btn-sm'
						onClick={() => setSelectedTable('categories')}>
						Kategoriler
					</button>
					<button
						href=''
						className='btn btn-primary btn-sm ms-2'
						onClick={() => setSelectedTable('cities')}>
						Şehirler
					</button>
					<button
						href=''
						className='btn btn-primary btn-sm ms-2'
						onClick={() => setSelectedTable('places')}>
						Yerler
					</button>
					<button
						href=''
						className='btn btn-primary btn-sm ms-2'
						onClick={() => setSelectedTable('users')}>
						Üyeler
					</button>
				</div>
				{selectedTable === 'categories' && <TableCategory />}
				{selectedTable === 'cities' && <TableCity />}
				{selectedTable === 'places' && <TablePlace />}
				{selectedTable === 'users' && <TableUser />}
			</div>
			<Footer />
			<BackToTop />
		</>
	);
};
export default Panel;
