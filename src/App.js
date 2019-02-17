import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Main from "./views/Main";
import Search from "./views/Search";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
      </div>
    );
  }
}

export default App;
