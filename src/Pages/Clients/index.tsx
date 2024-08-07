import React, { useState } from 'react';
import Header from '../../Components/Header/index';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const createData = (name: string, email: string, phone: string) => {
  return { name, email, phone };
};

const rows = [
  createData('Cliente 1', 'cliente1@example.com', '(11) 1111-1111'),
  createData('Cliente 2', 'cliente2@example.com', '(22) 2222-2222'),
  createData('Cliente 3', 'cliente3@example.com', '(33) 3333-3333'),
  createData('Cliente 4', 'cliente4@example.com', '(44) 4444-4444'),
  createData('Cliente 5', 'cliente5@example.com', '(55) 5555-5555'),
];

const Clients = () => {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  const handleRowClick = (name: string) => {
    setSelectedRow(name);
  };

  const handleAddClient = () => {
    // Lógica para adicionar um novo cliente
    alert('Adicionar novo cliente');
  };

  return (
    <div className="flex h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      <Header />
      <div className="flex-grow p-8 bg-gray-900 bg-opacity-50 relative">
        <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{ color: 'white' }}>Nome</TableCell>
                  <TableCell align="center" style={{ color: 'white' }}>Email</TableCell>
                  <TableCell align="center" style={{ color: 'white' }}>Telefone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    onClick={() => handleRowClick(row.name)}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      backgroundColor: selectedRow === row.name ? 'rgba(255, 255, 0, 0.3)' : 'transparent',
                      cursor: 'pointer',
                    }}
                  >
                    <TableCell align="center" component="th" scope="row" style={{ color: 'white' }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" style={{ color: 'white' }}>{row.email}</TableCell>
                    <TableCell align="center" style={{ color: 'white' }}>{row.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <div className="flex justify-end mt-4">
          <Fab 
            color="primary" 
            aria-label="add" 
            onClick={handleAddClient}
            sx={{
              backgroundColor: 'rgba(255, 215, 0, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255, 215, 0, 1)',
              },
            }}
          >
            <AddIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default Clients;
