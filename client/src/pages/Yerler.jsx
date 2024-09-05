import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Card4 from '../components/Card4.jsx';
import BackToTop from '../components/BackToTop.jsx';
import { useData } from '../contexts/Context.Data.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Yerler = () => {
	const { places, cities, categories } = useData();
	const { state } = useLocation();
	const navigate = useNavigate();
	const [placesToShow, setPlacesToShow] = useState();
	const [filters, setFilters] = useState({
		name: '',
		city: '',
		category: '',
	});

	const handleFilters = (event) => {
		const { name, value } = event.target;

		if (value === 'Tümü') {
			setFilters((prev) => {
				return {
					...prev,
					[name]: '',
				};
			});
		} else {
			setFilters((prev) => {
				return {
					...prev,
					[name]: value,
				};
			});
		}
	};

	useEffect(() => {
		if (places) {
			setPlacesToShow(places);
		}

		if (state && state.name) {
			setFilters((prev) => {
				return {
					...prev,
					name: state.name.toLocaleLowerCase(),
				};
			});
		}

		navigate(location.pathname, { replace: true });
	}, [places]);

	useEffect(() => {
		if (placesToShow) {
			let filteredPlaces = places;

			if (filters.name) {
				console.log(filters.name);
				filteredPlaces = filteredPlaces.filter((plc) =>
					plc.name.toLocaleLowerCase().includes(filters.name)
				);
			}
			if (filters.city) {
				console.log(filters.city);
				filteredPlaces = filteredPlaces.filter(
					(plc) => plc.city === filters.city
				);
			}
			if (filters.category) {
				console.log(filters.category);
				filteredPlaces = filteredPlaces.filter(
					(plc) => plc.category === filters.category
				);
			}

			console.log(filteredPlaces);
			console.log(filters);
			setPlacesToShow(filteredPlaces);
		}
	}, [filters]);

	return (
		<>
			<div className='main'>
				<Navbar />
				<div className='form-inline container d-flex justify-content-end mt-5'>
					<div className='input-group me-4'>
						<label
							className='form-label me-2'
							htmlFor='category'>
							Kategori:{' '}
						</label>
						<select
							className='form-select'
							name='category'
							value={filters.category}
							onChange={(event) => handleFilters(event)}>
							<option selected>Tümü</option>
							{categories &&
								categories.map((ctgr, index) => (
									<option
										key={index}
										value={ctgr._id}>
										{ctgr.name}
									</option>
								))}
						</select>
					</div>
					<div className='input-group me-4'>
						<label
							className='form-label me-2'
							htmlFor='city'>
							Şehir:{' '}
						</label>
						<select
							className='form-select'
							name='city'
							value={filters.city}
							onChange={(event) => handleFilters(event)}>
							<option selected>Tümü</option>
							{cities &&
								cities.map((cty, index) => (
									<option
										key={index}
										value={cty._id}>
										{cty.name}
									</option>
								))}
						</select>
					</div>
					<div className='input-group me-4'>
						<label
							className='form-label me-2'
							htmlFor='name'>
							İsim:{' '}
						</label>
						<input
							type='text'
							className='form-control'
							name='name'
							value={filters.name}
							placeholder='Turistik yer ara...'
							onChange={(event) => handleFilters(event)}
						/>
					</div>
				</div>

				<div className='yerler container d-flex flex-wrap justify-content-center my-3 py-3'>
					{placesToShow && placesToShow.length === 0 ? (
						<p>Sonuç bulunamadı.</p>
					) : (
						placesToShow &&
						placesToShow.map((plc, index) => (
							<Card4
								key={index}
								place={plc}
							/>
						))
					)}
				</div>
			</div>
			<Footer />
			<BackToTop />
		</>
	);
};
export default Yerler;
