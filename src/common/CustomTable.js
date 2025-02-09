import React from 'react';
import { Box, Typography, Switch, styled } from '@mui/material';

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
  '&:not(:last-child)': {
    marginBottom: theme.spacing(1),
  },
}));

export const CustomTable = ({
  headers = [],
  rows = [],
  columns = [],
  onSwitchChange,
  showSwitch = true,
  showTotal = false
}) => {
  // Calculate grid template based on columns configuration
  const gridTemplate = columns.map(col => col.width || '1fr').join(' ');

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      {/* Header Row */}
      <TableRow
        sx={{
          gridTemplateColumns: gridTemplate,
          color: 'text.secondary',
          mb: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          pb: 1
        }}
      >
        {headers.map((header, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{
              textAlign: columns[index]?.align || 'left',
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
            borderRadius: 2,
            px: 2,
            '&:hover': {
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
                justifyContent: col.align === 'right' ? 'flex-end' : 'flex-start'
              }}
            >
              {col.type === 'switch' ? (
                <CyanSwitch
                  checked={row[col.field] || false}
                  onChange={(e) => onSwitchChange?.(rowIndex, e.target.checked)}
                  size="small"
                />
              ) : col.type === 'input' ? (
                col.renderInput?.(row[col.field], rowIndex)
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
                justifyContent: col.align === 'right' ? 'flex-end' : 'flex-start'
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                {col.totalField ? rows.reduce((acc, row) => acc + (row[col.totalField] || 0), 0) : ''}
              </Typography>
            </Box>
          ))}
        </TableRow>
      )}
    </Box>
  );
};

// Usage Example:
