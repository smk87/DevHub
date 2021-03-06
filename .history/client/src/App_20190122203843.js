import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import all the layout components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

//Import CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Landing />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
