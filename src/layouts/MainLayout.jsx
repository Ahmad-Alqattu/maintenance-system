// src/layouts/MainLayout.jsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import BreadcrumbsNav from '../components/BreadcrumbsNav';

const MainLayout = ({ direction, onDirectionChange }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh'
    }}>
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Header 
          direction={direction}
          onDirectionChange={onDirectionChange}
          open={open}
          onDrawerToggle={handleDrawerToggle}
        />
        
        <Sidebar 
          open={open} 
          direction={direction}
          onClose={handleDrawerToggle}
        />
        
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            mt: 8,
            backgroundColor: 'primary.body',
            transition: theme => theme.transitions.create(['margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <BreadcrumbsNav />
          <Box sx={{ p: 3, flex: 1 }}>
            <Outlet />
          </Box>
          <Footer />

        </Box>

      </Box>
      
    </Box>
  );
};

export default MainLayout;