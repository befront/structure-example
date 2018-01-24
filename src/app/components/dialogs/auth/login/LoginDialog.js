import React from 'react';

import { DialogHOC } from 'appHoc/dialog';

import { LoginForm } from 'appComponents/forms/auth/login';

const LoginDialog = () => (
    <div className="login-dialog">
        <LoginForm />
    </div>
);

export default DialogHOC({ name: 'login' })(LoginDialog);