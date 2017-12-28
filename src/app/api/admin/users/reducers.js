import { combineReducers } from 'redux';
import { createReducer } from 'appUtils';

import types from './types';

const loadingReducer = createReducer( false )({
    
});

const usersReducer = createReducer( [] )({
    [ types.GET_USERS_SUCCESS ] : (state, action) => action.payload
});

export default combineReducers({
    isLoading: loadingReducer,
    list: usersReducer
});