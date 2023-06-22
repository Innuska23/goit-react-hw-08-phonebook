import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const WrapHeader = styled.header`
    padding: 0 30px;
    margin-bottom: 20px;
    z-index: 1000;
    -webkit-box-shadow: 0px 11px 15px -8px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 11px 15px -8px rgba(66, 68, 90, 1);
    box-shadow: 0px 11px 15px -8px rgba(66, 68, 90, 1);
`;

export const ContainerAuthNav = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;
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
export const AuthContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;