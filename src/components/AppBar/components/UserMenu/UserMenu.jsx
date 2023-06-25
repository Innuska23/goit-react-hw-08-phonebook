import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import useAuth from '../../../hooks/UseAuth';
import { logOut } from '../../../redux/auth/AuthOperation';

export default function UserMenu() {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <>
            <Box>
                <Text>Hi, {user.name}!</Text>
                <Text>Email: {user.email}</Text>
            </Box>
            <Button type="button" colorScheme='gray' onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </>
    );
}

