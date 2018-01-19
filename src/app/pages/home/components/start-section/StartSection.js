import React from 'react';
import classNames from 'classnames';

import gridStyles from 'appAssets/styles/grid.scss';
import styles from './styles.scss';

import logoImgSrc from './img/start_logo.svg';

const StartSection = () => (
    <div className={styles.section}>
        <div className={styles.content}>
            <div className={gridStyles.containerFluid}>
                <img src={logoImgSrc} className={styles.logo} />
                <div className={styles.text}>
                    <div className={styles.text__round}>
                        <div className={styles.text__round__line} />
                    </div>
                    <span className={styles.text__part}>самый простой способ</span>
                    <span className={styles.text__part}>научиться программированию</span>
                </div>
            </div>
        </div>
        <div className={styles.main}>
            <div className={gridStyles.containerFluid}>
                <div className={classNames(styles.main__round, styles.main__round__first)} />
                <div className={classNames(styles.main__round, styles.main__round__second)} />
                <div className={styles.main__square} />
                <div className={styles.img} />
            </div>
        </div>
    </div>
);

export default StartSection;