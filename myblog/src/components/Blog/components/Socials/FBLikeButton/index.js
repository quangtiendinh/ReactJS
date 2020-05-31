import React from "react";

export default class FBLikeButton extends React.Component {
    render() {
        return (
            <div className="fb-like-button-component mb-2">
                <div className="fb-like" data-href={this.props.dataHref} data-width=""
                     data-layout="standard" data-action="like" data-size="small" data-share={this.props.isShare}/>
            </div>
        )
    }
}
