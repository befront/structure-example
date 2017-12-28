import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import { apiService } from 'middlewares';
// import * as reducers from 'api';

const composeEnhancer = DEV_SERVER ? composeWithDevTools : compose;

const reducer = combineReducers({
    routing: routerReducer
    // ...reducers
});

const initialState = {};

const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(browserHistory),
            // apiService,
            thunkMiddleware 
        )
    )
);

export default store;