import actions from './actions';

const registerByEmail = actions.registerByEmail; 
// or
const registerByEmail = () => dispatch => {
    dispatch(registerByEmail)
        .then(() => {
            // Do something here
        });
}

export default {
    registerByEmail
};