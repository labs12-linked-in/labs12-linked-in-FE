import { combineReducers } from 'redux';
import { userReducer } from './UserReducer';
import { formReducer } from './FormReducer'

export default combineReducers({
    userReducer,
    formReducer
})