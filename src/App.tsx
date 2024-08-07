import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SignIn from './Pages/Login';
import Dashboard from './Pages/Dashboard/index'; // Adicione uma página Dashboard como exemplo
import Clients from './Pages/Clients/index';

function App() {
  return (
    <Router>
      <Helmet>
        <title>SpeedSef</title>
        <link rel="icon" type="image/png" href={require('./assets/logo.png')} />
      </Helmet>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Router>
  );
}

export default App;
