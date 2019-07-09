import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      message: ''
  }
}
    handleChange(value){
      this.setState({message:value})
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
         <input type='text' onChange={e => this.handleChange(e.target.value)}/> 
        </div>
      <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
