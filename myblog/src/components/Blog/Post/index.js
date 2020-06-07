import React from 'react';
import './index.css';
import Author from "../../../shared/components/Author";
import Tag from "../../../shared/components/Tag";
import FBLikeButton from "../../../shared/components/Facebook/FBLikeButton";
import FBComment from "../../../shared/components/Facebook/FBComment";
import RelatedPosts from "../../../shared/components/RelatedPosts";
import Banner from "../../../shared/components/Banner";
import Sidebar from "../../../shared/components/Sidebar";
import PostMeta from "../../../shared/components/PostMeta";

export default class Post extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row content">
                    <div className="col-lg-9 col-md-9 main-container">
                        <div className="post-detail widget-content">
                            <h1 className="post-title">Khóa học lập trình Python cho người mới bắt đầu phần 1</h1>
                            <Banner src="https://www.yydevelopment.com/wp-content/uploads/2018/12/shopify-728x90-banner-example.gif" href="" title="Remitano" width="728" height="90" isSidebar={true}/>
                            <PostMeta/>
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
            </div>
            /*./ container*/
        )
    }
}
