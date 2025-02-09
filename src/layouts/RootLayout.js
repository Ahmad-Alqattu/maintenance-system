// src/layouts/RootLayout.jsx
import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <Box 
      sx={{ 
        // display: 'flex', 
        flexDirection: 'column',
        minHeight: '100vh',
        Width: '100%',
        backgroundColor: 'primary.body'
      }}
    >
        <Outlet />
  
      <Footer/>
    </Box>
  );
};

export default RootLayout;