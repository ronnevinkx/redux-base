import './styles.css';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import LogInForm from './components/LogInForm';
import ButtonLogout from './components/ButtonLogout';

function App() {
	const count = useSelector((state) => state.counter.count);
	const auth = useSelector((state) => state.auth.auth);
	const authError = useSelector((state) => state.auth.authError);

	return (
		<div className="App">
			{authError && <p>Error: {authError}</p>}
			{auth && (
				<>
					<h1>Redux Base</h1>
					<p>Your ID: {auth}</p>
					<h2>Total count: {count}</h2>
					<Counter />
					<ButtonLogout />
				</>
			)}
			{!auth && <LogInForm />}
		</div>
	);
}

export default App;
