import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {
    constructor(props) {
        super(props);

        this.overlayTarget = document.createElement('div');
    }

    componentDidMount() {
        document.body.appendChild(this.overlayTarget);
    }

    componentWillUnmount() {
        document.body.removeChild(this.overlayTarget);
    }

    render() {
        const { children } = this.props;

        return ReactDOM.createPortal(
            children,
            this.overlayTarget
        );
    }
}

export default Portal;