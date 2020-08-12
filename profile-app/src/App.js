import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
                    console.log(json);
                    this.setState({data: json});
                  })
  }
  render() {
    return (
          <div className="App">
            <header className="App-header">
              <div>
                {
                  this.state.data.map(user => (
                    <div key={user.id}>
                      <img key={user.id + 'img'} src={user.profileURL} className="user-image"/>
                      <h1 key={user.id + 'name'}>{user.name}</h1>
                    </div>
                  ))
                }
              </div>
            </header>
          </div>
        );
      }
}

export default App;
