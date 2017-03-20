import React, { Component } from 'react'
import JSONDebugger from '../utils/JSONDebugger'
import { pingApiServer, 
        fetchProfilesWithAuth, 
        fetchProfilesNoAuth } from './../utils/API'
import { Button, ButtonGroup } from 'reactstrap'

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
        return <Button color="primary" onClick={ this.props.auth.login }>Sign In / Sign Up</Button>
    }

    renderLogOut = () => {
        return (
            <div>
                <Button color="primary" onClick={ this.props.auth.logout}>Sign out</Button>
                <Button color="secondary" onClick={ this.pingApi }>Ping API Server</Button>
                <ButtonGroup>
                    <Button color="danger" onClick={this._fetchProfilesNoAuth }>Fetch Profile without Authentication</Button>
                    <Button color="success" onClick={ this._fetchProfilesWithAuth }>Fetch Profile with Authentication</Button>
                </ButtonGroup>
                <Button outline color="danger" size="sm" onClick={ this.resetStates }>Reset</Button>
            </div>
        )
    }

    render(){
        console.log('logged in status :', this.props.isLoggedIn)
        return(
            <div className="border color-aqua">
                <ButtonGroup vertical>
                    { this.props.isLoggedIn ? this.renderLogOut() : this.renderSignInUp() }
                </ButtonGroup>

                { <JSONDebugger json={this.state} /> }
            </div> 
        )
    }
}

export default Home

