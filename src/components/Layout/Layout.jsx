import { Box, Flex, Spinner } from '@chakra-ui/react';
import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Box padding='4' width="100%">
                <AppBar />
            </Box>

            <Box padding='4' width="100%">
                <Suspense fallback={<Flex justifyContent='center' width="100%"><Spinner /></Flex>}>
                    <Outlet />
                </Suspense>
            </Box>
        </>

    );
}