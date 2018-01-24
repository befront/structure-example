import React from 'react';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { StartSection } from './components/start-section';
import { ActivitySection } from './components/activity-section';
import { StepSection } from './components/step-section';
import { HowToSection } from './components/how-to-section';
import { GetStartedSection } from './components/get-started-section';

import styles from './styles.scss';

const HomePage = ({ showDialog }) => (
    <div className={styles.page}>
        <Header showDialog={showDialog} />
        <div className={styles.content}>
            {/* <StartSection /> */}
            <ActivitySection />
            <StepSection />
            <HowToSection />
            <GetStartedSection />
        </div>
        <Footer />
    </div>
);

export default HomePage;