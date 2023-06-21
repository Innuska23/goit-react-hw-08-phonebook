import useAuth from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu.jsx';
import AuthNav from 'components/AuthNav/AuthNav.jsx';
import Navigation from 'components/Navigation/Navigation.jsx';
import { Header } from './AppBar.styled.js';

export default function AppBar() {
    <Navigation />;
    const { isLoggedIn } = useAuth();
    return <Header>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Header>;
}