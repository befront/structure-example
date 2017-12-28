import * as React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

type Props = {
    children: React.Node,
    className?: string,
    type?: string
};

const Button = ({ children, className, type, onClick }: Props) => (
    <button
        className={classNames(styles.button, { [className]: className })}
        onClick={onClick}
    >
        { children }
    </button>
);

Button.defaultProps = {
    children: <div />,
    className: '',
    type: 'button',
    onClick: () => {}
};

export default Button;