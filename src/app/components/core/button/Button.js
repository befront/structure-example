import * as React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

type Props = {
    children: React.Node,
    className?: string,
    type?: string,
    size?: string
};

const Button = ({ children, className, type, size, onClick }: Props) => (
    <button
        className={classNames(styles.button, { [className]: className }, styles[size])}
        onClick={onClick}
    >
        { children }
    </button>
);

Button.defaultProps = {
    children: <div />,
    className: '',
    type: 'button',
    size: '',
    onClick: () => {}
};

export default Button;