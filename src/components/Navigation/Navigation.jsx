import useAuth from '../hooks/UseAuth';

import { ContainerNavigation, NavLinkStyled } from './Navigation.styled.jsx';

export default function Navigation() {
    const { isLoggedIn } = useAuth();
    return (
        <ContainerNavigation>
            <NavLinkStyled to="/Home">Home</NavLinkStyled>
            {isLoggedIn && (
                <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
            )}
        </ContainerNavigation>
    );
}