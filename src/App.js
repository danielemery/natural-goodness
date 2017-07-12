import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">

            <Header />

            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </main>

            <Footer />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
