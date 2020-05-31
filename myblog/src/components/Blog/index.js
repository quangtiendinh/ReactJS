import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import { Switch, Route } from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import * as ROUTES from '../../shared/routes';
import './index.css';

export default class Blog extends React.Component {

    render() {
        return(
            <div className="home-wrapper">
                <Header/>
                {/*./ header-wrapper*/}
                <Logo/>
                {/*./ logo-wrapper*/}
                <Navbar/>
                {/*./ navbar-wrapper*/}

                <div className="content-wrapper">
                    <div className="container">
                        <Switch>
                            <Route exact path={ROUTES.HOME}>
                                <Home/>
                            </Route>
                            <Route path={ROUTES.ABOUT}>
                                <About/>
                            </Route>
                            <Route path={ROUTES.CONTACT}>
                                <Contact/>
                            </Route>
                        </Switch>
                    </div>
                </div>
                {/*./ content-wrapper*/}

                <Footer/>
                {/*./ footer-wrapper*/}
            </div>
            /*./ hom-wrapper*/
        );
    }
}
