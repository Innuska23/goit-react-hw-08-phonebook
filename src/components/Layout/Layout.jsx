import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';
import { ContainerLayout } from './Layout.styled';


export default function Layout() {
    return (
        <>
            <AppBar />
            <ContainerLayout>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </ContainerLayout>
        </>
    );
}