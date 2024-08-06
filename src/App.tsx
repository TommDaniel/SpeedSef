import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SignIn from './Pages/Login';
import Dashboard from './Pages/Dashboard'; // Adicione uma página Dashboard como exemplo

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
      </Routes>
    </Router>
  );
}

export default App;
