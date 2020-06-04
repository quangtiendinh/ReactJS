import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faCalendarAlt, faComment, faEye, faClock, faHandPointRight} from "@fortawesome/free-solid-svg-icons";
import Author from "../../../shared/components/Author";
import Tag from "../../../shared/components/Tag";
import FBLikeButton from "../../../shared/components/Facebook/FBLikeButton";
import FBComment from "../../../shared/components/Facebook/FBComment";
import RelatedPosts from "../../../shared/components/RelatedPosts";
import Banner from "../../../shared/components/Banner";

export default class Post extends React.Component {
    render() {
        return (
            <div className="row content">
                <div className="col-lg-9 col-md-9 main-container">
                    <div className="post-detail widget-content">
                        <h1 className="post-title">Khóa học lập trình Python cho người mới bắt đầu phần 1</h1>
                        <div className="post-info">
                            <span className="author metadata">
                                <FontAwesomeIcon icon={faUser}/>
                                <Link to="/author">QuangTienIT</Link>
                            </span>
                            <span className="date metadata">
                                <FontAwesomeIcon icon={faCalendarAlt}/>
                                <span>{new Date().toLocaleDateString()}</span>
                            </span>
                            <span className="view metadata">
                                <FontAwesomeIcon icon={faEye}/>
                                <span>23</span>
                            </span>
                            <span className="comment metadata">
                                <FontAwesomeIcon icon={faComment}/>
                                <span>12</span>
                            </span>
                        </div>
                        {/*./ post-info*/}
                        <div className="post-body">
                            <p>Botble CMS (bót bồ) là CMS được xây dựng trên nền tảng Laravel framework do team mình (Botble team https://botble.com) phát triển từ 2015.
                            Phiên bản hiện tại là 5.4 sử dụng Laravel 7.x.</p>
                            <p>CMS này được xây dựng trên nền tảng kế thừa từ WordPress, một số concepts hay của WordPress đã được sử dụng trong CMS bên mình.</p>
                            <p>Những tính năng như themes, plugins, widget, theme options, shortcode, custom fields, contact form… được bên mình xây dựng lại trên nền tảng Laravel.</p>
                            <p>Những tính năng này của WordPress khá hay và nhiều CMS khác cũng làm theo.</p>
                            <p>Giao diện admin trực quan và dễ tiếp cận, mặc định sẽ có 2 ngôn ngữ trong admin là Tiếng Anh và Tiếng Việt, dễ dàng sử dụng cho khách hàng người Việt mà không cần việt hoá.</p>
                        </div>
                        {/*./ post-body*/}
                        <div className="post-tags">
                            <Tag post-id="1"/>
                        </div>
                        {/*./ post-tags*/}
                        <div className="post-social">
                            <FBLikeButton dataHref="https://developers.facebook.com/docs/plugins/" isShare={true}/>
                        </div>
                        {/*./ post-social*/}
                        <div className="post-author">
                            <Author name="QuangTienIT"/>
                        </div>
                        <div className="post-comments">
                            <FBComment dataHref="https://sangplus.com/gioi-thieu-ve-botble-cms.html"/>
                        </div>
                        {/*./ post-comments*/}
                    </div>
                    {/*./ post-detail*/}
                    <RelatedPosts post-id="1" post-number="1" post-column="3"/>
                </div>
                <div className="col-lg-3 col-md-9 sidebar-container">
                    <Banner src="https://cafebitcoin.org/wp-content/uploads/2018/01/banner-remitano-300x250.png" href="" title="Remitano"/>
                    <div className="sidebar-widget widget-content widget-courses">
                        <div className="widget-header">
                            <h4 className="tex-header widget-text-header">khóa học lập trình</h4>
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
                            <h4 className="tex-header widget-text-header">Bài viết mới</h4>
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

                </div>
                {/*./ widget-news*/}
            </div>
        )
    }
}
