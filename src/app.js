import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';

import 'appAssets/styles/main.scss';

import { store, routes } from 'appConfig';

import { Layout } from 'appComponents/layout';

const history = createHistory();

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout>
                {routes.map((route, i) => (
                    <Route
                        key={i}   
                        path={route.path}
                        component={route.component}
                    />
                ))}
            </Layout>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('.app')
);
