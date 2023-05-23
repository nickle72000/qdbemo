import React from 'react';
import { Col, Layout, Row, Badge, Space, Avatar } from 'antd';
import { BellOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
const { Header } = Layout;

const HeaderComponent: React.FC = () => {
    return <Header style={{ padding: 0, backgroundColor: `#ffff`}} >
    <Row justify="space-between">
        <Col>
        
        </Col>
        <Col span={4} style={{display: `flex`}}>
            <Space><Badge dot><BellOutlined width={`15em`}/></Badge>
            <Badge count={1}><MailOutlined /></Badge>
            <Badge dot><MailOutlined /></Badge>
            <Badge><Avatar shape="circle" icon={<UserOutlined />} /></Badge>
            </Space>
        </Col>
    </Row>
</Header>
}

export default HeaderComponent;