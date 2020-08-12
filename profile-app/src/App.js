import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {name: 'Lorem', id:'1',  profileURL: 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'},
        {name: 'Ipsome', id:'2',  profileURL: 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'},
        {name: 'Tony', id:'3',  profileURL: 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'}
      ]
    }
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
