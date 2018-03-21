import { createSelector } from 'reselect';

const rawUsersList = state => state.admin.users.list;

const getUsersList = createSelector(
    [rawUsersList],
    usersList => usersList
);

export default {
    getUsersList
};