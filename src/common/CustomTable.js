import React from 'react';
import { Box, Typography, Switch, styled, TextField, InputAdornment } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Padding } from '@mui/icons-material';

// Custom styled switch with cyan color
const CyanSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#00D8C3',
    '&:hover': {
      backgroundColor: 'rgba(0, 216, 195, 0.08)',
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#00D8C3',
  },
}));

// Custom Table Row component
const TableRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  alignItems: 'center',
  minHeight: '48px',
  borderRadius: 2,
}));

// Styled wrapper for the custom input
const CustomTextField = styled(TextField)(({ theme }) => {
  const { i18n } = useTranslation();
  const direction = i18n.dir();

  return ({
    direction: direction,
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px',
      maxHeight: '48px',
      margin: '7px',
      width: '88%',
      paddingLeft: 0,
      overflow: 'hidden',
      '& fieldset': {
        borderColor: '#e0e0e0',
      },
      '&:hover fieldset': {
        borderColor: '#e0e0e0',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#e0e0e0',
      },
    },
    '& .MuiInputAdornment-root': {
      backgroundColor: '#20DAC5',
      height: '48px',
      maxHeight: '100%',
      width: 'auto', // Adjust width to content
      minWidth: '48px', // Ensure minimum width
      marginRight: direction === 'rtl' ? 0 : 'auto',
      marginLeft: direction === 'rtl' ? 'auto' : 0,
      borderRadius: direction === 'rtl' ? '0 20px 20px 0' : '20px 0 0 20px',
      justifyContent: 'center',
      color: 'white',
      fontSize: '.85rem',
      paddingLeft: '7px',
      paddingRight: '7px',

      fontWeight: 400,
      '& .MuiTypography-root': { // Style the Typography inside
        fontWeight: 'bold',
      }
    },
    '& input': {
      textAlign: 'right',
      paddingRight: '14px',
      direction: 'inherit',
    },
  });
});

// The component
const AmountInput = ({ value, onChange, currency = "ر.س", inputType = 'money' }) => {
  const theme = useTheme();
  const adornment = inputType === 'percentage' ? '%' : <Typography>{currency}</Typography>;

  return (
    <CustomTextField
      fullWidth
      type="number"
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {adornment}
          </InputAdornment>
        ),
      }}
    />
  );
};

export const CustomTable = ({
  headers = [],
  rows = [],
  columns = [],
  onSwitchChange,
  showSwitch = true,
  showTotal = true,
  currency = 'USD', // Default currency
  onInputChange
}) => {
  
  // Calculate grid template based on columns configuration
  const gridTemplate = columns.map(col => col.width || '1fr').join(' ');
// Inside your CustomTable component, modify handleInputChange:
const handleInputChange = (rowIndex, colField, value) => {
  if (typeof onInputChange === 'function') {
    onInputChange(rowIndex, colField, value);
  } else {
    console.log(`Value changed in row ${rowIndex}, column ${colField} to ${value}`);
  }
};

  const { i18n } = useTranslation();
  const direction = i18n.dir();
  const totalLabel = i18n.dir() === 'rtl' ? 'الاجمالي' : 'Total';

  return (
    <Box sx={{ width: '100%', mt: 2, p: 2, borderRadius: 5, overflow: 'hidden', boxShadow: 1, bgcolor: 'background.paper', direction: direction }}>
      {/* Header Row */}
      <TableRow
        sx={{
          gridTemplateColumns: gridTemplate,
          color: 'text.secondary',
          mb: 2,
          borderBottom: '2px solid', // Thicker border
          borderColor: 'primary.main', // Primary color
          pb: 1,
        }}
      >
        {headers.map((header, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{
              textAlign: 'center', // Center align header text
              color: 'primary.main',
              fontWeight: 'medium'
            }}
          >
            {header}
          </Typography>
        ))}
      </TableRow>

      {/* Data Rows */}
      {rows.map((row, rowIndex) => (
        <TableRow
          key={rowIndex}
          sx={{
            gridTemplateColumns: gridTemplate,
            backgroundColor: 'background.paper',
            borderBottom: '1px solid ', // Added bottom border
            borderColor: 'divider',
            px: 2,
            '&:hover': {
              borderRadius: 2,
              backgroundColor: 'action.hover',
            },
          }}
        >
          {columns.map((col, colIndex) => (
            <Box
              key={colIndex}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Center content
                textAlign: 'center', // Ensure text is centered
                width: '100%' // Take up the full width of the cell
              }}
            >
              {col.type === 'switch' ? (
                <CyanSwitch
                  checked={row[col.field] || false}
                  onChange={(e) => onSwitchChange?.(rowIndex, e.target.checked)}
                  size="small"
                />
              ) : col.type === 'money' || col.type === 'percentage' ? (
                <AmountInput
                  value={row[col.field] || ''}
                  onChange={(e) => handleInputChange(rowIndex, col.field, e.target.value)}
                  currency={currency}
                  inputType={col.type}
                />
              ) : (
                <Typography sx={{ color: 'text.primary' }}>
                  {row[col.field]}
                </Typography>
              )}
            </Box>
          ))}
        </TableRow>
      ))}

      {/* Total Row */}
      {showTotal && (
        <TableRow
          sx={{
            gridTemplateColumns: gridTemplate,
            backgroundColor: 'primary.lighter',
            borderRadius: 2,
            px: 2,
            mt: 2
          }}
        >
          {columns.map((col, colIndex) => (
            <Box
              key={colIndex}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Center content
                textAlign: 'center', // Ensure text is centered
                width: '100%' // Take up the full width of the cell
              }}
            >
              {col.field === 'type' ? (
                <Typography sx={{ fontWeight: 'bold' }}>{totalLabel}</Typography>
              ) : col.totalField ? (
                <CustomTextField
                  fullWidth
                  disabled
                  value={rows.reduce(
                    (acc, row) => acc + (Number(row[col.totalField]) || 0),
                    0
                  )}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        {col.type === 'percentage' ? '%' : <Typography>{currency}</Typography>}
                      </InputAdornment>
                    )
                  }}
                />
              ) : (
                <Typography sx={{ fontWeight: 'bold' }}>
                  {''}
                </Typography>
              )}
            </Box>
          ))}
        </TableRow>
      )}
    </Box>
  );
};