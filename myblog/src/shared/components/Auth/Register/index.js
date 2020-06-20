import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../../../Routes";
import AuthHeader from "../AuthHeader";


export default class Register extends React.Component {
    render() {
        return (
            <div className="register-wrapper">
                <div className="inner-auth-content m-auto">
                    <AuthHeader title="Get started with QuangTien Boards"/>
                    {/*./ auth-header*/}
                    <div className="auth-form-content">
                        <form className="form auth-form">
                            <div className="form-group">
                                <label htmlFor="username">Name</label>
                                <input type="text" className="form-control"  name="name" placeholder="full name"/>
                            </div>
                            {/*./ form-group*/}
                            <div className="form-group">
                                <label htmlFor="username">Email</label>
                                <input type="email" className="form-control"  name="username" placeholder="exampla@gmail.com"/>
                            </div>
                            {/*./ form-group*/}
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control"  name="password" placeholder="password"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="confirmPassword">Confirm password</label>
                                    <input type="password" className="form-control"  name="confirmPassword" placeholder="password"/>
                                </div>
                            </div>
                            {/*./ form-group*/}
                            <div className="form-group">
                                <input type="submit" value="Register" className="btn btn-primary"/>
                            </div>
                            {/*./ form-group*/}
                            <div className="form-group text-center">
                                <p>
                                    <Link to={ROUTES.AUTH_LOGIN}>Sign into an existing account</Link>
                                </p>
                            </div>
                            {/*./ form-group*/}
                        </form>
                    </div>
                    {/*./ auth-form-content*/}
                </div>
            </div>
            // register-wrapper
        );
    }
}
