import React from "react";
import './index.css';
import Sidebar from "../../../shared/components/Sidebar";
import {Link} from "react-router-dom";
import PostMeta from "../../../shared/components/PostMeta";
import Pagination from "../../../shared/components/Pagination";

export default class Categories extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row content categories-wrapper">
                    <div className="col-lg-9 col-md-9 main-container">
                        <div className="widget-content category-description">
                            <div className="category-header">
                                <h1 className="text-header">PHP</h1>
                            </div>
                            {/*./ category-header*/}
                            <div className="category-excerpt">
                                <p>
                                    Tổng hợp các thủ thuật Điện Thoại, bạn sẽ tìm thấy những bài chia sẻ thủ thuật Điện Thoại, hướng dẫn sử dụng, cách bảo hành và vận hành.
                                </p>
                            </div>
                            {/*./ category-excerpt*/}
                        </div>
                        {/*./ category-description*/}
                        <div className="post-detail widget-content">

                            <div className="post-body">
                                <div className="inner-content">
                                    <div className="media post-item">
                                        <Link to="/"><img src="http://2.bp.blogspot.com/-RPn-tMqSwdI/VKz5M6k-8FI/AAAAAAAABMc/0SKe2xCMzDc/s250-h200-c/lau-oc-tia-to.jpg" className="mr-3 avatar" alt=""/></Link>
                                        <div className="media-body">
                                            <h2 className="post-title">
                                                <Link to="/posts/1">[Đại lễ 30/4] - Tinohost hoàn tiền 120% khi đăng ký dịch / gia hạn dịch vụ</Link>
                                            </h2>
                                            <PostMeta id="1"/>
                                            <div className="post-excerpt">
                                                Món ngon cuối tuần ngày hôm nay Đỗ Bảo Nam Blog xin giới thiệu với các chị em và các mẹ  đó là món các basa cuộn lá tía tô. Đây là một món ăn rất...
                                            </div>
                                            {/*./ post-excerpt*/}
                                        </div>
                                    </div>

                                    <div className="media post-item">
                                        <Link to="/"><img src="http://2.bp.blogspot.com/-RPn-tMqSwdI/VKz5M6k-8FI/AAAAAAAABMc/0SKe2xCMzDc/s250-h200-c/lau-oc-tia-to.jpg" className="mr-3 avatar" alt=""/></Link>
                                        <div className="media-body">
                                            <h2 className="post-title">
                                                <Link to="/">[Đại lễ 30/4] - Tinohost hoàn tiền 120% khi đăng ký dịch / gia hạn dịch vụ</Link>
                                            </h2>
                                            <PostMeta id="1"/>
                                            <div className="post-excerpt">
                                                Món ngon cuối tuần ngày hôm nay Đỗ Bảo Nam Blog xin giới thiệu với các chị em và các mẹ  đó là món các basa cuộn lá tía tô. Đây là một món ăn rất...
                                            </div>
                                            {/*./ post-excerpt*/}
                                        </div>
                                    </div>

                                    <div className="media post-item">
                                        <Link to="/"><img src="http://2.bp.blogspot.com/-RPn-tMqSwdI/VKz5M6k-8FI/AAAAAAAABMc/0SKe2xCMzDc/s250-h200-c/lau-oc-tia-to.jpg" className="mr-3 avatar" alt=""/></Link>
                                        <div className="media-body">
                                            <h2 className="post-title">
                                                <Link to="/">[Đại lễ 30/4] - Tinohost hoàn tiền 120% khi đăng ký dịch / gia hạn dịch vụ</Link>
                                            </h2>
                                            <PostMeta id="1"/>
                                            <div className="post-excerpt">
                                                Món ngon cuối tuần ngày hôm nay Đỗ Bảo Nam Blog xin giới thiệu với các chị em và các mẹ  đó là món các basa cuộn lá tía tô. Đây là một món ăn rất...
                                            </div>
                                            {/*./ post-excerpt*/}
                                        </div>
                                    </div>

                                    <div className="media post-item">
                                        <Link to="/"><img src="http://2.bp.blogspot.com/-RPn-tMqSwdI/VKz5M6k-8FI/AAAAAAAABMc/0SKe2xCMzDc/s250-h200-c/lau-oc-tia-to.jpg" className="mr-3 avatar" alt=""/></Link>
                                        <div className="media-body">
                                            <h2 className="post-title">
                                                <Link to="/">[Đại lễ 30/4] - Tinohost hoàn tiền 120% khi đăng ký dịch / gia hạn dịch vụ</Link>
                                            </h2>
                                            <PostMeta id="1"/>
                                            <div className="post-excerpt">
                                                Món ngon cuối tuần ngày hôm nay Đỗ Bảo Nam Blog xin giới thiệu với các chị em và các mẹ  đó là món các basa cuộn lá tía tô. Đây là một món ăn rất...
                                            </div>
                                            {/*./ post-excerpt*/}
                                        </div>
                                    </div>
                                </div>
                                {/*./ inner-content*/}
                            </div>
                            {/*./ post-body*/}
                        </div>
                        {/*./ post-detail*/}
                        <Pagination/>
                    </div>
                    {/*./ categories-wrapper*/}
                    <Sidebar/>
                </div>
            </div>
            /*./ container*/
        )
    }
}
