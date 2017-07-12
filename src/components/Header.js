import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="masthead clearfix">
              <div className="inner">
                <h3 className="masthead-brand">Natural Goodness</h3>
                <nav className="nav nav-masthead">
                  <a className="nav-link active" href="#">Home</a>
                  <a className="nav-link" href="https://github.com/danielemery/natural-goodness" target="_blank">GitHub Project</a>
                </nav>
              </div>
            </div>
        );
    }
}

export default Header;