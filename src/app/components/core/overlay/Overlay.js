import React, { Component } from 'react';
import classNames from 'classnames';

import { Portal } from 'appComponents/core/portal';

import styles from './styles.scss';

class Overlay extends Component {
    componentDidMount() {
        console.log('component did mount');
    }

    render() {
        const { children, isActive, onClick } = this.props;

        return (
            <Portal>
                <div className={classNames(styles.overlay, { [styles.active]: isActive })}>
                    <div className={styles.backdrop} onClick={onClick} />
                    <div className={styles.content}>
                        { children }
                    </div>
                </div>
            </Portal>
        );
    }
}

export default Overlay;