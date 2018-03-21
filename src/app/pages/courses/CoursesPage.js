import React from 'react';

import styles from './styles.scss';

const CoursesPage = ({ courses }) => (
    <div className={styles.page}>
        <h1 className={styles.title}>Курсы</h1>
        <div className={styles.list}>
            { courses.map((course, index) => (
                <div key={course._id} className={styles.card}>
                    <p className={styles.cardTitle}>{ course.name }</p>
                    <p className={styles.cardTopics}>
                        Количество тем в курсе: { course.topics.length }
                    </p>
                    <button className={styles.cardBtn}>Начать</button>
                </div>
            ))}
        </div>
    </div>
);

export default CoursesPage;