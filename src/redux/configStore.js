import { combineReducers, createStore } from 'redux';
import counterReducer from './ducks/counter';
import authReducer from './ducks/auth';

const reducer = combineReducers({
	counter: counterReducer,
	auth: authReducer
});

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
