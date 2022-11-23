import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
	const pokeName = useSelector (state => state.name)

	if (pokeName){
	// if (true){	
		return <Outlet/>
	} else {
		return <Navigate to="/" />;
	}
	}

export default ProtectedRoutes;

