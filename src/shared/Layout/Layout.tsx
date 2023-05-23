import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd';
import SideBarComponent from './SideBar/SideBar';
import HeaderComponent from './Header/Header';
import DashboardComponent from './../../component/Dashboard/Dashboard';
import BlogComponent from './../../component/Blog/Blog';
import DetailComponent from './../../component/Blog/Detail/Detail';
import { BlogDataProvider } from './../services/shareContext';
import EditComponent from './../../component/Blog/edit/Edit'
const { Content, } = Layout;
const LayoutComponent: React.FC = () => {

    return <Layout style={{ minHeight: '100vh' }}>
        <SideBarComponent />
        <Layout>
            <HeaderComponent />
            <Content style={{ margin: '0 16px' }}>
                <BlogDataProvider>
                    <Routes>
                        <Route path="/posts" element={<BlogComponent />} />
                        <Route path="/posts/:id" element={<DetailComponent />} />
                        <Route path="/posts/:id/edit" element={<EditComponent />} />
                        <Route path="/dashboard" element={<DashboardComponent />} />
                    </Routes>
                </BlogDataProvider>
            </Content>
        </Layout>
    </Layout>
}

export default LayoutComponent;