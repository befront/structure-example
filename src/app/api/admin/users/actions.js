import types from './types';

const getUsers = payload => ({
    type: types.GET_USERS,
    promise: {
        method: 'GET',
        url: `${API_URL}/api/v1/users`,
    }
});

export default {
    getUsers
};