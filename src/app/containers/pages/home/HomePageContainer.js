import React, { Component } from 'react';
import { connect } from 'react-redux';

import { dialogsOperations } from 'appAPI/dialogs';

import { HomePage } from 'appPages/home';

class HomePageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    
    render() {
        const { showDialog } = this.props;

        return (
            <HomePage
                showDialog={showDialog}
            />
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    showDialog: dialogsOperations.showDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);