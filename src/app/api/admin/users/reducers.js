import { combineReducers } from 'redux';
import { createReducer } from 'appUtils';

const loadingReducer = createReducer( false )({

});

export default combineReducers({
    isLoading: loadingReducer
});