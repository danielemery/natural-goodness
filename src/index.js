import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store, { history } from './store'
import { ConnectedRouter } from 'react-router-redux'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import config from './config.js';
import {setupCognito} from 'react-cognito/src/policy.js';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();

setupCognito(store, config.cognitoConfig);

