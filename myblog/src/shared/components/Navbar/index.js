import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
import * as ROUTES from '../../routes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-wrapper section" id="main-menu-wrapper">
                <nav className="navbar navbar-expand-sm">
                    <div className="container">
                        <ul className="navbar-nav nav-main-menu mr-auto">
                            <li className="nav-item">
                                <Link to={ROUTES.HOME} className="nav-link">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={ROUTES.POSTS} className="nav-link">Tin tức</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={ROUTES.CATEGORIES} className="nav-link">
                                    Sản phẩm
                                </Link>
                            </li>
                        </ul>
                        {/*./ nav-main-menu*/}
                        <form className="form-inline search-form">
                            <input className="form-control" type="search" placeholder="Tìm kiếm..."
                                   aria-label="Search" />
                            <button className="btn btn-search" type="submit">
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </form>
                        {/*./ search-form*/}
                    </div>
                    {/*./ container*/}
                </nav>
            </div>
        );
    }
}
