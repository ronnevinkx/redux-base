import './styles.css';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';

function App() {
	const count = useSelector((state) => state.counter.count);

	return (
		<div className="App">
			<h1>Redux Base</h1>
			<h2>Total count: {count}</h2>
			<Counter />
		</div>
	);
}

export default App;
