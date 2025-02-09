import React, { useState, useCallback } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  InputBase,
  Paper,
  IconButton,
  Box,
  Collapse,
  useMediaQuery,
  Toolbar,
  Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Build as BuildIcon,
  Search as SearchIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  AccountTree as AccountTreeIcon,
  Assessment as AssessmentIcon,
  Engineering as EngineeringIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const drawerWidth = 280;

// Menu configuration with keys and paths. The keys will be used to look up translations.
const menuItems = [
  {
    key: 'home',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    key: 'assets',
    icon: <AccountTreeIcon />,
    children: [
      { key: 'assets-register', path: '/assets-register' },
      { key: 'assets-replacement', path: '/assets-replacement' },
      // { key: 'assets-evaluate', path: '/assets/evaluate' },
      // { key: 'assets-reports', path: '/assets/reports' }
    ]
  },
  {
    key: 'maintenance',
    icon: <BuildIcon />,
    children: [
      { key: 'maintenance-plans', path: '/maintenance-plans' },
      { key: 'maintenance-schedule', path: '/maintenance/schedule' },
      { key: 'maintenance-log', path: '/maintenance/log' }
    ]
  },
  {
    key: 'operations',
    icon: <EngineeringIcon />,
    children: [
      { key: 'operations-plans', path: '/operations/plans' },
      { key: 'operations-schedules', path: '/operations/schedules' },
      { key: 'operations-reports', path: '/operations/reports' }
    ]
  },
  {
    key: 'reports',
    icon: <AssessmentIcon />,
    children: [
      { key: 'reports-performance', path: '/reports/performance' },
      { key: 'reports-cost', path: '/reports/cost' },
      { key: 'reports-status', path: '/reports/status' }
    ]
  },
  {
    key: 'settings',
    path: '/settings',
    icon: <SettingsIcon />,
    children: [
      { key: 'lookups', path: '/lookups' },

    ]
  }
];

const Sidebar = ({ open = false, direction, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [expandedItems, setExpandedItems] = useState({});

  // Toggle expand/collapse for menu items with children.
  const handleExpand = useCallback((key) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }, []);

  // Navigate if the item does not have children.
  const handleNavigation = (path, hasChildren = false) => {
    if (!hasChildren && path) {
      navigate(path);
      if (isMobile) {
        onClose();
      }
    }
  };

  // Provide keyboard support for accessibility.
  const handleKeyDown = (event, item) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (item.children) {
        handleExpand(item.key);
      } else if (item.path) {
        handleNavigation(item.path);
      }
    }
  };

  // Render each menu item (and its children if available).
  const renderMenuItem = (item) => {
    const isExpanded = expandedItems[item.key] || false;
    const title = t(`menu.${item.key}.title`, { defaultValue: item.key });
    const isActive = item.path && location.pathname === item.path;

    return (
      <React.Fragment key={item.key}>
        <ListItem
          button
          onClick={() => {
            if (item.children) {
              handleExpand(item.key);
            } else {
              handleNavigation(item.path);
            }
          }}
          onKeyDown={(e) => handleKeyDown(e, item)}
          tabIndex={0}
          aria-expanded={item.children ? isExpanded : undefined}
          aria-controls={item.children ? `${item.key}-children` : undefined}
          sx={{
            color: 'white',
            backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'inherit',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          <ListItemIcon sx={{ color: 'white' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText sx={{ textAlign: 'start' }} primary={title} />
          {item.children && (
            isExpanded
              ? <ExpandLessIcon aria-label={t('common.collapse', 'Collapse')} />
              : <ExpandMoreIcon aria-label={t('common.expand', 'Expand')} />
          )}
        </ListItem>

        {item.children && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding id={`${item.key}-children`}>
              {item.children.map(child => {
                const childTitle = t(`menu.${child.key}.title`, { defaultValue: child.key });
                const childActive = child.path && location.pathname === child.path;
                return (
                  <ListItem
                    key={child.key}
                    button
                    onClick={() => handleNavigation(child.path)}
                    onKeyDown={(e) => handleKeyDown(e, child)}
                    tabIndex={0}
                    sx={{
                      px: 5,
                      color: 'white',
                      backgroundColor: childActive ? 'rgba(255, 255, 255, 0.2)' : 'inherit',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    <ListItemText sx={{ textAlign: 'start' }} primary={childTitle} />
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        )}

        <Divider sx={{ borderColor: 'rgba(39, 181, 216, 0.52)', borderWidth: 1 }} />
      </React.Fragment>
    );
  };

  const drawerContent = (
<Box
  sx={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden', // Prevent inner scrolling
  }}
>



      <Toolbar />
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto', // Enable inner scroll
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '4px',
          }
        }}
      >
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
                color: 'white'
              }
            }}
            placeholder={t('common.search', 'Search...')}
            inputProps={{ 'aria-label': t('common.search', 'Search') }}
          />
        </Paper>

        <List>
          {menuItems.map(item => renderMenuItem(item))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        mt: '64px', // margin-top to account for AppBar height
      }}
    >
<Drawer
  variant={isMobile ? 'temporary' : 'permanent'}
  anchor={direction === 'rtl' ? 'right' : 'left'}
  open={isMobile ? open : true}
  onClose={onClose}
  sx={{
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.main,
      height: '100vh', 
      overflowY: 'hidden', // Prevent internal scrolling
      ...(isMobile
        ? { zIndex: theme.zIndex.drawer }
        : { position: 'fixed', border: 'none' }
      ),
    },
  }}
>

        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;