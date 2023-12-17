import React, { useEffect } from 'react';
import { Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import Loadable from 'react-loadable';

const AsyncPageNotFound = Loadable({
    loader: () => import(/* webpackChunkName: "PageNotFound" */ '../views/PageNotFound'),
    loading: () => <div className="hide">loading page...</div>,
});

const LandingPage = Loadable({
    loader: () => import(/* webpackChunkName: "Home" */ '../views/Home'),
    loading: () => <div className="hide">loading page...</div>,
});

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "Home" */ '../views/Home'),
    loading: () => <div className="hide">loading page...</div>,
});

const About = Loadable({
    loader: () => import(/* webpackChunkName: "About" */ '../views/About'),
    loading: () => <div className="hide">loading page...</div>,
});

const Contact = Loadable({
    loader: () => import(/* webpackChunkName: "Contact" */ '../views/Contact'),
    loading: () => <div className="hide">loading page...</div>,
});

const Projects = Loadable({
    loader: () => import(/* webpackChunkName: "Projects" */ '../views/Projects'),
    loading: () => <div className="hide">loading page...</div>,
});

const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/projects', element: <Projects /> },
    { path: '*', element: <AsyncPageNotFound /> },
];

const App = () => {
    const location = useLocation();

    useEffect(() => {
        // Your logic for route change
        console.log('data from route changes');
    }, [location]);

    return (
        <>
            <div>
                <Routes>
                    {routes.map(route => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </div>
        </>
    );
};

export default App;
