import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Orders from './components/Orders';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <div className="page">
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path='/orders' component={Orders} />
          </main>
        </div> 
        <Footer />
      </div>
    );
  }
}

export default App;
