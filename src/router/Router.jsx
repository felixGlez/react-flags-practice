import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Content from '../components/content/Content';
import CountryDetails from '../pages/CountryDetails';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Content />} />
				<Route path='/country/:name' element={<CountryDetails />} />
			</Route>
		</Routes>
	);
};

export default Router;
