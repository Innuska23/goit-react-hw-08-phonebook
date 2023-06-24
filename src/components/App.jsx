import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'components/Layout/Layout';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './redux/auth/AuthOperation';

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

import useAuth from './hooks/UseAuth';
import { Box, Container } from '@chakra-ui/react';
import AppBar from './AppBar/AppBar';

const Home = lazy(() => import('./pages/Home'));
const RegistrationForm = lazy(() => import('./pages/RegistrationForm'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const { isRefreshing } = useAuth();

  return (
    !isRefreshing && (
      <Container maxW='2lg' centerContent>


        <Box padding='4' width="100%">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<RegistrationForm />}
                    redirectTo="/contacts"
                  />
                }
              />

              <Route
                path="/login"
                element={
                  <RestrictedRoute component={<Login />} redirectTo="/contacts" />
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={<Contacts />} redirectTo="/login" />
                }
              />

              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </Box>

      </Container >
    )
  );
}

export default App;