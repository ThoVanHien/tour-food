import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import {FacebookFilled,TwitterCircleFilled,MailFilled} from "@ant-design/icons"
import {Row, Col, Typography, Input, Button,Radio,DatePicker} from "antd"
import "./Register.scss"
import moment from 'moment';
const {Title} = Typography;

const Register = () => {

    const [value, setValue] = React.useState(1);
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    return (

           <div className="lg-container">
              <Title level={3}  className="lg-container_title">Register</Title>
              <div className="lg-container_body">
                    <Row gutter={[0, 16]}>
                        <Col span={24}>
                            <Input size="large" placeholder="Email"/>
                        </Col>
                    </Row>
                    <Row  gutter={[0, 16]}>
                        <Col span={24}>
                            <Input size="large" placeholder="Username"/>
                        </Col>
                    </Row>
                    <Row  gutter={[0, 16]}>
                        <Col span={24}>
                            <Input size="large" placeholder="Password"/>
                        </Col>
                    </Row>
                    <Row  gutter={[0, 16]}>
                        <Col span={24}>
                            <Input size="large" placeholder="Re-Password"/>
                        </Col>
                    </Row>
                    <Row  gutter={[0, 16]}>
                        <Col span={24}>
                            <Radio.Group onChange={onChange} value={value}>
                                <Radio value={1}>Male</Radio>
                                <Radio value={2}>Female</Radio>
                            </Radio.Group>
                        </Col>
                        
                    </Row>
                    <Row  gutter={[0, 16]}>
                        
                        <Col span={24}>
                            <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col>
                                <Button className="lg-container_button" size="large">Submit</Button>
                        </Col>
                   
                    </Row>
               </div>
            </div>
      
    )
}

export default Register
