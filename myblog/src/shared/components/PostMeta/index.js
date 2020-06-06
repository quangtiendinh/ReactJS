import React from "react";
import './index.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faComment, faEye, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default class PostMeta extends React.Component {
    render() {
        return (
            <div className="post-meta">
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
        )
    }
}
