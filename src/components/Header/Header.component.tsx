import { NavLink } from '@solidjs/router';
import { routeNames } from '../../constants/routeNames';
import { FaSolidCircleUser } from 'solid-icons/fa';

const Header = () => {
  return (
    <header class='bg-slate-900 p-3'>
      <nav class='text-slate-200 capitalize flex items-center justify-between max-w-6xl mx-auto'>
        <section>poke-info</section>
        <section class='space-x-4'>
          <NavLink href={routeNames.home}>
            {routeNames.home.replace('/', 'home')}
          </NavLink>
          <NavLink href={routeNames.login}>
            {routeNames.login.replace('/', '').trim()}
          </NavLink>
          <NavLink href={routeNames.register}>
            {routeNames.register.replace('/', '').trim()}
          </NavLink>
        </section>
        <section class='self-end'>
          <FaSolidCircleUser />
        </section>
      </nav>
    </header>
  );
};

export default Header;
