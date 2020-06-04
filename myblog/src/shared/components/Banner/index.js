import React from 'react';
import './index.css';

export default class Banner extends React.Component {
    render() {
        return (
            <div className="widget-banner widget-content">
                <div className="widget-body">
                    <div className="inner-content">
                        <a href={this.props.href} title={this.props.title}>
                            <img src={this.props.src} className="banner-image" alt={this.props.title}/>
                        </a>
                    </div>
                </div>
                {/*./ post-body*/}
            </div>
        )
    }
}
