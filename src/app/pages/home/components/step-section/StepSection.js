import React from 'react';
import classNames from 'classnames';

import { Button } from 'appComponents/core/button';

import gridStyles from 'appAssets/styles/grid.scss';
import styles from './styles.scss';

const StepSection = ({ showDialog }) => (
    <div className={styles.section}>
        <div className={gridStyles.containerFluid}>
            <p className={styles.title}>Достигай новых высот с BeFront</p>
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.item__wrap}>
                        <div className={classNames(styles.item__img, styles.item__img__first)} />
                    </div>
                    <div className={styles.item__content}>
                        <p className={styles.item__number}>01</p>
                        <p className={styles.item__title}>Проходи курсы</p>
                        <p className={styles.item__text}>Читай статьи и смотри обучающие видео</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item__wrap}>
                        <div className={classNames(styles.item__img, styles.item__img__second)} />
                    </div>
                    <div className={styles.item__content}>
                        <p className={styles.item__number}>02</p>
                        <p className={styles.item__title}>Выполняй задания</p>
                        <p className={styles.item__text}>
                            Мы подберем задания специально под твой уровень
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item__wrap}>
                        <div className={classNames(styles.item__img, styles.item__img__third)} />
                    </div>
                    <div className={styles.item__content}>
                        <p className={styles.item__number}>03</p>
                        <p className={styles.item__title}>Достигай новых высот</p>
                        <p className={styles.item__text}>
                            Сохраняй прогресс, получай
                            достижения, повышай
                            профессиональные навыки
                        </p>
                    </div>
                </div>
            </div>
            <Button size="lg" className={styles.btn} onClick={() => { showDialog('register'); }}>Начать</Button>
        </div>
    </div>
);

export default StepSection;