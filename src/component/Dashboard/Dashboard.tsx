import React from 'react';
import { Layout  } from 'antd';
const { Content } = Layout;
const DashboardComponent: React.FC = () => {
    return <Content style={{marginTop: '15px', background: '#fff', textAlign: 'center', height: '80vh'}}>
    <div style={{fontSize: '60px'}}>
         Welcome to dashboard
     </div>
 </Content>
}

export default DashboardComponent;