import { HomePageContainer } from 'appContainers/pages/home';
import { CoursesPageContainer } from 'appContainers/pages/courses';

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePageContainer
    },
    {
        path: '/courses',
        exact: true,
        component: CoursesPageContainer
    }
];

export default routes;