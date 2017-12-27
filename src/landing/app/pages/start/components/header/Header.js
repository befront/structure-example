import * as React from 'react';

import { Button } from 'sharedComponents/button';

import gridStyles from 'appAssets/styles/grid.scss';
import styles from './styles.scss';

import logoImg from './img/logo.svg';

const Header = () => (
  <div className={styles.header}>
    <div className={gridStyles.containerFluid}>
      <div className={styles.content}>
        <a className={styles.logo}>
          <img src={logoImg} className={styles.img} />
        </a>
        <Button className={styles.btn}>Войти</Button>
      </div>
    </div>
  </div>
);

export default Header;