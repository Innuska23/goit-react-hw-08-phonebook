import useAuth from '../hooks/UseAuth';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import { Header } from './AppBar.styled';

export default function AppBar() {
    <Navigation />;
    const { isLoggedIn } = useAuth();
    return <Header>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Header>;
}