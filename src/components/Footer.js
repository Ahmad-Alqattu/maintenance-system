import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<Typography 
        variant="caption" 
        backgroundColor="primary.footer"
        sx={{ 
          display: 'block', 
        //   width: '100%',
          textAlign: 'center', 
        //   mt: 4,s
          position: 'statics',
            bottom: 0,
          color: 'text.secondary'
        }}
      >
        جميع حقوق الطبع © {currentYear} محفوظة لشركة الأمن للتقنيات
      </Typography>
  );
};

export default Footer;