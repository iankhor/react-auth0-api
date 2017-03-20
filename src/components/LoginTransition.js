import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class LoginTransition extends Component {
    render(){
        return(
            <Container className="login-transition">
                <Row>
                    <Col> 
                        <i className='fa fa-spinner fa-spin fa-5x color-font-aqua'></i>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default LoginTransition

