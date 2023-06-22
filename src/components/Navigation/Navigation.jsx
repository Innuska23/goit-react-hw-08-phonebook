// import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';

import { ContainerNavigation, NavLinkStyled } from './Navigation.styled.jsx';

export default function Navigation() {
    const { isLoggedIn } = useAuth();
    return (
        <ContainerNavigation>
            <li>
                <NavLinkStyled to="/Home">Home</NavLinkStyled>
            </li>
            {isLoggedIn && (
                <li>
                    <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
                </li>
            )}
        </ContainerNavigation>
    );
}