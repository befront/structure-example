import React, { Component } from 'react';
import { connect } from 'react-redux';

import { usersOperations, usersSelectors } from 'appAPI/admin/users';

import UsersPage from './UsersPage';

class UsersPageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const { getUsers } = this.props;

        getUsers();
    }

    render() {
        const { usersList } = this.props;

        return (
            <UsersPage usersList={usersList} />
        );
    }
}

const mapStateToProps = state => ({
    usersList: usersSelectors.getUsersList(state)
});

const mapDispatchToProps = {
    getUsers: usersOperations.getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);