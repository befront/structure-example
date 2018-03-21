import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HomePage } from 'appPages/home';

class HomePageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    
    render() {
        return (
            <HomePage />
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);