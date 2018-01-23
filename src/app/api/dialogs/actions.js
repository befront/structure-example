import types from './types';

const showDialog = payload => ({
    type: types.SHOW_DIALOG,
    payload
});

const hideDialog = payload => ({
    type: types.HIDE_DIALOG,
    payload
});

export default {
    showDialog,
    hideDialog
};