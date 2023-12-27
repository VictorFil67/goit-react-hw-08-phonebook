import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../Pages/LoginPage/LoginPage';
import { Register } from '../Pages/RegisterPage/RegisterPage';
import { Navigation } from './Navigation/Navigation';
import { ContactsPage } from '../Pages/ContactsPage/ContactsPage';
import { NotFound } from 'Pages/NotFound';
import { refreshThunk } from 'store/auth/operations';
import { PrivateRoute } from './routesConfig/PrivateRoute';
import { PublicRoute } from './routesConfig/PublicRoute';
import { selectIsRefresh } from '../store/auth/selectors';
import { Loader } from '../components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchContacts());
    dispatch(refreshThunk());
  }, [dispatch]);

  const isRefresh = useSelector(selectIsRefresh);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
        marginLeft: '100px',
      }}
    >
      {isRefresh ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
};
