import React, { Component } from 'react';
import './App.css';
import Root from './react/Root'
import Home from './react/Home.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
class App extends Component
{
  render() {
    return (
      <div>
        <p>
          Tara Laughlin
        </p>
        <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Root} />
          </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
