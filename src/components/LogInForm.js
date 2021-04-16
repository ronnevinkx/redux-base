import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/ducks/auth';

const LogInForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (email && password) dispatch(logIn({ email, password }));
	};

	// return <button onClick={handleButton}>Log In</button>;
	return (
		<div className="login">
			<form className="login__form" onSubmit={handleSubmit}>
				<h1>Login</h1>
				<div className="form-control">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						placeholder="Email"
						id="email"
						value={email}
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<button type="submit" className="form-button">
						Log In
					</button>
				</div>
			</form>
		</div>
	);
};

export default LogInForm;
