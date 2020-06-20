import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import * as ROUTES from './shared/Routes';
import Blog from "./components/Blog";
import Admin from "./components/Admin";
import Auth from "./shared/components/Auth";

export default class AppRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={ROUTES.ADMIN} component={Admin}/>
                <Route path={ROUTES.LOGIN}>
                    <Redirect to={ROUTES.AUTH_LOGIN}/>
                </Route>
                <Route path={ROUTES.AUTH}>
                    <Auth/>
                </Route>
                <Route path={ROUTES.HOME} component={Blog}/>
            </Switch>
        );
    }
}
