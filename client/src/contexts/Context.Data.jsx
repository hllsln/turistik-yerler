import { useState, useEffect, useContext, createContext } from 'react';
import { useAuth } from './Context.Auth.jsx';
import axios from 'axios';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const { currentUser } = useAuth();
	const [categories, setCategories] = useState([]);
	const [cities, setCities] = useState([]);
	const [places, setPlaces] = useState([]);
	const [users, setUsers] = useState([]);
	const [comments, setComments] = useState([]);

	const fetchCategories = async () => {
		axios({
			method: 'get',
			url: 'http://localhost:5000/data/category/get',
		})
			.then((result) => {
				const fetchedCategories = result.data;
				setCategories(fetchedCategories);
			})
			.catch((error) => {
				console.log(error);
				setError(error);
			});
	};

	const fetchCities = async () => {
		axios({
			method: 'get',
			url: 'http://localhost:5000/data/city/get',
		})
			.then((result) => {
				const fetchedCities = result.data;
				setCities(fetchedCities);
			})
			.catch((error) => {
				console.log(error);
				setError(error);
			});
	};

	const fetchPlaces = async () => {
		axios({
			method: 'get',
			url: 'http://localhost:5000/data/place/get',
		})
			.then((result) => {
				const fetchedPlaces = result.data;
				setPlaces(fetchedPlaces);
			})
			.catch((error) => {
				console.log(error);
				setError(error);
			});
	};

	const fetchUsers = async () => {
		axios({
			method: 'get',
			url: 'http://localhost:5000/data/user/get',
		})
			.then((result) => {
				const fetchedUsers = result.data;
				setUsers(fetchedUsers);
			})
			.catch((error) => {
				console.log(error);
				setError(error);
			});
	};

	const fetchComments = async () => {
		axios({
			method: 'get',
			url: 'http://localhost:5000/data/comment/get',
		})
			.then((result) => {
				const fetchedComments = result.data;
				setComments(fetchedComments);
			})
			.catch((error) => {
				console.log(error);
				setError(error);
			});

		console.log(comments);
	};

	useEffect(
		() => {
			fetchCategories();
			fetchCities();
			fetchPlaces();
			fetchUsers();
			fetchComments();
		},
		[currentUser],
		[categories],
		[cities],
		[places],
		[users],
		[comments]
	);

	return (
		<DataContext.Provider
			value={{
				isLoading,
				error,
				categories,
				setCategories,
				cities,
				setCities,
				places,
				setPlaces,
				users,
				setUsers,
				comments,
				setComments,
			}}>
			{children}
		</DataContext.Provider>
	);
};
