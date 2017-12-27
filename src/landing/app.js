import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { store, routes } from 'appConfig';

import 'appAssets/styles/main.scss';

import { StartPage } from 'appPages/start';

const history = createHistory();

render(
  <Provider store={store}>
    <StartPage />
  </Provider>,
  document.querySelector('.app')
);
