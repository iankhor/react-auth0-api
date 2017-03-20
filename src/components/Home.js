import React, { Component } from 'react'
import JSONDebugger from '../utils/JSONDebugger'
import { pingApiServer, 
        fetchProfilesWithAuth, 
        fetchProfilesNoAuth } from './../utils/API'
import { Jumbotron, Button } from 'reactstrap';


class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
                pingData: "No data from server yet",
                profileData: "No data from server yet"
            }
    }

    resetStates = () => {
        this.setState({
            pingData: "No data from server yet",
            profileData: "No data from server yet"
            })
    }

    pingApi = () => {
        pingApiServer()
        .then( data => {
            this.setState({ pingData: data} )
        } )
    }
 
    _fetchProfilesNoAuth = () => {
        fetchProfilesNoAuth()
        .then( data => {
            this.setState({ profileData: data} )
            
        })
    }

    _fetchProfilesWithAuth = () => {
        fetchProfilesWithAuth(this.props.token)
        .then( data => {
            this.setState({ profileData: data} )
        })
    }

    renderSignInUp = () => {
        return <button onClick={ this.props.auth.login }> Sign In / Sign Up </button>
    }

    renderLogOut = () => {
        return (
            <div>
                <button onClick={ this.props.auth.logout }> Log out </button>
                <br />
                <button onClick={ this.pingApi }> Ping API Server </button>
                <br />
                <button onClick={ this._fetchProfilesNoAuth }>Fetch Profiles with No Auth</button>
                <br />
                <button onClick={ this._fetchProfilesWithAuth }>Fetch Profiles with Auth</button>
                <br />
                <button onClick={ this.resetStates }>Reset</button>

            </div>
        )

    }

    render(){
        console.log('logged in status :', this.props.isLoggedIn)
        return(
            <div className="border color-aqua">
                { this.props.isLoggedIn ? this.renderLogOut() : this.renderSignInUp() }
                <JSONDebugger json={this.state} />
            </div> 
        )
    }
}

export default Home

