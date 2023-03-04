import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
    const isAuth = false
    return (
        <Router>

            {isAuth && authRoutes.map(({path, Component})=>
                <Route key={path}  path={path} component={Component} exact/>
            )}

            {publicRoutes.map(({path, Component})=>
                <Route key={path}  path={path} component={Component} exact/>
            )}

        </Router>
    );
};

export default AppRouter;