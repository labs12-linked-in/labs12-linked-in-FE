import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


import './index.css';
import App from './App';
import configureStore from './store/ConfigStore';




ReactDOM.render(
    <Provider store={configureStore()}>
            <Router>
                <App />
            </Router>
    </Provider>,
document.getElementById('root'));


