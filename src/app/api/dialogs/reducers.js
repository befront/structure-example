import { combineReducers } from 'redux';
import { createReducer } from 'appUtils';

import types from './types';

const dialogsReducer = createReducer( {} )({
    [ types.SHOW_DIALOG ] : (state, action) => (
        Object.assign(
            {}, 
            state,
            {
                [action.payload]: true
            }
        )
    ),
    [ types.HIDE_DIALOG ] : (state, action) => (
        Object.assign(
            {}, 
            state,
            {
                [action.payload]: false
            }
        )
    )
});

export default combineReducers({
    dialogs: dialogsReducer
});