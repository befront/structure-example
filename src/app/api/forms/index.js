import { combineForms } from 'react-redux-form';

import loginInitialState from './auth/login';

export default combineForms({
    login: loginInitialState
}, 'forms');