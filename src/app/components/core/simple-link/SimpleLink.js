import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const SimpleLink = ({ children, routeTo, className }) => (
    routeTo ? (
        <Link
            to={routeTo}
            className={classNames(styles.link, { [className]: className })}
        >
            { children }
        </Link>
    ) : (
        <a className={classNames(styles.link, { [className]: className })}>
            { children }
        </a>
    )
);

export default SimpleLink;