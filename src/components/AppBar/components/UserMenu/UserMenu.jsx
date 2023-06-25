import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import useAuth from '../../../hooks/UseAuth';
import { logOut } from '../../../redux/auth/AuthOperation';

export default function UserMenu() {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false)

    const handleLogoutClick = () => {
        setIsLoading(true)
        dispatch(logOut()).unwrap().finally(() => setIsLoading(false))
    }

    return (
        <>
            <Box>
                <Text>Hi, {user.name}!</Text>
                <Text>Email: {user.email}</Text>
            </Box>
            <Button
                type="button"
                colorScheme='gray'
                onClick={handleLogoutClick}
                disabled={isLoading}
                isLoading={isLoading}>
                Logout
            </Button>
        </>
    );
}

