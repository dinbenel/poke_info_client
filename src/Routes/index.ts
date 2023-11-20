import { NotFound } from '../components';
import { routeNames } from '../constants/routeNames';
import { Home, Login, Pokemon, Register } from '../pages';

export const routes = [
  {
    path: routeNames.home,
    component: Home,
  },
  {
    path: routeNames.login,
    component: Login,
  },
  {
    path: routeNames.register,
    component: Register,
  },
  {
    path: routeNames.pokemon,
    component: Pokemon,
  },
  {
    path: routeNames.notFound,
    component: NotFound,
  },
];
