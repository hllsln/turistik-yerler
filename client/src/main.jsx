import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/css/styles.css';
import './assets/css/navbar.css';
import './assets/css/search.css';
import './assets/css/footer.css';
import './assets/css/cards.css';
import './assets/css/testimonials.css';
import './assets/css/sign.css';
import './assets/css/profile.css';
import router from './Router.jsx';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/Context.Auth.jsx';
import { DataProvider } from './contexts/Context.Data.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<DataProvider>
				<RouterProvider router={router} />
			</DataProvider>
		</AuthProvider>
	</React.StrictMode>
);
