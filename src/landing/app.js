import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { store, routes } from 'appConfig';

import { Layout } from 'appComponents/layout';
import { Button } from 'sharedComponents/button';

const history = createHistory();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        { routes.map(route => (
          <Route path={route.path} component={route.component} />
        ))}
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('.app')
);
