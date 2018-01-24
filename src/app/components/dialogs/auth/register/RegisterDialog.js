import React from 'react';

import { DialogHOC } from 'appHoc/dialog';

import { RegisterForm } from 'appComponents/forms/auth/register';

import styles from './styles.scss';

const RegisterDialog = ({ showDialog }) => (
    <div className={styles.dialog}>
        <RegisterForm showDialog={showDialog} />
    </div>
);

export default DialogHOC({ name: 'register' })(RegisterDialog);