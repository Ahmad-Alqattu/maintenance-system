// src/components/common/ActionButtons.jsx
import React from 'react';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const ActionButtons = ({
  onSave,
  onCancel,
  saveText ,
  cancelText,
  sx = {}
}) => {
  const { t } = useTranslation();
  saveText = saveText || t('common.save');
  cancelText = cancelText || t('common.cancel');
  return (
    <Box sx={{ 
      display: 'flex', 
      gap: 2, 
      justifyContent: 'flex-start',
      mt: 3,
      ...sx 
    }}>
      <Button
        variant="contained"
        color="error"
        onClick={onCancel}
        sx={{ 
          borderRadius: 3,
          px: 5,
          backgroundColor: '#ff3b3b'
        }}
      >
        {cancelText}
      </Button>
      <Button
        variant="contained"
        onClick={onSave}
        sx={{ 
          borderRadius: 3,
          px: 5,
          backgroundColor: '#0039ff'
        }}
      >
        {saveText}
      </Button>
    </Box>
  );
};
