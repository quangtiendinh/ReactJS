import React from 'react';
import './index.css';

export default class Banner extends React.Component {

    isSidebarBanner = () => {
        console.log('aaa');
        const bannerIsNotSidebarStyle = {
            border: 0,
            boxShadow: 'none'
        };
        return this.props.isSidebar? bannerIsNotSidebarStyle: null;
    };

    bannerCustomizeSize = () => {
        let customzeSize = {};
        if (this.props.width !== undefined) {
            customzeSize.width = this.props.width + 'px';
        }
        if (this.props.height !== undefined) {
            customzeSize.height = this.props.height + 'px';
        }
        return customzeSize;
    };

    render() {
        return (
            <div className="widget-banner widget-content" style={this.isSidebarBanner()}>
                <div className="widget-body">
                    <div className="inner-content">
                        <a href={this.props.href} title={this.props.title}>
                            <img src={this.props.src} className="banner-image" alt={this.props.title} style={this.bannerCustomizeSize()}/>
                        </a>
                    </div>
                </div>
                {/*./ post-body*/}
            </div>
        )
    }
}
