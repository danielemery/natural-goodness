import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">

            <Header />

            <div className="inner-cover">
              <h1 className="cover-heading">Coming Soon</h1>
              <p className="lead">A new way of managing the Natural Goodness Co-Op orders is currently in development. This will vastly simplify making your co-op order and increase visibility of filling orders etc.</p>
            </div>

            <Footer />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
