import * as React from 'react';

import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';

import styles from './styles.scss';
  
const users = [
    { name: 'Javi Jimenez', email: 'javi@gmail.com' },
    { name: 'Javi Velasco', email: 'javi@gmail.com' }
];

const UsersPage = () => (
    <div className={styles.page}>
        <Table>
            <TableHead>
                <TableCell>Имя</TableCell>
                <TableCell>Email</TableCell>
                <TableCell />
                <TableCell />
            </TableHead>
            { users.map((item, idx) => (
                <TableRow key={idx}>
                    <TableCell>{ item.name }</TableCell>
                    <TableCell>{ item.email }</TableCell>
                    <TableCell>
                        Редактировать
                    </TableCell>
                    <TableCell>
                        Удалить
                    </TableCell>
                </TableRow>
            ))}
        </Table>
    </div>
);

export default UsersPage;