import React from "react";
import './index.css';
import Banner from "../Banner";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faHandPointRight} from "@fortawesome/free-solid-svg-icons";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-9 sidebar-container">
                <Banner src="https://cafebitcoin.org/wp-content/uploads/2018/01/banner-remitano-300x250.png" href="" title="Remitano" width="300" height="250"/>
                <div className="sidebar-widget widget-content widget-courses">
                    <div className="widget-header">
                        <h4 className="tex-header widget-text-header">
                            <FontAwesomeIcon icon={faBars}/>
                            <span>khóa học lập trình</span>
                        </h4>
                    </div>
                    {/*./ post-header*/}
                    <div className="widget-body">
                        <div className="inner-content">
                            <ul className="list-group list-unstyled">
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faHandPointRight}/>
                                        <span>Active item</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faHandPointRight}/>
                                        <span>Second item</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faHandPointRight}/>
                                        <span>Third item</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*./ widget-body*/}
                </div>
                {/*./ widget-courses*/}

                <div className="sidebar-widget widget-content widget-news">
                    <div className="widget-header">
                        <h4 className="tex-header widget-text-header">
                            <FontAwesomeIcon icon={faBars}/>
                            <span>Bài viết mới</span>
                        </h4>
                    </div>
                    {/*./ post-header*/}
                    <div className="widget-body">
                        <div className="inner-content">
                            <div className="media post-item">
                                <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/50889764_2253631094912976_6090191672140890112_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=Iy6XwlnNrH4AX-y3KWE&_nc_ht=scontent.fsgn5-2.fna&oh=a0e0f164c426b4807d34276fb45d7521&oe=5EF9C200" className="mr-3 avatar" alt=""/>
                                <div className="media-body">
                                    <h5 className="post-title">
                                        [Đại lễ 30/4] - Tinohost hoàn tiền 120% khi đăng ký dịch / gia hạn dịch vụ
                                    </h5>
                                </div>
                            </div>

                            <div className="media post-item">
                                <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/50889764_2253631094912976_6090191672140890112_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=Iy6XwlnNrH4AX-y3KWE&_nc_ht=scontent.fsgn5-2.fna&oh=a0e0f164c426b4807d34276fb45d7521&oe=5EF9C200" className="mr-3 avatar" alt=""/>
                                <div className="media-body">
                                    <h5 className="post-title">
                                        Tinohost giảm 30% và nhân đôi thời gian sử dụng hosting khi chuyển dữ liệu từ nơi
                                    </h5>
                                </div>
                            </div>

                            <div className="media post-item">
                                <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/50889764_2253631094912976_6090191672140890112_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=Iy6XwlnNrH4AX-y3KWE&_nc_ht=scontent.fsgn5-2.fna&oh=a0e0f164c426b4807d34276fb45d7521&oe=5EF9C200" className="mr-3 avatar" alt=""/>
                                <div className="media-body">
                                    <h5 className="post-title">
                                        Tinohost giảm 30% và nhân đôi thời gian
                                    </h5>
                                </div>
                            </div>

                            <div className="media post-item">
                                <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/50889764_2253631094912976_6090191672140890112_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=Iy6XwlnNrH4AX-y3KWE&_nc_ht=scontent.fsgn5-2.fna&oh=a0e0f164c426b4807d34276fb45d7521&oe=5EF9C200" className="mr-3 avatar" alt=""/>
                                <div className="media-body">
                                    <h5 className="post-title">
                                        Tinohost giảm 30% và nhân đôi thời gian sử dụng hosting khi chuyển dữ liệu từ nơi
                                    </h5>
                                </div>
                            </div>

                            <div className="media post-item">
                                <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/50889764_2253631094912976_6090191672140890112_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=Iy6XwlnNrH4AX-y3KWE&_nc_ht=scontent.fsgn5-2.fna&oh=a0e0f164c426b4807d34276fb45d7521&oe=5EF9C200" className="mr-3 avatar" alt=""/>
                                <div className="media-body">
                                    <h5 className="post-title">
                                        Tinohost giảm 30% và nhân đôi thời gian sử dụng hosting khi chuyển dữ liệu từ nơi
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*./ widget-body*/}
                </div>
                {/*./ widget-courses*/}

                <div className="sidebar-widget widget-content widget-news">
                    <div className="widget-header">
                        <ul className="nav nav-tabs">
                            <li>
                                <a href="#tab-trends" data-toggle="tab" className="active">Xu hướng</a>
                            </li>
                            <li>
                                <a href="#tab-comments" data-toggle="tab">Bình luận</a>
                            </li>
                            <li>
                                <a href="#tab-news-latest" data-toggle="tab">Mới nhất</a>
                            </li>
                        </ul>
                    </div>
                    <div className="widget-body">
                        <div className="tab-content">
                            <div id="tab-trends" className="tab-pane in active">
                                <div className="media post-item">
                                    <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/50889764_2253631094912976_6090191672140890112_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=Iy6XwlnNrH4AX-y3KWE&_nc_ht=scontent.fsgn5-2.fna&oh=a0e0f164c426b4807d34276fb45d7521&oe=5EF9C200" className="mr-3 avatar" alt=""/>
                                    <div className="media-body">
                                        <h5 className="post-title">
                                            Tinohost giảm 30% và nhân đôi thời gian sử dụng hosting khi chuyển dữ liệu từ nơi
                                        </h5>
                                    </div>
                                </div>
                                <div className="media post-item">
                                    <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/50889764_2253631094912976_6090191672140890112_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=Iy6XwlnNrH4AX-y3KWE&_nc_ht=scontent.fsgn5-2.fna&oh=a0e0f164c426b4807d34276fb45d7521&oe=5EF9C200" className="mr-3 avatar" alt=""/>
                                    <div className="media-body">
                                        <h5 className="post-title">
                                            Tinohost giảm 30% và nhân đôi thời gian sử dụng hosting khi chuyển dữ liệu từ nơi
                                        </h5>
                                    </div>
                                </div>
                                <div className="media post-item">
                                    <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/50889764_2253631094912976_6090191672140890112_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=Iy6XwlnNrH4AX-y3KWE&_nc_ht=scontent.fsgn5-2.fna&oh=a0e0f164c426b4807d34276fb45d7521&oe=5EF9C200" className="mr-3 avatar" alt=""/>
                                    <div className="media-body">
                                        <h5 className="post-title">
                                            Tinohost giảm 30% và nhân đôi thời gian sử dụng hosting khi chuyển dữ liệu từ nơi
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-comments" className="tab-pane fade">
                                <div className="media post-item">
                                    <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/50889764_2253631094912976_6090191672140890112_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=Iy6XwlnNrH4AX-y3KWE&_nc_ht=scontent.fsgn5-2.fna&oh=a0e0f164c426b4807d34276fb45d7521&oe=5EF9C200" className="mr-3 avatar" alt=""/>
                                    <div className="media-body">
                                        <h5 className="post-title">
                                            Tinohost giảm 30% và nhân đôi thời gian sử dụng hosting khi chuyển dữ liệu từ nơi
                                        </h5>
                                    </div>
                                </div>
                                <div className="media post-item">
                                    <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/50889764_2253631094912976_6090191672140890112_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=Iy6XwlnNrH4AX-y3KWE&_nc_ht=scontent.fsgn5-2.fna&oh=a0e0f164c426b4807d34276fb45d7521&oe=5EF9C200" className="mr-3 avatar" alt=""/>
                                    <div className="media-body">
                                        <h5 className="post-title">
                                            Tinohost giảm 30% và nhân đôi thời gian sử dụng hosting khi chuyển dữ liệu từ nơi
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-news-latest" className="tab-pane fade">
                                <div className="media post-item">
                                    <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/50889764_2253631094912976_6090191672140890112_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=Iy6XwlnNrH4AX-y3KWE&_nc_ht=scontent.fsgn5-2.fna&oh=a0e0f164c426b4807d34276fb45d7521&oe=5EF9C200" className="mr-3 avatar" alt=""/>
                                    <div className="media-body">
                                        <h5 className="post-title">
                                            Tinohost giảm 30% và nhân đôi thời gian sử dụng hosting khi chuyển dữ liệu từ nơi
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*./ widget-body*/}
                </div>
                {/*./ widget-courses*/}
            </div>
        )
    }
}
