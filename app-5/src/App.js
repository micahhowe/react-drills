import React, { Component } from "react";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image pizza={"https://i2.wp.com/metro.co.uk/wp-content/uploads/2013/09/ay_118757664-e1426856661752.jpg?quality=90&strip=all&zoom=1&resize=644%2C451&ssl=1"} /> 
      </div>
    );
  }
}

export default App;
