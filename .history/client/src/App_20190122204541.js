import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import all the layout components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

//Import CSS
import "./App.css";
import Register from "./components/auth/register";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
          <Route exact path="/register" component={Register}</div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
