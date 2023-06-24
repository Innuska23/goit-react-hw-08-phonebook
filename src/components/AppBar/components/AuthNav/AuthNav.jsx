import { Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
    return (
        <Flex borderRadius='md' boxShadow='purple' p={4} justifyContent='space-between' alignItems='center'>
            <ChakraLink as={NavLink} to='/home'>
                <Text fontSize='2xl'>Home</Text>
            </ChakraLink>

            <Flex gap={6}>
                <ChakraLink as={NavLink} to='/register'>
                    <Text fontSize='xl'>Register</Text>
                </ChakraLink>

                <ChakraLink as={NavLink} to='/login' _activeLink={{ color: '#81E6D9' }}>
                    <Text fontSize='xl'>Login</Text>
                </ChakraLink>
            </Flex>
        </Flex>
    );
}