import { combineReducers, createStore } from 'redux';
import counterReducer from './ducks/counter';
import authReducer from './ducks/auth';

const reducer = combineReducers({
	counter: counterReducer,
	auth: authReducer
});

const store = createStore(reducer);

export default store;
