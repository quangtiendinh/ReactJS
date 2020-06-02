import React from 'react';
import {Link} from "react-router-dom";
import './index.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faEye, faUser} from "@fortawesome/free-solid-svg-icons";

export default class RelatedPosts extends React.Component {
    render() {
        return (
            <div className="related-posts-component widget-content">
                <div className="post-header widget-header">
                    <h4 className="tex-header widget-text-header">Bài viết liên quan</h4>
                </div>
                {/*./ post-header*/}
                <div className="post-body widget-body">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 post">
                            <article className="post-id">
                                <Link to="/posts/1" className="card">
                                    <img className="card-img-top" src="https://static-znews.zadn.vn/images/logo-zing-home.svg" alt="Card image cap"/>
                                    <div className="card-body">
                                        <p className="author">
                                            <FontAwesomeIcon icon={faUser}/>
                                            <span>QuangTienIT</span>
                                        </p>
                                        <h5 className="card-title">Hướng dẫn lập trình Python cho người mới bắt đầu </h5>
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
                            {/*./ post*/}
                        </div>

                        <div className="col-lg-4 col-md-4 post">
                            <article className="post-id">
                                <Link to="/posts/1" className="card">
                                    <img className="card-img-top" src="https://sangplus.com/wp-content/uploads/2018/10/larave-assets.png" alt="Card image cap"/>
                                    <div className="card-body">
                                        <p className="author">
                                            <FontAwesomeIcon icon={faUser}/>
                                            <span>QuangTienIT</span>
                                        </p>
                                        <h5 className="card-title">Hướng dẫn lập trình Python cho người mới bắt đầu </h5>
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

                        <div className="col-lg-4 col-md-4 post">
                            <article className="post-id">
                                <Link to="/posts/1" className="card">
                                    <img className="card-img-top" src="https://sangplus.com/wp-content/uploads/2018/10/larave-assets.png" alt="Card image cap"/>
                                    <div className="card-body">
                                        <p className="author">
                                            <FontAwesomeIcon icon={faUser}/>
                                            <span>QuangTienIT</span>
                                        </p>
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

                        <div className="col-lg-4 col-md-4 post">
                            <article className="post-id">
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

                        <div className="col-lg-4 col-md-4 post">
                            <article className="post-id">
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

                        <div className="col-lg-4 col-md-4 post">
                            <article className="post-id">
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

                        <div className="col-lg-4 col-md-4 post">
                            <article className="post-id">
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

                        <div className="col-lg-4 col-md-4 post">
                            <article className="post-id">
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

                        <div className="col-lg-4 col-md-4 post">
                            <article className="post-id">
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

                        <div className="col-lg-4 col-md-4 post">
                            <article className="post-id">
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

                        <div className="col-lg-4 col-md-4 post">
                            <article className="post-id">
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
                {/*./ post-body*/}
            </div>
            // ./ related-posts-component
        )
    }
}
