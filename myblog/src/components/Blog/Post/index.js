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
import Sidebar from "../../../shared/components/Sidebar";

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
                <Sidebar/>
            </div>
        )
    }
}
