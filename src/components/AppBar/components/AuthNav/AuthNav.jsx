import { Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function AuthNav() {
    return (
        <Flex justifyContent='space-between' alignItems='center'>
            <ChakraLink as={Link} to='/home'>
                <Text fontSize='2xl'>Home</Text>
            </ChakraLink>

            <Flex gap={6}>
                <ChakraLink as={Link} to='/register'>
                    <Text fontSize='xl'>Register</Text>
                </ChakraLink>

                <ChakraLink as={Link} to='/login'>
                    <Text fontSize='xl'>Login</Text>
                </ChakraLink>
            </Flex>
        </Flex>
    );
}