import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Loading from './Loading'

class LoginTransition extends Component {
    render(){
        return(
            <Container className="login-transition">
                <Row>
                    <Col> 
                        <Loading />
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default LoginTransition

