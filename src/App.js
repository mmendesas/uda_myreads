import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Main from "./views/Main";
import Search from "./views/Search";
import NotFound from './views/NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
