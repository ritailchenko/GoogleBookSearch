import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import NavTabs from "./components/NavTabs"
import Saved from "./pages/Saved";
import SearchPage from "./pages/Search";


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div className="App-header">
         <NavTabs />
        </div>
        <Switch>
          <Route exact={true} path="/" component={SearchPage}/>
          <Route path="/search" component={SearchPage}/>
          <Route path="/saved" component={Saved}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
