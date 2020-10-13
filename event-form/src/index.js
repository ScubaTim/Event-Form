import React from 'react';
import ReactDOM from 'react-dom'
import App from './containers/App';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import history from './utils/history';

import configureStore from './configureStore';

const renderApp = () => {
  const initialState = {};
  const store = configureStore(initialState, history);

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./containers/App', renderApp)
  }
};

renderApp();

export default renderApp;