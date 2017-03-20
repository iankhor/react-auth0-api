import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg'
import '../css/style.css'
import Home from './Home'
import { auth } from './../utils/init'

class App extends Component {
  constructor(props){
      super(props)

      this.state = {
          isLoggedIn: auth.loggedIn(),
      }
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Auth0 with API example</h2>
          </div>

          <Home 
            auth={auth}
            isLoggedIn={ this.state.isLoggedIn }
            token={auth.getToken()}
          />

        </div>
    );
  }
}

export default App;
