import React, { useState } from 'react';
import { Input, Tooltip, Col, Row, Button, Card, notification } from 'antd';
import { InfoCircleOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';

const Login: React.FC = () => {
    const [userId, setUserId] = useState(undefined)

    const updateInput = (event: any) => {
        setUserId(event.target.value)
    }

    const submit = () => {
        if (userId) {
             if (userId === null || userId === '') {
                notification.open({
                    message: 'Error: Enter Userid',
                    description:
                        'Please eneter the userid.',
                })
            } else if (userId >= 1 && userId <= 10) {
                localStorage.setItem(`UserId`, userId)
                window.location.href = `http://localhost:3000/app/dashboard`
            } else {
                notification.open({
                    message: 'Error: User not found',
                    description:
                        'User not found. Please check the details',
                })
            }
        } else {
            notification.open({
                message: 'Error: Enter Userid',
                    description:
                        'Please eneter the userid.',
            })
        }
    }

    return <Row justify={`center`} align={`middle`} style={{ height: `100vh`, backgroundColor: `rgb(240, 242, 245)` }}><Col>
        <Card title="Login" bordered={true} >
            <Row justify={`center`} align={`middle`} >
                <Col>
                    <Input
                        placeholder="Enter your user Id"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={
                            <Tooltip title="Enter your user Id">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                        onChange={updateInput}
                    />
                </Col>
            </Row>
            <Row justify={`center`} align={`middle`} style={{ width: 300, marginTop: 16 }}>
                <Button
                    type="primary"
                    icon={<LoginOutlined />}
                    onClick={submit}
                >
                    Login!
                </Button>
            </Row>
        </Card>
    </Col></Row>
}

export default Login;