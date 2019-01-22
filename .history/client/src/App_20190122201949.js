import React, { Component } from "react";

//Import all the layout components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

//Import CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>My React App</h1>
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
