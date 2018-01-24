import types from './types';

const registerByEmail = payload => ({
    type: types.REGISTER_BY_EMAIL,
    promise: {
        method: 'POST',
        url: `${API_URL}/api/v1/register`,
        data: {
            email: payload.email
        }
    }
});

export default {
    registerByEmail
};