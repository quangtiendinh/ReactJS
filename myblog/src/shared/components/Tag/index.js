import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTags} from "@fortawesome/free-solid-svg-icons";
import './index.css';
import {Link} from "react-router-dom";

export default class Tag extends React.Component {
    render() {
        return (
            <div className="tags-component mb-2">
                <p>
                    <FontAwesomeIcon icon={faTags}/>
                    <span className="tag-item"><Link to="">Lập trình java</Link></span>
                    <span className="tag-item"><Link to="">Lập trình</Link></span>
                    <span className="tag-item"><Link to="">Thuật toán</Link></span>
                </p>
            </div>
        );
    }
}
