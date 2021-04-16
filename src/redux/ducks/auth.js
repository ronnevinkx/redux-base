// actions
const LOGIN = 'login';
const LOGIN_ERROR = 'login_error';
const LOGOUT = 'logout';

// action creators
export const logIn = (credentials) => {
	console.log('Auth with db and creds:', credentials);

	try {
		let user = {
			id: 1,
			name: 'My Name',
			email: 'name@email.com'
		};

		// throw some error if applicable

		return { type: LOGIN, uid: user.id };
	} catch (error) {
		return {
			type: LOGIN_ERROR,
			authError: 'Wrong password...'
		};
	}
};

export const logOut = () => ({ type: LOGOUT });

// initial state
const initialState = {
	auth: null,
	authError: null
};

// reducer
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN: {
			return { ...state, auth: action.uid, authError: null };
		}

		case LOGIN_ERROR: {
			return { ...state, auth: null, authError: action.authError };
		}

		case LOGOUT: {
			return { ...state, auth: null, authError: null };
		}

		default: {
			return state;
		}
	}
}
