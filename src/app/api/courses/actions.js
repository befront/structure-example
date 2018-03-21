import types from './types';

const getCourses = payload => ({
    type: types.GET_COURSES,
    promise: {
        method: 'GET',
        url: `${API_URL}/api/v1/courses`,
    }
});

export default {
    getCourses
};