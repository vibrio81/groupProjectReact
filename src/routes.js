import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import landing from './components/landing';


class Routes extends Component {
    render() {
      return (
        <div>
          <Router>
            <hr />
            <Route name="landing" exact path="/" component={landing} />
          </Router>
        </div>
      );
    }
  }
  
  export default Routes;
  