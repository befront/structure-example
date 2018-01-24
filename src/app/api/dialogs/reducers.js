import { combineReducers } from 'redux';
import { createReducer } from 'appUtils';

import types from './types';

const shownDialogNameReducer = createReducer( '' )({
    [ types.SHOW_DIALOG ] : (state, action) => action.payload,
    [ types.HIDE_DIALOG ] : (state, action) => ''
});

export default combineReducers({
    shownDialogName: shownDialogNameReducer
});