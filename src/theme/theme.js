// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = {
  primary: {
    main: '#0072CE',
    light: '#3391d7',
    dark: '#005090',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#19857b',
    light: '#4aada3',
    dark: '#105d55',
    contrastText: '#ffffff',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
};

export const getTheme = (mode, direction) => {
  return createTheme({
    direction,
    palette: {
      mode,
      ...lightTheme,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            color: '#333333',
          },
        },
      },
    },
  });
};