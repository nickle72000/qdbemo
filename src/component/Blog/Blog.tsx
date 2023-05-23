import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Col, Layout, Row, Space, Avatar, Tabs, Dropdown, Button, Skeleton, notification, Menu, Pagination } from 'antd';
import { MessageOutlined, CaretDownOutlined } from '@ant-design/icons';
import { fetchBlogs } from './../../shared/services/app';
import { Link } from "react-router-dom";
import { blogDataContext } from "./../../shared/services/shareContext";
import { Blogdata } from "./../../shared/services/interface";
const { Sider, Content } = Layout;
const BlogComponent: React.FC = () => {
    const [isLoading, setisLoading] = useState<Boolean>(false)
    const [data, setdata] = useState<Blogdata[]>([])
    const [filterStatus, setfilterStatus] = useState<Boolean>(false)
    const [itemsPerPage] = useState<number>(3)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const { setBlogData } = useContext(blogDataContext)
    useEffect(() => {
        getData()
    }, [])
    const fetchBlogsDataFilter = (filterStatus) ? data.sort((a, b) => {
        return a.title.localeCompare(b.title);
    }) : data;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = fetchBlogsDataFilter.slice(indexOfFirstItem, indexOfLastItem)
    const getData = async () => {
        setisLoading(false)
        try {
            const fetchBlogsData = await fetchBlogs(localStorage.getItem('UserId'));
            setdata(fetchBlogsData)
            setisLoading(true)
        } catch (error) {
            setisLoading(true)
            notification.open({
                message: 'Error',
                description: 'Failed to fetch blogs'
            })
        }
    }

    const sortData = () => {
        setfilterStatus(true)

    }
    const filterMenu = () => {
        return <Menu onClick={sortData}>
            <Menu.Item key="1"> title </Menu.Item>
        </Menu>
    }
    const breadCrum = () => {
        return <Fragment>
            <Sider style={{ background: 'none' }} width="50"><Avatar shape="square" size={40} style={{ backgroundColor: '#397BF6', verticalAlign: 'middle' }} icon={<MessageOutlined style={{ fontSize: `20px`, color: '#ffff' }} />} /></Sider>
            <Layout>
                <div className="title">All Blogs Post</div>
                <div className="caption">Qatar development bank</div>
            </Layout>
            <Sider style={{ background: 'none' }}>
                <Dropdown overlay={filterMenu}>
                    <Button>
                        <Space>
                            <CaretDownOutlined />
                            Filter/sort by
                        </Space>
                    </Button>
                </Dropdown>
            </Sider>
        </Fragment>
    }

    const handelPageChange = (page: number) => {
        setCurrentPage(page)
    }

    const handelClick = (index: any) => {
        const data = currentItems[index];
        setBlogData(data);
    }

    const blogContent = () => {

        return <Fragment>
            {currentItems.length >= 1 ? currentItems.map((blogDate: any, index) => (<Row key={index}>
                <Col><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' alt="blog" width="100" /></Col>
                <Col style={{ marginLeft: '25px' }} span={20}>
                    <div className='title'><Link to={`${blogDate.id}`} onClick={() => handelClick(index)}>{blogDate.title}</Link></div>
                    <div className='caption'>{blogDate.body}</div>
                    <div><Link to={`${blogDate.id}`} onClick={() => handelClick(index)}>Read more</Link></div>
                </Col>
            </Row>)) :
                <Row>
                    <Col>No records found</Col>
                </Row>
            }
            <Pagination defaultCurrent={currentPage} total={fetchBlogsDataFilter.length} pageSize={itemsPerPage} onChange={handelPageChange} style={{ textAlign: 'center' }} />
        </Fragment>
    }

    const skeliton = () => {
        return <Row>
            <Col><Skeleton.Image /></Col>
            <Col style={{ marginLeft: '25px' }} span={20}><Skeleton paragraph={{ rows: 4 }} /></Col>
        </Row>
    }

    return (<Fragment>
        <Layout style={{ marginTop: '15px' }}>
            {breadCrum()}
        </Layout>
        <Layout style={{ marginTop: '15px', background: '#fff', height: '70vh', borderRadius: '10px', }}>
            <Content style={{ margin: '15px' }}>
                <Tabs
                    defaultActiveKey="1"
                    items={[
                        {
                            label: 'All Posts',
                            key: '1',
                            children: (!isLoading) ? skeliton() : blogContent(),
                        },
                        {
                            label: 'Latest Posts',
                            key: '2',
                            children: 'Tab 2',
                            disabled: true,
                        },
                        {
                            label: 'Archived',
                            key: '3',
                            children: 'Tab 3',
                            disabled: true,
                        },
                    ]}
                />
            </Content>
        </Layout>
    </Fragment>)
}

export default BlogComponent;