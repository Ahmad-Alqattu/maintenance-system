import React, { useState } from 'react';
import {
  Drawer,
  List,
  Box,
  useMediaQuery,
  Toolbar
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { menuItems } from './menuConfig';
import SidebarItem from './SidebarItem';
import SearchBar from './SearchBar';

const drawerWidth = 280;

const Sidebar = ({ open, direction }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expandedItems, setExpandedItems] = useState({});

  const handleExpand = (key) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const drawerContent = (
    <Box sx={{ height: '100%' }}>
      <Toolbar />
      <Box>
        <SearchBar />
        <List>
          {menuItems.map(item => (
            <SidebarItem
              key={item.key}
              item={item}
              isExpanded={expandedItems[item.key]}
              onExpand={handleExpand}
            />
          ))}
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
        mt: '64px',
      }}
    >
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor={direction === 'rtl' ? 'right' : 'left'}
        open={isMobile ? open : true}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: theme.palette.primary.main,
            top: '60px',
            height: 'calc(100% - 60px)',
            ...(isMobile ? {
              zIndex: (theme) => theme.zIndex.drawer
            } : {
              position: 'fixed',
              border: 'none'
            }),
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;