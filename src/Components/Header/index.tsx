import React from 'react';
import Marca from '../../assets/marca.png';
import axios from 'axios';

const Header = () => {
  const handleSefazClick = async () => {
    const dados = {
    cpf: '03108733044',
    datanasc: '03092002',
    cnpj: '47529662000117',
    nomemae: 'Gislaine Cristina Dombrovski',
    };
  
    try {
      const response = await axios.post('http://127.0.0.1:8080/SefazEntry', dados);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };
  return (
    <div className="flex flex-col h-full w-[300px] bg-black bg-opacity-75 text-white px-4 ml-2">
      <div className="flex flex-col items-center py-4">
        <img src={Marca} alt="Logo" className="h-48 w-48 rounded-full mb-4" />
        <nav className="flex flex-col items-center space-y-2 w-full">
            <a href="/clients" className="no-underline text-white text-lg py-2 px-4 w-full text-center bg-gray-800 rounded hover:bg-yellow-500 transition duration-300 ease-in-out">Clientes</a>
            <a href="/documents" className="no-underline text-white text-lg py-2 px-4 w-full text-center bg-gray-800 rounded hover:bg-yellow-500 transition duration-300 ease-in-out">Documentos</a>
            <a href="/relatorios" className="no-underline text-white text-lg py-2 px-4 w-full text-center bg-gray-800 rounded hover:bg-yellow-500 transition duration-300 ease-in-out">Relatórios</a>
            <a href="/lancar-nota" className="no-underline text-white text-lg py-2 px-4 w-full text-center bg-gray-800 rounded hover:bg-yellow-500 transition duration-300 ease-in-out">Lançar Nota</a>
            <button onClick={handleSefazClick} className="no-underline text-white text-lg py-2 px-4 w-full text-center bg-gray-800 rounded hover:bg-yellow-500 transition duration-300 ease-in-out">Abrir Sefaz</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
