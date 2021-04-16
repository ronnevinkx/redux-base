import { useDispatch } from 'react-redux';
import { logOut } from '../redux/ducks/auth';

const ButtonLogout = () => {
	const dispatch = useDispatch();

	const handleButton = () => {
		dispatch(logOut());
	};

	return <button onClick={handleButton}>Log Out</button>;
};

export default ButtonLogout;
