import React from 'react';
import { Box, Typography, Switch, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
export const ToggleSwitch = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  direction = 'rtl'
}) => {
  const { t } = useTranslation();
  label=label? label:t('common.enable');
  return (
    <FormControlLabel
      labelPlacement={direction === 'rtl' ? 'start' : 'end'}
      label={
        <Typography
          variant="body2"
          sx={{
            mr: 2,
            color: disabled ? 'text.disabled' : 'text.primary',
          }}
        >
          {label}
        </Typography>
      }
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#00D8C3',
              '&:hover': {
                backgroundColor: 'rgba(0, 216, 195, 0.08)',
              },
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#00D8C3',
            },
            // mr: direction === 'rtl' ? 0 : 1,
            // ml: direction === 'rtl' ? 1 : 0
          }}
        />
      }
    />
  );
};