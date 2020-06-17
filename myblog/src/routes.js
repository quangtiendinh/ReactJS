import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import * as ROUTES from './shared/Routes';
import Blog from "./components/Blog";
import Admin from "./components/Admin";
import Login from "./shared/components/Auth/Login";

export default class AppRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={ROUTES.ADMIN} component={Admin}/>
                <Route path={ROUTES.LOGIN}>
                    <Redirect to={ROUTES.AUTH_LOGIN}/>
                </Route>
                <Route path={ROUTES.AUTH_LOGIN}>
                    <Login/>
                </Route>
                <Route path={ROUTES.HOME} component={Blog}/>
            </Switch>
        );
    }
}
