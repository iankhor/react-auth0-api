import React, { Component } from 'react'
import JSONDebugger from '../utils/JSONDebugger'
// import auth from './../utils/initAuth'

// example JSON data
const exampleJSONData = {
    data1: 'data1',
    data2: 'data2',
    data3: 123
}

class Home extends Component {

    renderSignInUp = () => {
        return <button onClick={ this.props.auth.login }> Sign In / Sign Up </button>
    }

    renderLogOut = () => {
        return <button onClick={ this.props.auth.logout }> Log out </button>
    }

    render(){
        console.log('logged in status :', this.props.isLoggedIn)
        return(
            <div className="border color-aqua">
                { this.props.isLoggedIn ? this.renderLogOut() : this.renderSignInUp() }
                <JSONDebugger json={exampleJSONData} />
            </div> 
        )
    }
}

export default Home

