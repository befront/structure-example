import React from 'react';
import classNames from 'classnames';

import { ActivableRenderer } from 'appHoc/activable-renderer';

import { Overlay } from 'appComponents/core/overlay';

import styles from './styles.scss';

const Dialog = ({ isActive, onClose, children, className }) => (
    <Overlay
        isActive={isActive}
        onClick={onClose}
    >
        <div
            className={classNames(
                styles.dialog, 
                { [styles.active]: isActive },
                { [className]: className }
            )}
        >
            <span className={styles.close} onClick={onClose}>Закрыть</span>
            <div className={styles.content}>
                { children }
            </div>
        </div>
    </Overlay>
);

export default ActivableRenderer()(Dialog);