import useAuth from '../hooks/UseAuth';
import UserMenu from './components/UserMenu/UserMenu';
import AuthNav from './components/AuthNav/AuthNav.jsx';

export default function AppBar() {
    const { isLoggedIn } = useAuth();

    return <>{isLoggedIn ? <UserMenu /> : <AuthNav />}</>;
}