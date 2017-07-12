import React, { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">

            <div className="masthead clearfix">
              <div className="inner">
                <h3 className="masthead-brand">Natural Goodness</h3>
                <nav className="nav nav-masthead">
                  <a className="nav-link active" href="#">Home</a>
                  <a className="nav-link" href="https://github.com/danielemery/natural-goodness" target="_blank">GitHub Project</a>
                </nav>
              </div>
            </div>

            <div className="inner-cover">
              <h1 className="cover-heading">Coming Soon</h1>
              <p className="lead">A new way of managing the Natural Goodness Co-Op orders is currently in development. This will vastly simplify making your co-op order and increase visibility of filling orders etc.</p>
            </div>

            <div className="mastfoot">
              <div className="inner">
                <p>Landing page built based on cover template for <a href="https://v4-alpha.getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
