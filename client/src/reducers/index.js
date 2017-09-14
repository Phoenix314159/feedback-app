import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import albumReducer from './albumReducer';

export default combineReducers({
    auth: authReducer,
    albums: albumReducer,
    form: reduxForm
})