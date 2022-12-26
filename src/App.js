import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./container/Home";
import "../src/app.css";
import Details from "./container/Details";




function App() {
  return (
    <Router>
        <Route path="/" component={Home}exact />
        <Route path="/add" component={Details} />
    </Router>
  );
}

export default App;
