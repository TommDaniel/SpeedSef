import React from 'react';
import Marca from '../../assets/marca.png';

const Header = () => {
  return (
    <div className="flex flex-col h-full w-[300px] bg-black bg-opacity-75 text-white px-4 ml-2">
      <div className="flex flex-col items-center py-4">
        <img src={Marca} alt="Logo" className="h-48 w-48 rounded-full mb-4" />
        <nav className="flex flex-col items-center space-y-2 w-full">
          <a href="#" className="no-underline text-white text-lg py-2 px-4 w-full text-center bg-gray-800 rounded hover:bg-yellow-500 transition duration-300 ease-in-out">Home</a>
          <a href="#" className="no-underline text-white text-lg py-2 px-4 w-full text-center bg-gray-800 rounded hover:bg-yellow-500 transition duration-300 ease-in-out">Restaurant</a>
          <a href="#" className="no-underline text-white text-lg py-2 px-4 w-full text-center bg-gray-800 rounded hover:bg-yellow-500 transition duration-300 ease-in-out">Accommodations</a>
          
        </nav>
      </div>
    </div>
  );
};

export default Header;
