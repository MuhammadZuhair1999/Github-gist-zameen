import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SearchAndResults from './App/screens/searchAndResults';
import GistDetails from './App/screens/gistDetails';


class App extends Component {
  render() {
    return (
      <div className= "App">
      <Router>
        
          <Route path="/" exact={true} component={SearchAndResults} />
          <Route path="/:id" component={GistDetails} />
        
      </Router>
      
      </div>
    );
  }
}

export default App;