import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AssetRegistration = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        {t('assets.register.title')}
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>
          {t('assets.register.description')}
        </Typography>
      </Paper>
    </Box>
  );
};

export default AssetRegistration;