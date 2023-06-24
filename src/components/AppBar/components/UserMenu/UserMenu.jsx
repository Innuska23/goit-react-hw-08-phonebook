import useAuth from '../../../hooks/UseAuth';
import { logOut } from '../../../redux/auth/AuthOperation';
import { useDispatch } from 'react-redux';

import { ContainerUser, ButtonLogIn, UserText } from './UserMenu.styled.jsx';

export default function UserMenu() {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <ContainerUser>
            <UserText>Hi, {user.name} !</UserText>
            <UserText>Email: {user.email}</UserText>
            <ButtonLogIn type="button" onClick={() => dispatch(logOut())}>
                Log Out
            </ButtonLogIn>
        </ContainerUser>
    );
}

