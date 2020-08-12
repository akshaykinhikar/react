import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Hello, this is default data from state'
    }
  }
  render() {
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                {this.state.data}
              </p>
              <button onClick={()=>{this.setState({'data': 'this is new message on button Click'})}}>Click to change text</button>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
      }
}

export default App;
