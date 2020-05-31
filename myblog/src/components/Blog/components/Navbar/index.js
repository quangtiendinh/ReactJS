import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from '../../../../shared/routes';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-wrapper section">
                <nav className="navbar navbar-expand-sm bg-light">
                    <div className="container">
                        <ul className="navbar-nav nav-main-menu mr-auto">
                            <li className="nav-item">
                                <Link to={ROUTES.HOME} className="nav-link">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={ROUTES.POSTS} className="nav-link">Tin tức</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sản phẩm</a>
                            </li>
                        </ul>
                        {/*./ nav-main-menu*/}
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    {/*./ container*/}
                </nav>
            </div>
        );
    }
}
