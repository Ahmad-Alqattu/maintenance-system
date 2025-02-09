import React from 'react';
import { Box } from '@mui/material';

const AuthLayout = ({ children }) => (
  <Box sx={{ height: '100vh', backgroundColor: 'primary.light' }}>
    {children}
  </Box>
);

export default AuthLayout;