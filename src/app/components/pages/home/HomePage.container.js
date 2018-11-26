import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authOperations } from 'appApi/auth';

import HomePage from './HomePage.template';

class HomePageContainer extends Component {
    render() {
        const { registerByEmail } = this.props;

        return (
            <HomePage
                registerByEmail={registerByEmail}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading // example usage
});

const mapDispatchToProps = {
    registerByEmail: authOperations.registerByEmail // example usage
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);