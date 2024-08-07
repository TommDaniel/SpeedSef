import React from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      <div className="flex flex-grow overflow-hidden">
        <Header />
        <div className="flex-grow p-8 bg-gray-900 bg-opacity-50 overflow-auto"/>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
