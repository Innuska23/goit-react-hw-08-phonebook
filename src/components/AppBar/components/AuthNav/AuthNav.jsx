import { Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
    return (<>
        <Text fontSize='2xl'>Phonebook</Text>

        <Flex gap={6}>
            <ChakraLink as={NavLink} to='/register' _activeLink={{ color: '#81E6D9' }}>
                <Text fontSize='xl'>Register</Text>
            </ChakraLink>

            <ChakraLink as={NavLink} to='/login' _activeLink={{ color: '#81E6D9' }}>
                <Text fontSize='xl'>Login</Text>
            </ChakraLink>
        </Flex>
    </>
    );
}