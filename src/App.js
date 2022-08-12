import "./App.css";

import React, { Component } from "react";
import MentorList from "./components/MentorList";

export class App extends Component {
  render() {
    return (
      <div>
        <MentorList />
      </div>
    );
  }
}

export default App;
