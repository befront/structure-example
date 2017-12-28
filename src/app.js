import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';

import 'appAssets/styles/styles.scss';

import { store, routes } from 'appConfig';

const history = createHistory();

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="app__content">
                {routes.map((route, i) => (
                    <Route
                        key={i}
                        exact={route.exact} 
                        path={route.path}
                        component={route.component}
                    />
                ))}
            </div>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('.app')
);
