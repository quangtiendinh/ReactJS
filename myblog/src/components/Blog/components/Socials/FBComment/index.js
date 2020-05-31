import React from "react";

export default class FBComment extends React.Component{
    render() {
        return (
            <div className="fb-comment-component">
                <div className="fb-comments"
                     data-href={this.props.dataHref} data-numposts="5"
                     data-width="100%"/>
            </div>
        );
    }
}
