// src/components/BreadcrumbsNav.jsx
import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { useTranslation} from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';

const BreadcrumbsNav = () => {
      const { i18n } = useTranslation();
    
  const  isRTL  = i18n.dir()=== 'rtl';
  const location = useLocation();
  const { t } = useTranslation();
  function IconWithTriangle() {
    return (
        <Box
        sx={{
          position: 'relative',
          display: 'inline-block',

          mx: 0.5,
          [isRTL ? 'ml' : 'mr']: 3,
        }}
      >
        {/* الحاوية الأساسية (مستطيل أو مربع) */}
        <Box
          sx={{
            p: 0.5,
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'background.paper',
          }}
        >
          <HomeIcon sx={{ fontSize: 24 }} />
        </Box>
        {/* المثلث على الجانب */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '16px solid transparent',
            borderBottom: '16px solid transparent',
            // بناءً على اتجاه اللغة نقوم بتحديد موقع المثلث وتلوينه
            ...(isRTL
              ? {
                  left: -12,
                  borderRight: '12px solid',
                  borderRightColor: 'primary.main',
                }
              : {
                  right: -12,
                  borderLeft: '12px solid',
                  borderLeftColor: 'primary.main',
                }),
          }}
        />
      </Box>
    );
  }
  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    
    const breadcrumbs = [
      {
        label: t('menu.home.title'),
        path: '/',
        icon: IconWithTriangle(),
      }
    ];

    let currentPath = '';
    let n = 0;
    let translationKey = '';
    let currentname = '';

    pathnames.forEach((name) => {

        n++;
        !(currentname==="")? currentname  += '.'+name: currentname  += name ;
      currentPath += `/${name}`;
      // Convert path to translation key
       translationKey = `menu.${currentname}.title`;
    
      // Check if we have a translation for this path
      const label = t(translationKey);
      
      breadcrumbs.push({
        label,
        path: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <Box 
      sx={{ 
        backgroundColor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        borderRadius: 2,
        px: 1,
        py: 1.5,
        mx: 3,
        mt: 2.5,
      }}
    >
      <Breadcrumbs>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return isLast ? (
            <Typography 
              key={breadcrumb.path}
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                color: 'primary.main',
                fontWeight: 'medium'
              }}
            >
              {breadcrumb.icon}
              {breadcrumb.label}
            </Typography>
          ) : (
            <Link
              key={breadcrumb.path}
              component={RouterLink}
              to={breadcrumb.path}
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                textDecoration: 'none',
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                  textDecoration: 'underline'
                }
              }}
            >
              {breadcrumb.icon}
              {breadcrumb.label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsNav;