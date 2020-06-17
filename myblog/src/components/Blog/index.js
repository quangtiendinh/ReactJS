import React from 'react';
import Header from "../../shared/components/Header";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import { Switch, Route } from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import * as ROUTES from '../../shared/Routes';
import './index.css';
import Post from "./Post";
import Categories from "./Categories";

export default class Blog extends React.Component {

    render() {
        return(
            <div className="home-wrapper">
                <Header/>
                {/*./ header-wrapper*/}
                <Navbar/>
                {/*./ navbar-wrapper*/}

                <div className="content-wrapper">
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
                        <Route path={ROUTES.POSTS}>
                            <Post/>
                        </Route>
                        <Route path={ROUTES.CATEGORIES}>
                            <Categories/>
                        </Route>
                    </Switch>
                </div>
                {/*./ content-wrapper*/}

                <Footer/>
                {/*./ footer-wrapper*/}
            </div>
            /*./ hom-wrapper*/
        );
    }
}
