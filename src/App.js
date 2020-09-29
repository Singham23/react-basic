import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Saurabh Katp",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Button variant="outline-primary">Primary</Button>{' '} */}
          <p>{this.state.name}</p>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => this.setState({ name: "Singh" })}
          >
            Change Name
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React -2
          </a>
        </header>
      </div>
    );
  }
}

export default App;
