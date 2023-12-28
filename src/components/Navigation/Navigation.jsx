import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../store/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav className={s.nav}>
        {!isLoggedIn ? (
          <>
            <NavLink className={s.link} to="/register">
              Sign in
            </NavLink>
            <NavLink className={s.link} to="/login">
              Login
            </NavLink>
          </>
        ) : (
          <UserMenu />
        )}
        {/* <NavLink className={s.link} to="/contacts">
          ContactsPage
        </NavLink> */}
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};
