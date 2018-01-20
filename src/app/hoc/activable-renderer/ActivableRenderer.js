import React, { Component } from 'react';

const defaultProps = {
    delay: 500
};

const ActivableRenderer = options => ActivableComponent =>
    class ActivableRenderer extends Component {
    static defaultProps = defaultProps;

    constructor(props) {
        super(props);

        const { isActive } = this.props;

        this.state = {
            isActive,
            rendered: isActive
        };
    }

    componentWillReceiveProps(nextProps) {
        const { isActive } = this.props;

        if (nextProps.isActive && !isActive) {
            this.renderAndActivate();
        }
        if (!nextProps.isActive && isActive) {
            this.deactivateAndUnrender();
        }
    }

    deactivateAndUnrender() {
        const { delay } = this.props;

        this.setState({ rendered: true, isActive: false }, () => {
            this.unrenderTimeout = setTimeout(() => {
                this.setState({ rendered: false });
                this.unrenderTimeout = null;
            }, delay);
        });
    }

    renderAndActivate() {
        if (this.unrenderTimeout) clearTimeout(this.unrenderTimeout);
        this.setState({ rendered: true, isActive: false }, () => {
            this.activateTimeout = setTimeout(() => this.setState({ isActive: true }), 20);
        });
    }

    render() {
        const { delay, ...others } = this.props;
        const { isActive, rendered } = this.state;
        return rendered
            ? <ActivableComponent {...others} isActive={isActive} />
            : null;
    };
    };

export default ActivableRenderer;
