import useAuth from '../hooks/UseAuth';
import UserMenu from './components/UserMenu/UserMenu';
import AuthNav from './components/AuthNav/AuthNav.jsx';
import { Flex } from '@chakra-ui/react';

export default function AppBar() {
    const { isLoggedIn } = useAuth();

    return <Flex borderRadius='md' boxShadow='purple' p={4} justifyContent='space-between' alignItems='center'>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>;
}