import types from './types';

const registerByEmail = payload => ({
    type: types.REGISTER_BY_EMAIL,
    promise: { // It's possible because I wrote middleware to work with actions. Path to middleware is 'src/app/middlewares/api.js'
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