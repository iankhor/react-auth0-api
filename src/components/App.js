import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg'
import '../css/style.css'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to a vanilla React with react-router 4</h2>
          </div>

          <div className="border color-silver">
              <Link to='/PageOne'>Go to Page One</Link>
          </div>

           {/* Render children here*/}
           {this.props.children} 
        </div>
    );
  }
}

export default App;
