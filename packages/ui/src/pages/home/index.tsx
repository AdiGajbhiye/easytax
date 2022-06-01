import React from 'react';
import NavBar from '@components/nav-bar';
import { Outlet, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Home;
