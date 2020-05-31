import React from 'react';
import { Switch, Route} from "react-router-dom";
import * as ROUTES from './shared/routes';
import Blog from "./components/Blog";
import Admin from "./components/Admin";

export default class AppRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={ROUTES.ADMIN} component={Admin}/>
                <Route path={ROUTES.HOME} component={Blog}/>
            </Switch>
        );
    }
}
