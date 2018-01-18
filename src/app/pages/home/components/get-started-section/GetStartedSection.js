import React from 'react';

import { Button } from 'appComponents/core/button';

import styles from './styles.scss';

const GetStartedSection = () => (
    <div className={styles.section}>
        <p className={styles.title}>Все в твоих руках</p>
        <p className={styles.text}>
            Начни сегодня, чтобы завтра стать специалистом
        </p>
        <Button>Начать</Button>
    </div>
);

export default GetStartedSection;