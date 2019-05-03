import { combineReducers } from 'redux';
import { userReducer } from './UserReducer';
import { formReducer } from './FormReducer'
import {deptReducer} from './DeptReducer'

export default combineReducers({
    userReducer,
    formReducer,
    deptReducer
})