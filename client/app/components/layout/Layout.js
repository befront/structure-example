import React from 'react';

import { Button } from 'befront-components';

import styles from './styles.scss';

const Layout = ({ children }) => (
  <div>
    LAYOUT
    <Button>Text</Button>
    { children }
  </div>
);

export default Layout;