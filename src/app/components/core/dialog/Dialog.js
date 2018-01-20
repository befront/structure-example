import React from 'react';

import ActivableRenderer from 'appHoc/activable-renderer';
import Overlay from 'appComponents/core/overlay';

import styles from './styles.scss';

const Dialog = ({ isActive, onClose }) => (
    <Overlay
        isActive={isActive}
        onClick={onClose}
    >
        <div className={styles.dialog}>
            DIALOG
        </div>
    </Overlay>
);

export default ActivableRenderer()(Dialog);