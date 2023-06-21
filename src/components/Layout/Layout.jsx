import Suspense from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';

import { ContainerLayout } from './Layout.styled';

export default function Layout({ children }) {
    return (
        <ContainerLayout>
            <h1>Layout</h1>
            <AppBar />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense>
        </ContainerLayout>
    );
}