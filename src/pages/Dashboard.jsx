import React from 'react';
import { Box, Paper, Typography, Grid, useTheme, Divider } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useTranslation } from 'react-i18next';

const StatCard = ({ icon: Icon, value, label }) => (
  <Paper elevation={1} sx={{
    p: 1.5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1,
    height: '100%',
    backgroundColor: 'background.paper',
    borderRadius: 2,
  }}>
    <Typography variant="body1" color="primary.main">{label}</Typography>
    <Divider sx={{ width: '100%', borderWidth:'2px ', borderColor: 'primary.light' }} />
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {Icon && <Icon sx={{ fontSize: 40, color: 'primary.main' }} />}
      <Typography variant="h5" component="div" fontWeight="bold">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </Typography>
    </Box>
  </Paper>
);

const SectionHeader = ({ title }) => (
  <Box sx={{ 
    backgroundColor: 'primary.main',
    color: 'white',
    p: 0.2,
    mb: 2.5,
    borderRadius: 1
  }}>
    <Typography textAlign='center' variant="h6">{title}</Typography>
  </Box>
);

const Dashboard = () => {
  const { t } = useTranslation();
  
  const sections = [
    {
      title: t('dashboard.sections.assets'),
      stats: [
        { label: t('dashboard.stats.totalAssetValue'), value: 4523000, icon: MonetizationOnIcon },
        { label: t('dashboard.stats.brokenAssets'), value: 22, icon: BusinessIcon },
        { label: t('dashboard.stats.activeAssets'), value: 75, icon: BusinessIcon },
        { label: t('dashboard.stats.totalAssets'), value: 97, icon: BusinessIcon }
      ]
    },
    {
      title: t('dashboard.sections.maintenance'),
      stats: [
        { label: t('dashboard.stats.maintenanceCosts'), value: 120700, icon: MonetizationOnIcon },
        { label: t('dashboard.stats.inProgressRequests'), value: 18, icon: BusinessIcon },
        { label: t('dashboard.stats.openRequests'), value: 7, icon: BusinessIcon },
        { label: t('dashboard.stats.totalRequests'), value: 25, icon: BusinessIcon }
      ]
    },
    {
      title: t('dashboard.sections.operations'),
      stats: [
        { label: t('dashboard.stats.operationalCosts'), value: 600000, icon: MonetizationOnIcon },
        { label: t('dashboard.stats.activeOperations'), value: 8, icon: BusinessIcon },
        { label: t('dashboard.stats.systemCount'), value: 3, icon: BusinessIcon },
        { label: t('dashboard.stats.totalUnits'), value: 9, icon: BusinessIcon }
      ]
    }
  ];

  return (
    <Box sx={{ px: 3 }}>
      {sections.map((section, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <SectionHeader title={section.title} />
          <Grid container spacing={3}>
            {section.stats.map((stat, statIndex) => (
              <Grid item xs={12} sm={6} md={3} key={statIndex}>
                <StatCard {...stat} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Dashboard;