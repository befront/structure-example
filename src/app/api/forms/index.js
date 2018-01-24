import { combineForms } from 'react-redux-form';

import loginInitialState from './auth/login';
import registerInitialState from './auth/register';

export default combineForms({
    login: loginInitialState,
    register: registerInitialState
}, 'forms');