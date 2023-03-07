import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import {Outlet} from 'react-router-dom';
import '../styles/dashboard.scss'

const Dashboard: React.FC = () => {
  return ( 
  <div className='grid-container'>
    <Header />
    <SideBar />
    <main>
      <Outlet />
    </main>
  </div>
  );
}
export default Dashboard;