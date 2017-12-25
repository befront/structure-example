// @flow

import * as React from 'react';

import styles from './styles.scss';

type Props = {
  children: React.Node
};

const Layout = ({ children }: Props) => (
  <div className={styles.layout}>
    LAYOUT
    { children }
  </div>
);

Layout.defaultProps = {
  children: <div />
};

export default Layout;