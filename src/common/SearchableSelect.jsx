import React, { useState, useRef } from 'react';
import {
  Box,
  TextField,
  FormControl,
  Typography,
  Paper,
  MenuItem,
  MenuList,
  CircularProgress,
  InputAdornment,
  Popper,
  ClickAwayListener,
  FormHelperText
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';
export const SearchableSelect = ({
  label,
  required = false,
  value = '',
  onChange,
  options = [],
  placeholder ,
  disabled = false,
  error = false,
  helperText = '',
  loading = false,
  size = 'medium',
  sx = {},
  direction = 'rtl'
}) => {
    const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const anchorRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value);
  const displayValue = selectedOption ? selectedOption.label : inputValue;
    if (!placeholder) {
    placeholder = t('common.selectOrSearch');

    }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setHighlightedIndex(-1);
    setOpen(true);
  };

  const handleOptionClick = (option) => {
    onChange(option.value);
    setInputValue('');
    setOpen(false);
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleKeyDown = (event) => {
    if (!open) {
      if (event.key === 'ArrowDown' || event.key === 'Enter') {
        setOpen(true);
        event.preventDefault();
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        setHighlightedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        event.preventDefault();
        break;
      case 'ArrowUp':
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : prev);
        event.preventDefault();
        break;
      case 'Enter':
        if (highlightedIndex >= 0) {
          handleOptionClick(filteredOptions[highlightedIndex]);
        }
        event.preventDefault();
        break;
      case 'Escape':
        setOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ mb: 2, ...sx }}>
      <Box sx={{ display: 'flex', mb: 1 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
        {required && (
          <Typography color="error" sx={{ ml: 0.5 }}>*</Typography>
        )}
      </Box>

      <FormControl fullWidth error={error}>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div>
            <TextField
              ref={anchorRef}
              fullWidth
              size={size}
              value={displayValue}
              onChange={handleInputChange}
              onFocus={() => setOpen(true)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={disabled}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {loading ? (
                      <CircularProgress size={20} />
                    ) : (
                      <KeyboardArrowDownIcon 
                        sx={{ 
                          transform: open ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s'
                        }} 
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  backgroundColor: 'background.paper',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                  '& input': {
                    textAlign: direction === 'rtl' ? 'right' : 'left',
                    direction: direction
                  }
                },
              }}
            />

            <Popper
              open={open && !disabled}
              anchorEl={anchorRef.current}
              placement="bottom-start"
              style={{
                width: anchorRef.current?.clientWidth,
                zIndex: 1300
              }}
            >
              <Paper 
                elevation={8}
                sx={{
                  maxHeight: 300,
                  overflow: 'auto',
                  mt: 1,
                  borderRadius: 3,
                  backgroundColor: 'background.paper',
                }}
              >
                <MenuList>
                  {loading ? (
                    <MenuItem disabled>
                      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', py: 1 }}>
                        <CircularProgress size={24} />
                      </Box>
                    </MenuItem>
                  ) : filteredOptions.length === 0 ? (
                    <MenuItem disabled>
                      <Typography sx={{ py: 1, textAlign: 'center', width: '100%' }}>
                        لا توجد نتائج
                      </Typography>
                    </MenuItem>
                  ) : (
                    filteredOptions.map((option, index) => (
                      <MenuItem
                        key={option.value}
                        onClick={() => handleOptionClick(option)}
                        selected={index === highlightedIndex}
                        sx={{
                          py: 1.5,
                          px: 2,
                          '&:hover': {
                            backgroundColor: 'action.hover',
                          },
                          '&.Mui-selected': {
                            backgroundColor: 'primary.light',
                            color: 'primary.contrastText',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                            },
                          },
                        }}
                      >
                        {option.label}
                      </MenuItem>
                    ))
                  )}
                </MenuList>
              </Paper>
            </Popper>
          </div>
        </ClickAwayListener>
        
        {helperText && (
          <FormHelperText>{helperText}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};