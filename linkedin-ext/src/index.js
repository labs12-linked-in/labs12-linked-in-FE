import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import ConfigStore from './store/ConfigStore.js';


ReactDOM.render(
    <Provider store={ConfigStore()}>
        <Router>
            <App />
        </Router>
    </Provider>,
document.getElementById('root'));


