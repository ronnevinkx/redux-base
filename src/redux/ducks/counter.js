// actions
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creators
export const increment = () => ({
	type: INCREMENT
});

export const decrement = () => ({
	type: DECREMENT
});

// initial state
const initialState = {
	count: 0
};

// reducer
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT: {
			return { ...state, count: state.count + 1 };
		}

		case DECREMENT: {
			return { ...state, count: state.count - 1 };
		}

		default: {
			return state;
		}
	}
}
