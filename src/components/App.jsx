import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'components/Layout/Layout';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './redux/auth/AuthOperation';

import PrivateRoute from './PrivateRoute';

import useAuth from './hooks/UseAuth';
import { Box, Container } from '@chakra-ui/react';
import PublicRoute from './PublicRoute';

const RegistrationForm = lazy(() => import('./pages/Registration'));
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
      <Container maxW='1200px' centerContent>
        <Box padding='4' width="100%">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to='/contacts' replace />} />

              <Route
                path="/register"
                element={
                  <PublicRoute
                    component={<RegistrationForm />}
                    redirectTo="/contacts"
                  />
                }
              />

              <Route
                path="/login"
                element={
                  <PublicRoute component={<Login />} redirectTo="/contacts" />
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={<Contacts />} redirectTo="/login" />
                }
              />

              <Route path="*" element={<Contacts />} />
            </Route>
          </Routes>
        </Box>

      </Container >
    )
  );
}

export default App;