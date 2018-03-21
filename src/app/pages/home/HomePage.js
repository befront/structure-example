import React from 'react';

import { Link } from 'react-router-dom';

import styles from './styles.scss';

const HomePage = ({ showDialog }) => (
    <div className={styles.page}>
        <div className={styles.header}>
            <Link to="/" className={styles.logo}>BEFRONT</Link>
            <ul className={styles.nav}>
                <li className={styles.item}>
                    <Link to="/courses" className={styles.link}>КУРСЫ</Link>
                </li>
            </ul>
        </div>
    </div>
);

export default HomePage;