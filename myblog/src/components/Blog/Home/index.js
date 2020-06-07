import React from 'react';
import './index.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faClock, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <div className="jumbotron text-center">
                    <div className="container">
                        <h3 className="text-header">HÃY CÙNG TÌM HIỂU CÔNG NGHỆ WEB</h3>
                        <p className="slogan">Trang chia sẽ kiến thức về các ngôn ngữ lập trình và những kiến thức về kiếm tiền online bổ ích.</p>

                        <form className="form-inline search-form-home">
                            <input className="form-control text-search" type="search" placeholder="Tìm kiếm..."
                                   aria-label="Search" />
                            <button className="btn btn-search" type="submit">
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </form>
                        {/*./ search-form*/}
                    </div>
                </div>
                {/*./ jumbotron*/}
                <div className="container">
                    <div className="home-wrapper">
                      <div className="row section">
                          <div className="col-lg-12 col-md-12">
                            <div className="featured">

                            </div>
                            {/*./ featured*/}

                            <div className="posts">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <article className="post post">
                                            <Link to="/posts/1" className="card">
                                                    <img className="card-img-top" src="https://static-znews.zadn.vn/images/logo-zing-home.svg" alt="Card image cap"/>
                                                    <div className="card-body">
                                                        <p className="author">QuangTienIT</p>
                                                        <h5 className="card-title">Lập trình Python cho người mới bắt đầu </h5>
                                                    </div>
                                                    {/*./ card-body*/}
                                                    <div className="card-footer">
                                                        <div className="card-view float-left">
                                                            <FontAwesomeIcon icon={faEye}/>
                                                            <span>2450 views</span>
                                                        </div>
                                                        {/*./ card-view*/}
                                                        <div className="card-date float-right">
                                                            <FontAwesomeIcon icon={faClock}/>
                                                            <span>{new Date().toLocaleDateString()}</span>
                                                        </div>
                                                        {/*./ card-date    */}
                                                    </div>
                                                    {/*./ card-footer*/}
                                            </Link>
                                            {/*./ card*/}
                                        </article>
                                    </div>

                                    <div className="col-lg-3 col-md-3">
                                        <article className="post post">
                                            <Link to="/posts/1" className="card">
                                                <img className="card-img-top" src="https://sangplus.com/wp-content/uploads/2018/07/laravel-module-package-development.png" alt="Card image cap"/>
                                                <div className="card-body">
                                                    <p className="author">QuangTienIT</p>
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                                {/*./ card-body*/}
                                                <div className="card-footer">
                                                    <div className="card-view float-left">
                                                        <FontAwesomeIcon icon={faEye}/>
                                                        <span>2450 views</span>
                                                    </div>
                                                    {/*./ card-view*/}
                                                    <div className="card-date float-right">
                                                        <FontAwesomeIcon icon={faClock}/>
                                                        <span>{new Date().toLocaleDateString()}</span>
                                                    </div>
                                                    {/*./ card-date    */}
                                                </div>
                                                {/*./ card-footer*/}
                                            </Link>
                                            {/*./ card*/}
                                        </article>
                                    </div>

                                    <div className="col-lg-3 col-md-3">
                                        <article className="post post">
                                            <Link to="/posts/1" className="card">
                                                <img className="card-img-top" src="https://sangplus.com/wp-content/uploads/2018/10/larave-assets.png" alt="Card image cap"/>
                                                <div className="card-body">
                                                    <p className="author">QuangTienIT</p>
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                                {/*./ card-body*/}
                                                <div className="card-footer">
                                                    <div className="card-view float-left">
                                                        <FontAwesomeIcon icon={faEye}/>
                                                        <span>2450 views</span>
                                                    </div>
                                                    {/*./ card-view*/}
                                                    <div className="card-date float-right">
                                                        <FontAwesomeIcon icon={faClock}/>
                                                        <span>{new Date().toLocaleDateString()}</span>
                                                    </div>
                                                    {/*./ card-date    */}
                                                </div>
                                                {/*./ card-footer*/}
                                            </Link>
                                            {/*./ card*/}
                                        </article>
                                    </div>

                                    <div className="col-lg-3 col-md-3">
                                        <article className="post post">
                                            <Link to="/posts/1" className="card">
                                                <img className="card-img-top" src="https://sangplus.com/wp-content/uploads/2018/10/larave-assets.png" alt="Card image cap"/>
                                                <div className="card-body">
                                                    <p className="author">QuangTienIT</p>
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                                {/*./ card-body*/}
                                                <div className="card-footer">
                                                    <div className="card-view float-left">
                                                        <FontAwesomeIcon icon={faEye}/>
                                                        <span>2450 views</span>
                                                    </div>
                                                    {/*./ card-view*/}
                                                    <div className="card-date float-right">
                                                        <FontAwesomeIcon icon={faClock}/>
                                                        <span>{new Date().toLocaleDateString()}</span>
                                                    </div>
                                                    {/*./ card-date    */}
                                                </div>
                                                {/*./ card-footer*/}
                                            </Link>
                                            {/*./ card*/}
                                        </article>
                                    </div>

                                    <div className="col-lg-3 col-md-3">
                                        <article className="post post">
                                            <Link to="/posts/1" className="card">
                                                <img className="card-img-top" src="https://sangplus.com/wp-content/uploads/2018/10/larave-assets.png" alt="Card image cap"/>
                                                <div className="card-body">
                                                    <p className="author">QuangTienIT</p>
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                                {/*./ card-body*/}
                                                <div className="card-footer">
                                                    <div className="card-view float-left">
                                                        <FontAwesomeIcon icon={faEye}/>
                                                        <span>2450 views</span>
                                                    </div>
                                                    {/*./ card-view*/}
                                                    <div className="card-date float-right">
                                                        <FontAwesomeIcon icon={faClock}/>
                                                        <span>{new Date().toLocaleDateString()}</span>
                                                    </div>
                                                    {/*./ card-date    */}
                                                </div>
                                                {/*./ card-footer*/}
                                            </Link>
                                            {/*./ card*/}
                                        </article>
                                    </div>

                                    <div className="col-lg-3 col-md-3">
                                        <article className="post post">
                                            <Link to="/posts/1" className="card">
                                                <img className="card-img-top" src="https://sangplus.com/wp-content/uploads/2018/10/larave-assets.png" alt="Card image cap"/>
                                                <div className="card-body">
                                                    <p className="author">QuangTienIT</p>
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                                {/*./ card-body*/}
                                                <div className="card-footer">
                                                    <div className="card-view float-left">
                                                        <FontAwesomeIcon icon={faEye}/>
                                                        <span>2450 views</span>
                                                    </div>
                                                    {/*./ card-view*/}
                                                    <div className="card-date float-right">
                                                        <FontAwesomeIcon icon={faClock}/>
                                                        <span>{new Date().toLocaleDateString()}</span>
                                                    </div>
                                                    {/*./ card-date    */}
                                                </div>
                                                {/*./ card-footer*/}
                                            </Link>
                                            {/*./ card*/}
                                        </article>
                                    </div>

                                    <div className="col-lg-3 col-md-3">
                                        <article className="post post">
                                            <Link to="/posts/1" className="card">
                                                <img className="card-img-top" src="https://sangplus.com/wp-content/uploads/2018/10/larave-assets.png" alt="Card image cap"/>
                                                <div className="card-body">
                                                    <p className="author">QuangTienIT</p>
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                                {/*./ card-body*/}
                                                <div className="card-footer">
                                                    <div className="card-view float-left">
                                                        <FontAwesomeIcon icon={faEye}/>
                                                        <span>2450 views</span>
                                                    </div>
                                                    {/*./ card-view*/}
                                                    <div className="card-date float-right">
                                                        <FontAwesomeIcon icon={faClock}/>
                                                        <span>{new Date().toLocaleDateString()}</span>
                                                    </div>
                                                    {/*./ card-date    */}
                                                </div>
                                                {/*./ card-footer*/}
                                            </Link>
                                            {/*./ card*/}
                                        </article>
                                    </div>

                                    <div className="col-lg-3 col-md-3">
                                        <article className="post post">
                                            <Link to="/posts/1" className="card">
                                                <img className="card-img-top" src="https://sangplus.com/wp-content/uploads/2018/10/larave-assets.png" alt="Card image cap"/>
                                                <div className="card-body">
                                                    <p className="author">QuangTienIT</p>
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                                {/*./ card-body*/}
                                                <div className="card-footer">
                                                    <div className="card-view float-left">
                                                        <FontAwesomeIcon icon={faEye}/>
                                                        <span>2450 views</span>
                                                    </div>
                                                    {/*./ card-view*/}
                                                    <div className="card-date float-right">
                                                        <FontAwesomeIcon icon={faClock}/>
                                                        <span>{new Date().toLocaleDateString()}</span>
                                                    </div>
                                                    {/*./ card-date    */}
                                                </div>
                                                {/*./ card-footer*/}
                                            </Link>
                                            {/*./ card*/}
                                        </article>
                                    </div>

                                    <div className="col-lg-3 col-md-3">
                                        <article className="post post">
                                            <Link to="/posts/1" className="card">
                                                <img className="card-img-top" src="https://sangplus.com/wp-content/uploads/2018/10/larave-assets.png" alt="Card image cap"/>
                                                <div className="card-body">
                                                    <p className="author">QuangTienIT</p>
                                                    <h5 className="card-title">Card title</h5>
                                                </div>
                                                {/*./ card-body*/}
                                                <div className="card-footer">
                                                    <div className="card-view float-left">
                                                        <FontAwesomeIcon icon={faEye}/>
                                                        <span>2450 views</span>
                                                    </div>
                                                    {/*./ card-view*/}
                                                    <div className="card-date float-right">
                                                        <FontAwesomeIcon icon={faClock}/>
                                                        <span>{new Date().toLocaleDateString()}</span>
                                                    </div>
                                                    {/*./ card-date    */}
                                                </div>
                                                {/*./ card-footer*/}
                                            </Link>
                                            {/*./ card*/}
                                        </article>
                                    </div>
                                </div>
                            </div>
                            {/*./ posts*/}
                          </div>
                      </div>
                    </div>
                    /*./ hom-wrapper*/
                </div>
            </div>
        );
    }
}
