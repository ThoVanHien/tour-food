import React, { Component } from 'react';
import {withRouter} from "react-router-dom"

import {Row, Col, Typography, Input, Button} from "antd"
import './Login.scss'

const {Title} = Typography;


class Login extends Component {
    handleLogIn() {
        // cai nay lo viet  class -> mai sua lai dang hook nha -> function component
        localStorage.setItem("isAuthentication", true)
        this.props.history.push('/dashboard')
       
    }
    render() {
        return (
            <div className="lg-container">
               {/* title - the Title giong the <hx> x is (1, 2, 3, 4,5 theo level) */}
               
                    <Title level={3}  className="lg-container_title">Login</Title>
                
               {/* body - cai nao la component cua antd thi xem tren antd them, Row vs Col giong chia layout ben bootstrap */}
               <div className="lg-container_body">
                    <Row gutter={[0, 16]}>
                        <Col span={24}>
                            <Input size="large" placeholder="Username"/>
                        </Col>
                    </Row>
                    <Row  gutter={[0, 16]}>
                        <Col span={24}>
                            <Input size="large" placeholder="Password"/>
                        </Col>
                    </Row>
               </div>
               {/* button */}
               <Row justify="center">
                   <Col>
                        <Button onClick={this.handleLogIn.bind(this)} className="lg-container_button" size="large">Login</Button>
                   </Col>
                   
               </Row>
            </div>

        );
    }
}

export default withRouter(Login);