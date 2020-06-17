import React from 'react';
import './index.css';

export default class Login extends React.Component {
    render() {
        return (
           <div id="auth-wrapper" className="justify-content-center d-flex align-items-center">
                <div className="container">
                    <div className="inner-auth-content m-auto">
                        <div className="auth-header">
                            <div className="logo">
                                <a href="">
                                    <img src="https://freetuts.net/public/logo/logo.png?rand=3" alt="" className="img img-response"/>
                                </a>
                            </div>
                            <h5 className="text-header">Sign in to QuangTienIT.com</h5>
                        </div>
                        {/*./ auth-header*/}
                        <div className="auth-form-content">
                            <form className="form auth-form">
                                <div className="form-group">
                                    <label htmlFor="username">Email</label>
                                    <input type="email" className="form-control"  name="username" placeholder="exampla@gmail.com"/>
                                </div>
                                {/*./ form-group*/}
                                <div className="form-group">
                                    <label htmlFor="username">Password</label>
                                    <input type="password" className="form-control"  name="password" placeholder="password"/>
                                </div>
                                {/*./ form-group*/}
                                <div className="form-group">
                                    <input type="submit" value="Log In" className="btn btn-primary"/>
                                </div>
                                {/*./ form-group*/}
                                <div className="form-group text-center">
                                    <p>
                                        <a href="">Forgot your password?</a>
                                    </p>
                                    <p>
                                        <span>Don't have an account? </span>
                                        <a href=""><strong>Sing Up?</strong></a>
                                    </p>
                                </div>
                                {/*./ form-group*/}
                            </form>
                        </div>
                        {/*./ auth-form-content*/}
                    </div>
                </div>
               {/*./ container*/}
           </div>
            // login-wrapper
        )
    }
}
