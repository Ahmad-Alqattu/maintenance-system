// src/components/common/FormInput.jsx
import React from 'react';
import {
  TextField,
  Box,
  Typography
} from '@mui/material';

export const FormInput = ({
  label,
  required = false,
  value = '',
  onChange,
  type = 'text',
  placeholder = '',
  disabled = false,
  multiline = false,
  rows = 1,
  sx = {}
}) => {
  return (
    <Box sx={{ mb: 2, ...sx, }}>
      <Box sx={{ display: 'flex', mb: 1 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
        {required && (
          <Typography color="error" sx={{ ml: 0.5 }}>*</Typography>
        )}
      </Box>
      <TextField
        fullWidth
        value={value}
        borderRadius={3} 
        onChange={onChange}
        type={type}
        disabled={disabled}
        multiline={multiline}
        rows={rows}
        placeholder={placeholder}
        sx={{
          overflow: 'hidden',// Contain background
          borderRadius: 4,

          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'divider',
              borderRadius: 4,

            },
            '&:hover fieldset': {
              borderColor: 'primary.main'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main'
            }
          },
          backgroundColor: 'background.paper'
        }}
      />
    </Box>
  );
};

