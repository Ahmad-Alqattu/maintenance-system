import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
  CircularProgress,
  FormHelperText
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';

export const FormSelect = ({
  label,
  required = false,
  value = '',
  onChange,
  options = [],
  placeholder,
  disabled = false,
  error = false,
  helperText = '',
  loading = false,
  multiple = false,
  size = 'medium',
  sx = {}
}) => {
  const { t } = useTranslation();
  placeholder = t('common.selectFromList');
  
  return (
    <Box sx={{ mb: 2, ...sx }}>
      <Box sx={{ display: 'flex', mb: 1 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
        {required && (
          <Typography color="error" sx={{ ml: 0.5 }}>
            *
          </Typography>
        )}
      </Box>
      <FormControl fullWidth error={error}>
        <Select
          multiple={multiple}
          value={value}
          onChange={onChange}
          displayEmpty
          disabled={disabled}
          size={size}
          IconComponent={KeyboardArrowDownIcon}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: 300,
                zIndex: theme => theme.zIndex.modal + 1,
              },
            },
            disableScrollLock: true,
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            slotProps: {
              paper: {
                elevation: 8,
              },
            },
          }}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'divider',
              borderRadius: 4,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            },
            backgroundColor: 'background.paper',
          }}
        >
          <MenuItem value="" disabled={required}>
            <Typography variant="body2" color="text.disabled">
              {placeholder}
            </Typography>
          </MenuItem>
          {loading ? (
            <MenuItem disabled>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  py: 1,
                }}
              >
                <CircularProgress size={24} />
              </Box>
            </MenuItem>
          ) : !Array.isArray(options) ? (
            <MenuItem disabled>
              <Typography sx={{ py: 1, textAlign: 'center', width: '100%' }}>
                {t('common.noResult')}
              </Typography>
            </MenuItem>
          ) : options.length === 0 ? (
            <MenuItem disabled>
              <Typography sx={{ py: 1, textAlign: 'center', width: '100%' }}>
                {t('common.noResult')}
              </Typography>
            </MenuItem>
          ) : (
            options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          )}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Box>
  );
};