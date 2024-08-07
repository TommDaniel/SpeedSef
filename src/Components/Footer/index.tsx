import React from 'react';
import logoGrande from '../../assets/logoGrande.png';
import Copyright from '../Copyright';

const Footer = () => {
  return (
    <div className="w-full bg-black bg-opacity-75 text-white py-2 z-10  border-gray-800 border-solid border-t-2 border-b-0 border-x-0">
      <div className="flex justify-between items-center px-4">
        <div className="rounded-lg p-1">
          <img src={logoGrande} alt="Logo" className="h-12 w-12" />
        </div>
        <Copyright color="white" />
      </div>
    </div>
  );
};

export default Footer;
