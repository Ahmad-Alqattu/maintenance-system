import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SectionWrapper = ({ title, children }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="subtitle1"
        sx={{
          display: 'inline-block',
          color: 'primary.main',
          fontWeight: 'bold',
          borderBottom: '2px solid',
          borderColor: 'primary.main',
          mb: 2,
          pb: 0.5
        }}
      >
        {title}
      </Typography>
      {children}

    </Box>
  );
};

export default SectionWrapper;