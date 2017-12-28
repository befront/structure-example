import * as React from 'react';

import { AdminLayout } from 'appComponents/admin/layout';

import styles from './styles.scss';

const AdminModule = () => (
    <div className={styles.page}>
        <AdminLayout />
    </div>
);

export default AdminModule;