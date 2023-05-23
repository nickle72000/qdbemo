import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Login from './component/login/Login'
import LayoutComponent from './shared/Layout/Layout'
const AppRouter: React.FC = () => {
    return (<Routes>
                <Route path="/"  Component={Login} />
                <Route path="/app/*" element={<LayoutComponent />}/>
            </Routes>
        
    );
}

export default AppRouter;