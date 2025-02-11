// src/App.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './i18n/config';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '@fontsource/cairo/300.css';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/500.css';
import '@fontsource/cairo/600.css';
import '@fontsource/cairo/700.css';
import './index.css';  // or './App.css'
// Pages
import Dashboard from './pages/Dashboard';
import MaintenancePlans from './pages/maintenance/MaintenancePlans';
import AddAssetForm from './pages/assets/AddAssetForm';
import LookupManagement from './pages/assets/LookupManagement';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';
import AssetReplacement from './pages/assets/AssetReplacement';
import CreateFinancialYear from './pages/maintenance/CreateFinancialYear';

function App() {
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState(i18n.dir());

  useEffect(() => {
    document.body.dir = direction;
  }, [direction]);

  const theme = createTheme({
    direction,
    palette: {
      background: {
        default: '#F5F7FA',
        paper: '#FFFFFF',
      },
      primary: {
        main: '#226BB2',
        light: 'rgb(17, 132, 219)',
        dark: '#005090',
        contrastText: '#ffffff',
        body: '#F5F7FA',
        transparent: 'rgba(206, 224, 228, 0.25)',
        footer: '#EEEEEE',
      },
      text: {
        primary: '#333333',
        secondary: '#4F4F4F',
        disabled: '#BDBDBD',
      },
    },
    typography: {
      fontFamily: direction === 'rtl' ? '"Cairo"' : '"Roboto"',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 500 },
      h6: { fontWeight: 400 },
      body1: { fontWeight: 500 },
      body2: { fontWeight: 700 },
      button: { fontWeight: 600 }
    }
  });

  const toggleDirection = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    setDirection(newLang === 'ar' ? 'rtl' : 'ltr');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Public route - Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected routes with MainLayout */}
          <Route element={<MainLayout direction={direction} onDirectionChange={toggleDirection} />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/maintenance-plans" element={<MaintenancePlans />} />
            <Route path="/assets-register" element={<AddAssetForm />} />  
            <Route path="/assets-replacement" element={<AssetReplacement />} />  
            <Route path="/lookups" element={<LookupManagement />} />
            <Route path="/create-financial-year" element={<CreateFinancialYear />} />


            {/* Add more routes as needed */}
            
            {/* Redirect unknown routes to dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;