import React from 'react';
import './index.css';

export default class Logo extends React.Component {
    render() {
        return (
            <div className="logo-wrapper">
                <div className="container">
                    <h1 className="logo text-center">
                        <a href="">My Blog Channel</a>
                    </h1>
                </div>
            </div>
        );
    }
}
