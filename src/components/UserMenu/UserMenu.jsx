import useAuth from 'hooks/useAuth';

import { ContainerUser } from './UserMenu.styled.js';

export default function UserMenu() {
    const { user } = useAuth();
    return (
        <ContainerUser>
            <p>Hi, {user.name} !</p>
            <button type="button">Log Out</button>
        </ContainerUser>
    );
}