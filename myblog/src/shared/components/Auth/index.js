import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import * as ROUTES from '../../Routes';
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import PasswordReset from "./PasswordReset";
export default class Auth extends React.Component {
    render() {
        return (
            <div id="auth-wrapper" className="justify-content-center d-flex align-items-center">
                <div className="container">
                    <Switch>
                        <Route path={ROUTES.AUTH_LOGIN}>
                            <Login/>
                        </Route>
                        <Route path={ROUTES.AUTH_LOGOUT}>
                            <Logout/>
                        </Route>
                        <Route path={ROUTES.AUTH_REGISTER}>
                            <Register/>
                        </Route>
                        <Route path={ROUTES.AUTH_PASSWORD_RESET}>
                            <PasswordReset/>
                        </Route>
                    </Switch>
                </div>
                {/*./ container*/}
            </div>
            // auth-wrapper
        )
    }
}
