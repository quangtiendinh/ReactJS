import React from 'react';
import './index.css';

export default class Banner extends React.Component {
    render() {
        let bannerStyle = {};
        if (this.props.width !== undefined) {
            bannerStyle.width = this.props.width + 'px';
        }
        if (this.props.height !== undefined) {
            bannerStyle.height = this.props.height + 'px';
        }
        return (
            <div className="widget-banner widget-content">
                <div className="widget-body">
                    <div className="inner-content">
                        <a href={this.props.href} title={this.props.title}>
                            <img src={this.props.src} className="banner-image" alt={this.props.title} style={bannerStyle}/>
                        </a>
                    </div>
                </div>
                {/*./ post-body*/}
            </div>
        )
    }
}
