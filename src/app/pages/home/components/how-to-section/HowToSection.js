import React from 'react';

import styles from './styles.scss';

const HowToSection = () => (
    <div className={styles.section}>
        <p className={styles.title}>Учиться проще простого!</p>
        <div className={styles.content}>
            <div className={styles.item}>
                <img src="" className={styles.item__img} />
                <p className={styles.item__title}>Занимайся где угодно</p>
                <p className={styles.item__text}>
                    Все, что тебе нужно — компьютер
                    и доступ в интернет
                </p>
            </div>
            <div className={styles.item}>
                <img src="" className={styles.item__img} />
                <p className={styles.item__title}>Закрепляй знания</p>
                <p className={styles.item__text}>
                    Ненавязчивые повторения
                    пройденного материала
                    помогут запомнить
                </p>
            </div>
            <div className={styles.item}>
                <img src="" className={styles.item__img} />
                <p className={styles.item__title}>Задавай вопросы</p>
                <p className={styles.item__text}>
                    Что-то непонятно? Задай свой
                    вопрос сообществу
                </p>
            </div>
        </div>
    </div>
);

export default HowToSection;