import { combineReducers } from 'redux';
import authReducer from './authReducer';
import albumReducer from './albumReducer';

export default combineReducers({
    auth: authReducer,
    albums: albumReducer
})