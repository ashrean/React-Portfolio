import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/header.js';
import Home from './components/Home/home.js';
import About from './components/About/aboutMe.js';
import Contact from './components/Contacts/contactInfo.js';
import Portfolio from './components/Portfolio/portfolio.js';
import Footer from './components/Footer/footer.js';


class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <main>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />

          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
