import React from 'react';
import classNames from 'classnames';

import { Button } from 'appComponents/core/button';

import gridStyles from 'appAssets/styles/grid.scss';
import styles from './styles.scss';

import pandaImgSrc from './img/panda.png';

const GetStartedSection = () => (
    <div className={styles.section}>
        <div className={styles.round}>
            <div className={styles.round__line} />
        </div>
        <div className={classNames(styles.round, styles.round__second)} />
        <div className={styles.square} />
        <div className={classNames(styles.square, styles.square__second)} />
        <div className={gridStyles.containerFluid}>
            <p className={styles.title}>Все в твоих руках</p>
            <p className={styles.text}>
                Начни сегодня, чтобы завтра стать специалистом
            </p>
            <Button className={styles.btn}>Начать</Button>
            <img src={pandaImgSrc} className={styles.img} />
        </div>    
    </div>
);

export default GetStartedSection;