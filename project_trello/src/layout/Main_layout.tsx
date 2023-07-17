import React from 'react';
import Navbar from '../components/yourBoard/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/yourBoard/Sidebar';
import SidebarProject from '../components/project/SidebarProject';
import { useSelector } from 'react-redux';

export default function Main_layout() {
  const location = useLocation();
  const isHome =
    location.pathname === '/home' || location.pathname === '/home/contentBoard';
  return (
    <div>
      <Navbar />
      <div className={`${isHome ? 'container' : ''} d-flex`}>
        {isHome ? <Sidebar /> : <SidebarProject />}
        <Outlet />
      </div>
    </div>
  );
}
