import React from 'react';

import { DialogHOC } from 'appHoc/dialog';

import styles from './styles.scss';

const RegisterDialog = () => (
    <div className={styles.dialog}>
        REGISTER DIALOG
    </div>
);

export default DialogHOC({ name: 'register' })(RegisterDialog);