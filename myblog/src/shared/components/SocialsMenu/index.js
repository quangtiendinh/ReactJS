import React from "react";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export default class SocialsMenu extends React.Component {
    render() {
        return (
            <div className="socials-menu-component">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1"
                           aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        )
    }
}
