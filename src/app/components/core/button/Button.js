import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

const Button = ({ children, className, type = 'button', size, onClick }) => (
    <button
        className={classNames(styles.button, styles[size], { [className]: className })}
        onClick={onClick}
        type={type}
    >
        { children }
    </button>
);

export default Button;