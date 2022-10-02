import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet> {/* things/components which will be changed should be kept inside outlet */}
        </div>
    );
};

export default Main;