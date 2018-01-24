import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

const Input = ({ label, type = 'text', hasError, hasValue }) => (
    <div className={styles.input}>
        <input
            className={classNames(
                styles.field, 
                { [styles.error]: hasError },
                { [styles.hasValue]: hasValue }
            )}
            type={type}
        />
        { label && <label className={styles.label}>{ label }</label> }
    </div>
);

export default Input;