import React from 'react';

import { DialogHOC } from 'appHoc/dialog';

const LoginDialog = () => (
    <div className="login-dialog">
        LOGIN DIALOG
    </div>
);

export default DialogHOC({ name: 'login' })(LoginDialog);