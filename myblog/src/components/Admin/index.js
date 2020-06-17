import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../shared/Routes';
import Dashboard from "./Dashboard";
import Login from "../../shared/components/Auth/Login";

export default class Admin extends React.Component {
    render() {
        return (
            <div>
               <Switch>
                   <Route exact path={ROUTES.ADMIN}>
                       <Dashboard/>
                   </Route>
                   <Route path={ROUTES.DASHBOARD}>
                       <Dashboard/>
                   </Route>
               </Switch>
            </div>
        )
    }
}
