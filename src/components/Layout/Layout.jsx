import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';

// import MUI from 'components/MUI';

export default function Layout() {
    return (
        <>
            <AppBar />
            <div style={{ marginTop: '60px', justifyContent: "center", alignItems: "center", display: "flex" }}>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
}