import { ContainerAuthNav } from './AuthNav.styled.js';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
    return (
        <ContainerAuthNav>
            <li>
                <NavLink to="/register">Register</NavLink>
            </li>
            <li>
                <NavLink to="/login">Logi In</NavLink>
            </li>
        </ContainerAuthNav>
    );
}