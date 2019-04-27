import { combineReducers } from 'redux';

import dataReducer from '../reducers/DataReducer';
import viewReducer from '../reducers/ViewReducer';

export default combineReducers({
    data: dataReducer,
    view: viewReducer,
})