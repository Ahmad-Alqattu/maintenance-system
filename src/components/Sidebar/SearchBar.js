// src/components/Sidebar/SearchBar.jsx
import React from 'react';
import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <Paper
      component="form"
      sx={{
        m: 2,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.17)',
        borderRadius: 5,
        border: 'none',
        boxShadow: 'none',
      }}
    >
      <IconButton type="button" sx={{ p: '10px', color: 'white' }}>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          borderRadius: 1,
          px: 1,
          py: 0.5,
          color: 'white',
          '& .MuiInputBase-input::placeholder': {
            border: 'none'
          }
        }}
        placeholder={t('common.search')}
      />
    </Paper>
  );
};

export default SearchBar;