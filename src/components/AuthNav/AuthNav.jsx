import { ContainerAuthNav, NavLinkStyled, WrapperAuthNav } from './AuthNav.styled.jsx';

export default function AuthNav() {
    return (
        <ContainerAuthNav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <WrapperAuthNav>
                <NavLinkStyled to="/register">Register</NavLinkStyled>
                <NavLinkStyled to="/login">Logi In</NavLinkStyled>
            </WrapperAuthNav>
        </ContainerAuthNav>
    );
}