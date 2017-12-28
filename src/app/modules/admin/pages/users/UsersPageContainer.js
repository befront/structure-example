import React, { Component } from 'react';
import { connect } from 'react-redux';

import { usersOperations } from 'appAPI/admin/users';

import UsersPage from './UsersPage';

class UsersPageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const { getUsers } = this.props;

        console.log(getUsers);
    }

    render() {
        return (
            <UsersPage />
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    getUsers: usersOperations.getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);