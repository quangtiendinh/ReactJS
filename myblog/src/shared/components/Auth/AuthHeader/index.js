import React from 'react';

export default class AuthHeader extends React.Component {
    render() {
        return (
            <div className="auth-header">
                <div className="logo">
                    <a href="">
                        <img src="https://freetuts.net/public/logo/logo.png?rand=3" alt="" className="img img-response"/>
                    </a>
                </div>
                <h5 className="text-header">{this.props.title}</h5>
            </div>
        )
    }
}
