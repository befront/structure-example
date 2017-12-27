import React from 'react';

import { Header } from './components/header';
import { Footer } from './components/footer';

import styles from './styles.scss';

const StartPage = () => (
  <div className={styles.page}>
    <Header />
    <div className={styles.content}>
      CONTENT
    </div>
    <Footer />
  </div>
);

export default StartPage;