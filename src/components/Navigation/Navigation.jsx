import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';

import { ContainerNavigation } from './Navigation.styled.jsx';

export default function Navigation() {
    const { isLoggedIn } = useAuth();
    return (
        <ContainerNavigation>
            <li>
                <NavLink to="/Home">Home</NavLink>
            </li>
            {isLoggedIn && (
                <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                </li>
            )}
        </ContainerNavigation>
    );
}