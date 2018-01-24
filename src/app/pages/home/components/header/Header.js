import React from 'react';

import { Button } from 'appComponents/core/button';

import gridStyles from 'appAssets/styles/grid.scss';
import styles from './styles.scss';

import logoImgSrc from './img/logo.svg';

const Header = ({ showDialog }) => ( 
    <div className={styles.header}>
        <div className={gridStyles.containerFluid}>
            <div className={styles.content}>
                <a className={styles.logo}>
                    <img src={logoImgSrc} className={styles.img} />
                </a>
                <Button className={styles.btn} onClick={() => { showDialog('login'); }}>Войти</Button>
            </div>
        </div>
    </div>
);

export default Header;