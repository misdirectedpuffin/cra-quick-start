// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

const history = createBrowserHistory();

const container = document.getElementById('root');
const app = React.createElement(App, { history });
const myapp = React.createElement(Provider, { store }, app);

const render = () => {
  ReactDOM.render(myapp, container)
}
render()

registerServiceWorker();
