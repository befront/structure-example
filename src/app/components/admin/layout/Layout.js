import * as React from 'react';
import { Route } from 'react-router-dom';

import Navigation from 'react-toolbox/lib/navigation';
import { List, ListItem } from 'react-toolbox/lib/list';
import AppBar from 'react-toolbox/lib/app_bar';

import { UsersPage } from 'appModules/admin/pages/users';
import { CoursesPage } from 'appModules/admin/pages/courses';
import { TrainingsPage } from 'appModules/admin/pages/trainings';
import { TestsPage } from 'appModules/admin/pages/tests';

import styles from './styles.scss';

const Layout = ({ children, match }) => (
    <div className={styles.layout}>
        <div className={styles.header}>
            <AppBar title="be|front" />
        </div>
        <div className={styles.main}>
            <div className={styles.nav}>
                <Navigation>
                    <List selectable ripple>
                        <ListItem caption="Пользователи" />
                        <ListItem caption="Курсы" />
                        <ListItem caption="Тренировки" />
                        <ListItem caption="Тесты" />
                    </List>
                </Navigation>
            </div>
            <div className={styles.content}>
                <Route exact path={`${match.url}/users`} component={UsersPage} />
                <Route exact path={`${match.url}/courses`} component={CoursesPage} />
                <Route exact path={`${match.url}/trainings`} component={TrainingsPage} />
                <Route exact path={`${match.url}/tests`} component={TestsPage} />  
            </div>
        </div>
        <div className={styles.footer}>
            <AppBar title="© befront, 2017 Все права защищены" />
        </div>
    </div>
);

export default Layout;