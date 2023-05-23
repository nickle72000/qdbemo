import React, { Fragment, useContext, useEffect } from 'react';
import { Col, Layout, Row, Button, message, } from 'antd';
import { blogDataContext } from "./../../../shared/services/shareContext";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const {  Content } = Layout;
const DetailComponent: React.FC = () => {
    const { blogData } = useContext(blogDataContext);
    useEffect(() => {
        if (!blogData) {
            window.location.href = `http://localhost:3000/app/post`
        }
    }, [])
    const breadCrum = () => {
        return <Fragment>
            <Layout>
                <div className="title">Blog detail</div>
            </Layout>
        </Fragment>
    }
    const checkDelete = () => {
        console.log('saDfa')
        message.error('You cant delete blog');
    }
    return (<Fragment>
        <Layout style={{ marginTop: '15px' }}>
            {breadCrum()}
        </Layout>
        <Layout style={{ marginTop: '15px', background: '#fff', height: '70vh', borderRadius: '10px', }}><br />
            {blogData && <Content style={{ margin: '15px' }}>
                <Row style={{ marginBottom: '15px' }} ><Col span={15}><img src='https://www.bannerflow.com/app/uploads/blog-header-creative-banner.jpg' style={{ marginBottom: '15px' }} />
                    <Link to="edit"><Button type="primary" icon={<EditOutlined />} >
                        Edit
                    </Button></Link>&nbsp;
                    <Button type="primary" icon={<DeleteOutlined  />} onClick={checkDelete}>
                        Delete
                    </Button>
                </Col></Row>
                <Row style={{ marginBottom: '15px' }} ><Col className='title'>{blogData.title}</Col></Row>
                <Row><Col className='caption'>{blogData.body}</Col></Row>
            </Content>}
        </Layout>
    </Fragment>);
}

export default DetailComponent;