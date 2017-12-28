import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navigation from 'react-toolbox/lib/navigation';
import { List, ListItem } from 'react-toolbox/lib/list';
import AppBar from 'react-toolbox/lib/app_bar';

import { UsersPage } from 'appModules/admin/pages/users';
import { CoursesPage } from 'appModules/admin/pages/courses';
import { TrainingsPage } from 'appModules/admin/pages/trainings';
import { TestsPage } from 'appModules/admin/pages/tests';

import styles from './styles.scss';

const AdminModule = ({ match }) => (
    <div className={styles.page}>
        <div className={styles.layout}>
            <div className={styles.header}>
                <AppBar title="be | front" />
            </div>
            <div className={styles.main}>
                <div className={styles.nav}>
                    <Navigation>
                        <List selectable ripple>
                            <ListItem to="/admin/users/" caption="Пользователи" />
                            <ListItem to="/admin/courses" caption="Курсы" />
                            <ListItem to="/admin/trainings" caption="Тренировки" />
                            <ListItem to="/admin/tests" caption="Тесты" />
                        </List>
                    </Navigation>
                </div>
                <div className={styles.content}>
                    <Switch>
                        <Route exact path={`${match.url}/users`} component={UsersPage} />
                        <Route exact path={`${match.url}/courses`} component={CoursesPage} />
                        <Route exact path={`${match.url}/trainings`} component={TrainingsPage} />
                        <Route exact path={`${match.url}/tests`} component={TestsPage} />  
                        <Redirect to={`${match.url}/users`} />
                    </Switch>
                </div>
            </div>
        </div>
    </div>
);

export default AdminModule;