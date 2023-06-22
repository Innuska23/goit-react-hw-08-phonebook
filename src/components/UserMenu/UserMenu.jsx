import useAuth from '../hooks/UseAuth';

import { ContainerUser } from './UserMenu.styled.jsx';

export default function UserMenu() {
    const { user } = useAuth();
    return (
        <ContainerUser>
            <p>Hi, {user.name} !</p>
            <button type="button">Log Out</button>
        </ContainerUser>
    );
}