import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store, { history } from './store'
import { ConnectedRouter } from 'react-router-redux'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
