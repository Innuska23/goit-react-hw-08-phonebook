import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const ContainerNavigation = styled.nav`
    display: flex;
`;

export const NavLinkStyled = styled(NavLink)`
    padding: 10px;
    display: inline-block;
    font-size: 24px;
    font-weight: 500;
    border-bottom: 3px solid transparent;
    transition: color 0.2s ease-in-out;
    &:not(:last-child) {
    margin-right: 30px;
    }
    &.active,
    &:hover {
    color: #FED36A;
    border-bottom: 3px solid;
    }
`;