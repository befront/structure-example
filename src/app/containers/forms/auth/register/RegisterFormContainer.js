import React from 'react';
import { connect } from 'react-redux';

import { authOperations } from 'appAPI/auth';

import { RegisterForm } from 'appComponents/forms/auth/register';

const RegisterFormContainer = ({ showDialog, registerByEmail }) => (
    <RegisterForm
        showDialog={showDialog}
        onSubmit={registerByEmail} 
    />
);

const mapDispatchToProps = {
    registerByEmail: authOperations.registerByEmail
};

export default connect(null, mapDispatchToProps)(RegisterForm);