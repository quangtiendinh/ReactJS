import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from '../../../Routes';
import AuthHeader from "../AuthHeader";

export default class PasswordReset extends React.Component {
    render() {
        return (
            <div className="reset-password-wrapper">
                <div className="inner-auth-content m-auto">
                    <AuthHeader title="Reset your Password"/>
                    <div className="auth-form-content">
                        <form className="form auth-form">
                            <div className="form-group">
                                <label htmlFor="username">Email</label>
                                <input type="email" className="form-control"  name="username" placeholder="exampla@gmail.com"/>
                            </div>
                            {/*./ form-group*/}
                            <div className="form-group">
                                <input type="submit" value="Send a reset link" className="btn btn-primary"/>
                            </div>
                            {/*./ form-group*/}
                            <div className="form-group text-center">
                                <p>
                                    <Link to={ROUTES.AUTH_LOGIN}>Cancel</Link>
                                </p>
                            </div>
                            {/*./ form-group*/}
                        </form>
                    </div>
                    {/*./ auth-form-content*/}
                </div>
            </div>
            // reset-password-wrapper
        );
    }
}
