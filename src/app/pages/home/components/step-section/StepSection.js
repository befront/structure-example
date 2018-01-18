import React from 'react';

import { Button } from 'appComponents/core/button';

import styles from './styles.scss';

const StepSection = () => (
    <div className={styles.section}>
        <p className={styles.title}>Достигай новых высот с BeFront</p>
        <div className={styles.content}>
            <div className={styles.item}>
                <img src="" className={styles.item__img} />
                <p className={styles.item__number}>01</p>
                <p className={styles.item__title}>Проходи курсы</p>
                <p className={styles.item__text}>Читай статьи и смотри обучающие видео</p>
            </div>
            <div className={styles.item}>
                <img src="" className={styles.item__img} />
                <p className={styles.item__number}>02</p>
                <p className={styles.item__title}>Выполняй задания</p>
                <p className={styles.item__text}>
                    Мы подберем задания специально под твой уровень
                </p>
            </div>
            <div className={styles.item}>
                <img src="" className={styles.item__img} />
                <p className={styles.item__number}>03</p>
                <p className={styles.item__title}>Достигай новых высот</p>
                <p className={styles.item__text}>
                    Сохраняй прогресс, получай
                    достижения, повышай
                    профессиональные навыки
                </p>
            </div>
        </div>
        <Button>Начать</Button>
    </div>
);

export default StepSection;