import React from "react";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faFacebookF, faGithub, faSkype, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default class SocialsMenu extends React.Component {
    render() {
        return (
            <div className="socials-menu-component">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link facebook" href="#">
                            <FontAwesomeIcon icon={faFacebookF}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link youtube" href="#">
                            <FontAwesomeIcon icon={faYoutube}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link skype" href="#">
                            <FontAwesomeIcon icon={faSkype}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link github" href="#" tabIndex="-1"
                           aria-disabled="true">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
