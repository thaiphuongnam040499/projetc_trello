import React from 'react';
import Navbar from '../../components/yourBoard/Navbar';
import Sidebar from '../../components/yourBoard/Sidebar';
import Content from '../../components/yourBoard/Content';
import { Outlet, useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  return (
    <div>
      <Outlet />
    </div>
  );
}
