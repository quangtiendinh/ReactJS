import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <header id="header-wrapper">
                <nav className="navbar navbar-expand-sm bg-light">
                    <div className="container">
                        <ul className="navbar-nav top-nav-menu mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">Giới thiệu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Liên hệ</Link>
                            </li>
                        </ul>
                        {/*./ top-nav-menu*/}

                        <ul className="navbar-nav nav-auth">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Đăng nhập</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Đăng ký</a>
                            </li>
                        </ul>

                    </div>
                    {/*./ container*/}
                </nav>
            </header>
        );
    }
}
