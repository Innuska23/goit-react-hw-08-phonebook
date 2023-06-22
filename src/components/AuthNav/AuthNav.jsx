import { ContainerAuthNav, NavLinkStyled } from './AuthNav.styled.jsx';

export default function AuthNav() {
    return (
        <ContainerAuthNav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <div>
                <NavLinkStyled to="/register">Register</NavLinkStyled>
                <NavLinkStyled to="/login">Logi In</NavLinkStyled>
            </div>
        </ContainerAuthNav>
    );
}