import { combineReducers } from 'redux';

import { createReducer } from 'appUtils';

import types from './types';

const loadingReducer = createReducer( false )({
    [ types.GET_COURSES ] : () => true,
    [ types.GET_COURSES_SUCCESS ] : () => false,
    [ types.GET_COURSES_ERROR ] : () => false
});

const getCoursesReducer = createReducer( [] )({
    [ types.GET_COURSES_SUCCESS ] : (state, action) => action.payload 
});

export default combineReducers({
    isLoading: loadingReducer,
    courses: getCoursesReducer
});