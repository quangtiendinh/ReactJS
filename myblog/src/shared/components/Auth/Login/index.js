import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
import * as ROUTES from '../../../Routes';
import AuthHeader from "../AuthHeader";

export default class Login extends React.Component {
    render() {
        return (
           <div className="login-wrapper">
               <div className="inner-auth-content m-auto">
                   <AuthHeader title="Sign in to QuangTienIT.com"/>
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
                                   <Link to={ROUTES.AUTH_PASSWORD_RESET}>Forgot your password?</Link>
                               </p>
                               <p>
                                   <span>Don't have an account? </span>
                                   <Link to={ROUTES.AUTH_REGISTER}><strong>Sing Up?</strong></Link>
                               </p>
                           </div>
                           {/*./ form-group*/}
                       </form>
                   </div>
                   {/*./ auth-form-content*/}
               </div>
           </div>
            // login-wrapper
        )
    }
}
