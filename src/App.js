import { useContext } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	Routes,
	Navigate,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './layout/Layout';
import Home from './pages/Home';
import route from './configs/route';
import { AuthToken } from './authToken';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import NewPassword from './pages/NewPassword';
import Register from './pages/Register';
import Chat from './pages/Chat';

const PrivateRoute = ({ children, requiredRole }) => {
	const { role } = useContext(AuthToken);
	if (
		(requiredRole === undefined && role !== null) ||
		requiredRole === role
	) {
		return children;
	} else {
		return <Navigate to={route.login} />;
	}
};
const router = createBrowserRouter([
	{
		path: route.home,
		element: (
			<Layout>
				<Home />
			</Layout>
		)
	},
	{
		path: route.resetPassword,
		element: (
			<Layout>
				<ResetPassword />
			</Layout>
		)
	},
	{
		path: route.resetPasswordConfirm,
		element: (
			<Layout>
				<ResetPasswordConfirm />
			</Layout>
		)
	},
	{
		path: route.newPassword,
		element: (
			<Layout>
				<NewPassword />
			</Layout>
		)
	},
	{
		path: route.register,
		element: (
			<Layout>
				<Register/>
			</Layout>
		)
	},
	{
		path: route.chat,
		element: (
			<Chat/>
		)
	}
]);
function App() {
	return (
		<>
			<RouterProvider router={router}>
				<Routes />
			</RouterProvider>
		</>
	);
}

export default App;
