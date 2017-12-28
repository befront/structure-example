import { MainModule } from 'appModules/main';
import { AdminModule } from 'appModules/admin';

const routes = [
    {
        path: '/',
        exact: true,
        component: MainModule
    },
    {
        path: '/admin',
        component: AdminModule
    }
];

export default routes;