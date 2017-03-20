import React, { Component } from 'react'
import JSONDebugger from '../utils/JSONDebugger'
import { pingApiServer, 
        fetchProfilesWithAuth, 
        fetchProfilesNoAuth } from './../utils/API'
import { Container,
         Row,
         Col,
         Button, 
         ButtonGroup } from 'reactstrap'

import Loading from './Loading'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {  status: "Idle",
                        pingData: "No data from server yet",
                        profileData: "No data from server yet"
                    }
    }

    resetStates = () => {
        this.setState({
            status: "Idle",
            pingData: "No data from server yet",
            profileData: "No data from server yet"
            })
    }

    renderLoading = () => {
        switch(this.state.status) {
            case "Fetching":
                return <Loading />
            default:
                return null
        }
    }

    pingApi = () => {
        this.setState( { status: "Fetching" })
        pingApiServer()
        .then( data => {
            this.setState({ status: "Fetch completed", pingData: data} )
        } )
    }
 
    _fetchProfilesNoAuth = () => {
        this.setState( { status: "Fetching" })
        fetchProfilesNoAuth()
        .then( data => {
            this.setState({ status: "Fetch completed", profileData: data} )
        })
    }

    _fetchProfilesWithAuth = () => {
        this.setState( { status: "Fetching" })
        fetchProfilesWithAuth(this.props.token)
        .then( data => {
            this.setState({ status: "Fetch completed", profileData: data} )
        })
    }

    renderSignInUp = () => {
        return <Button color="primary" onClick={ this.props.auth.login }>Sign In / Sign Up</Button>
    }

    renderLogOut = () => {
        return (
            <div>
                <Row>
                    <Col>
                        <Button color="primary" onClick={ this.props.auth.logout}>Sign out</Button>
                        <Button color="secondary" onClick={ this.pingApi }>Ping API Server</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6">
                        <Button color="danger" onClick={this._fetchProfilesNoAuth }>Fetch Profile without Authentication</Button>
                    </Col>
                    <Col xs="12" sm="6">
                        <Button color="success" onClick={ this._fetchProfilesWithAuth }>Fetch Profile with Authentication</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button outline color="danger" size="sm" onClick={ this.resetStates }>Reset</Button>
                    </Col>
                </Row>
            </div>
        )
    }

    render(){
        console.log('logged in status :', this.props.isLoggedIn)
        return(
            <Container>
                <div className="buttons">
                    <ButtonGroup vertical>
                        { this.props.isLoggedIn ? this.renderLogOut() : this.renderSignInUp() }
                    </ButtonGroup>
                </div> 
                { this.renderLoading() }
                { <JSONDebugger json={this.state} /> }
            </Container>
        )
    }
}

export default Home

