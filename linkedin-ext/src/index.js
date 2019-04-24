import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-think';
import logger from 'redux-logger';

import './index.css';
import App from './App';
import reducer from './reducers';


const store = createStore(reducer, applyMiddleware(thunk, logger));


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    rootElement);


