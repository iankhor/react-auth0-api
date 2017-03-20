import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class LoginTransition extends Component {
    render(){
        return(
            <Container className="login-transition">
                <Row>
                    <Col>
                        In progress
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default LoginTransition

