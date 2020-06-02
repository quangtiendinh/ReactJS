import React from "react";
import './index.css';
import {Link} from "react-router-dom";

export default class Author extends React.Component {
    render() {
        return (
          <div className="author-component mb-2">
              <div className="media author-info">
                  <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/50889764_2253631094912976_6090191672140890112_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=Iy6XwlnNrH4AX-y3KWE&_nc_ht=scontent.fsgn5-2.fna&oh=a0e0f164c426b4807d34276fb45d7521&oe=5EF9C200" className="mr-3 avatar" alt=""/>
                  <div className="media-body">
                      <h3 className="mt-0 name">{this.props.name}</h3>
                      <p>
                          The media object helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.
                      </p>
                      <p>Facebook: <Link to="/">QuangTienIT</Link></p>
                  </div>
              </div>
          </div>
        );
    }
}
