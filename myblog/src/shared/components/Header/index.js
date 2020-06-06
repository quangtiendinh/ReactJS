import React from 'react';
import './index.css';
import SocialsMenu from "../SocialsMenu";

export default class Header extends React.Component {
    render() {
        return (
            <header id="header-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 logo-wrapper">
                            <div className="logo">
                                <a href="">
                                    <img src="https://freetuts.net/public/logo/logo.png?rand=3" alt=""/>
                                </a>
                            </div>
                            {/*./ logo-wrapper*/}
                        </div>
                        <div className="col-lg-8 col-md-8 top-menu-wrapper">
                           <SocialsMenu/>
                        </div>
                    </div>

                </div>
            </header>
        );
    }
}
