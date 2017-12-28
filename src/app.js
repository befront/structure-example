import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// import routes from 'config/routes';
import { store } from 'appConfig';

import { Layout } from 'appComponents/layout';
import { HomePage } from 'appPages/home';

const history = createHistory();

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout>
                <HomePage />
            </Layout>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('.app')
);
