import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <footer></footer>
    </div>
  );
};

export default Home;