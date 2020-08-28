import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Switch>
            <Route path='/' component={Search} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
