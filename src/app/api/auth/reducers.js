import { combineReducers } from 'redux';
import { createReducer } from 'appUtils';

import types from './types';

const loadingReducer = createReducer( false )({
    [ types.REGISTER_BY_EMAIL ] : () => true,
    [ types.REGISTER_BY_EMAIL_SUCCESS ] : () => false,
    [ types.REGISTER_BY_EMAIL_ERROR ] : () => false
});

export default combineReducers({
    isLoading: loadingReducer
});