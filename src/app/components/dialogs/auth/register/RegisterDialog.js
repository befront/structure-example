import React from 'react';

import { DialogHOC } from 'appHoc/dialog';

import { RegisterFormContainer } from 'appContainers/forms/auth/register';

import styles from './styles.scss';

const RegisterDialog = ({ showDialog }) => (
    <div className={styles.dialog}>
        <RegisterFormContainer showDialog={showDialog} />
    </div>
);

export default DialogHOC({ name: 'register' })(RegisterDialog);