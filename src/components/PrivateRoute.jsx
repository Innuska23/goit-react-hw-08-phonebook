import useAuth from './hooks/UseAuth';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
    component: Component,
    redirectTo = '/login',
}) {
    const { isLoggedIn, isRefreshing } = useAuth();
    return isLoggedIn || isRefreshing ? Component : <Navigate to={redirectTo} />;
}