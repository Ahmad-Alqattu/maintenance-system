// src/components/Header.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { useTranslation } from 'react-i18next';

const Header = ({ direction, onDirectionChange, onDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t, i18n } = useTranslation();

  return (
    <AppBar 
      position="fixed"
      elevation={0}
      sx={{ 
        backgroundColor: '#fff',
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onDrawerToggle}
            edge="start"
            sx={{ 
              mr: direction === 'rtl' ? 0 : 2,
              ml: direction === 'rtl' ? 2 : 0,
              color: 'primary.main'
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Box 
          component="img" 
          src="/logo.png" 
          alt="Logo"
          sx={{ 
            height: 73,
            mr: direction === 'rtl' ? 0 : 2,
            ml: direction === 'rtl' ? 2 : 0,
            py: 1.3
          }}
        />
        
        <Typography 
          variant="h5" 
          noWrap 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            color: 'text.primary' 
          }}
        >
          {t('common.systemTitle')}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Button
            startIcon={<LanguageIcon sx={{ mx: 1 }} />}
            onClick={onDirectionChange}
            sx={{ 
              color: 'text.primary',
              borderRadius: 5,
              px: 2
            }}
          >
            {i18n.language === 'ar' ? 'EN' : 'عربي'}
          </Button>

          <IconButton sx={{ color: 'orange', bgcolor: 'primary.transparent' }}>
            <NotificationsIcon />
          </IconButton>

          <IconButton sx={{ color: 'primary.main', bgcolor: 'primary.transparent' }}>
            <SettingsIcon />
          </IconButton>

          <IconButton sx={{ color: 'primary.main', bgcolor: 'primary.transparent' }}>
            <PersonIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;