import React, { useState, useEffect } from 'react';
import {  Layout, Menu,  Col, Row, Avatar, notification } from 'antd';
import logo from './../../../assets/logo.png';
import { MenuOutlined, AntDesignOutlined, SignalFilled, CalendarOutlined, MessageOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { fetchUser } from './../../services/app';
import {Userdata } from './../../services/interface'
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const SideBar: React.FC = () => {
    //const [isLoading, setisLoading] = useState<Boolean>(false)
    const [collapsedState, setcollapsed] = useState(false);
    const [data, setdata] = useState<Userdata>({name: ''})
    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        try {
            const fetchUserDate = await fetchUser(localStorage.getItem('UserId'));
            setdata(fetchUserDate)
            //setisLoading(true)
        } catch (error) {
            //setisLoading(true)
            notification.open({
                message: 'Error',
                description: 'Failed to fetch user data'
            })
        }
    }

    const setCollapsed = () => {
        setcollapsed(!collapsedState)
    }

    return <Sider collapsed={collapsedState} collapsedWidth='100' style={{ backgroundColor: `#FFFF` }}>
    <Row  justify={`center`} align={`middle`}  style={{ backgroundColor: `#397BF6`, height: `63px` }}>
        <Col span={8}> <img src={logo} alt='logo'/></Col>
        <Col span={1} offset={(!collapsedState)? 12: 8} >
            <MenuOutlined style={{ color: `white` }} onClick={setCollapsed}/>
        </Col>
    </Row>
    <Row  justify={`center`} align={`middle`} style={{marginTop: `15px`}}>
        <Col><Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                icon={<AntDesignOutlined />}
            />
        </Col>
    </Row>
    <Row  justify={`center`} align={`middle`}>
        <Col style={{color: `#BFBFBF`}}>Hello</Col>
    </Row>
    <Row  justify={`center`} align={`middle`}>
        <Col className='user_name'>{data.name}</Col>
    </Row>
     <Menu theme="light" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline"  className={`sideBar`} > 
        <SubMenu key="sub1"  title={(!collapsedState)? `Dashboard`: 'D'}>
            <Menu.Item key="1"><Link to={'dashboard'}><SignalFilled /> &nbsp; Overview</Link></Menu.Item>
            <Menu.Item key="2"><CalendarOutlined /> &nbsp; Calender</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={(!collapsedState)? `Blogs`: 'B'}>
            <Menu.Item  key="3"><Link to={'posts'}><MessageOutlined /> &nbsp; All</Link></Menu.Item>
            <Menu.Item key="4"><InfoCircleOutlined /> &nbsp; Latest</Menu.Item>
        </SubMenu>
     </Menu>
</Sider>
}

export default SideBar;