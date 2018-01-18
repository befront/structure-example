import * as React from 'react';

import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';

import styles from './styles.scss';

type Props = {
    usersList: Array<Object>
};

const UsersPage = ({ usersList }: Props) => (
    <div className={styles.page}>
        <Table>
            <TableHead>
                <TableCell>Email</TableCell>
                <TableCell />
                <TableCell />
            </TableHead>
            { usersList.length && usersList.map((item, idx) => (
                <TableRow key={idx}>
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

UsersPage.defaultProps = {
    usersList: []
};

export default UsersPage;