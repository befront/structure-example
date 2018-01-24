import React from 'react';

import { DialogHOC } from 'appHoc/dialog';

import { LoginForm } from 'appComponents/forms/auth/login';

import styles from './styles.scss';

const LoginDialog = ({ showDialog }) => (
    <div className={styles.dialog}>
        <LoginForm showDialog={showDialog} />
    </div>
);

export default DialogHOC({ name: 'login' })(LoginDialog);