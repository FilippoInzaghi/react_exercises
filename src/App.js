import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const style = {
      backgroundColor: "lightgreen",
      color: "black"
    };
    return (
  
        <div className="App">
          <button style={style}>Wciśnij mnie!</button>
        </div>
  
    );
  }
}

export default App;
