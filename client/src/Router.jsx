import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Yerler from './pages/Yerler.jsx';
import Hakkinda from './pages/Hakkinda.jsx';
import Kayit from './pages/Kayit.jsx';
import Giris from './pages/Giris.jsx';
import Yer from './pages/Yer.jsx';
import Hata from './pages/Hata.jsx';
import Panel from './pages/Panel.jsx';
import Profil from './pages/Profil.jsx';
import SifreYenile from './pages/SifreYenile.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Hata />,
	},
	{
		path: '/yerler',
		element: <Yerler />,
	},
	{
		path: '/hakkinda',
		element: <Hakkinda />,
	},
	{
		path: '/kayit',
		element: <Kayit />,
	},
	{
		path: '/giris',
		element: <Giris />,
	},
	{
		path: '/sifreyenile',
		element: <SifreYenile />,
	},
	{
		path: '/panel',
		element: <Panel />,
	},
	{
		path: '/yer/:id',
		element: <Yer />,
	},
	{
		path: '/profil',
		element: <Profil />,
	},
]);

export default router;
