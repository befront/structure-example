import React from 'react';
import classNames from 'classnames';

import gridStyles from 'appAssets/styles/grid.scss';
import styles from './styles.scss';

import gameImgSrc from './img/game.png';
import docsImgSrc from './img/docs.png';
import mapImgSrc from './img/map.png';

const ActivitySection = () => (
    <div className={styles.section}>
        <div className={gridStyles.containerFluid}>
            <div className={styles.list}>
                <div className={styles.item}>
                    <img
                        src={gameImgSrc}
                        className={classNames(styles.item__img, styles.item__img__game)} 
                    />
                    <p className={styles.item__title}>Учись играя</p>
                    <p className={styles.item__text}>
                        Проходи задания и получай бонусы.
                        Используй достижения для открытия
                        новых уроков
                    </p>
                </div>
                <div className={styles.item}>
                    <img
                        src={docsImgSrc}
                        className={classNames(styles.item__img, styles.item__img__docs)}
                    />
                    <p className={styles.item__title}>Множество заданий</p>
                    <p className={styles.item__text}>
                        Задания на любой вкус и для любого
                        уровня навыков. От новичка
                        до эксперта
                    </p>
                </div>
                <div className={styles.item}>
                    <img
                        src={mapImgSrc}
                        className={classNames(styles.item__img, styles.item__img__map)}
                    />
                    <p className={styles.item__title}>Твой путь к идеальному коду</p>
                    <p className={styles.item__text}>
                        Проходи задания и получай бонусы.
                        Используй достижения для открытия
                        новых уроков
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default ActivitySection;