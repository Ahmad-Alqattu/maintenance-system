// src/pages/assets/AssetsListPage.jsx
import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import PageLayout from '../../components/layout/PageLayout';

const AssetsListPage = () => {
  const { t } = useTranslation();
  
  const breadcrumbs = [
    { label: t('menu.home.title'), href: '/' },
    { label: t('menu.assets.title'), href: '/assets' },
    { label: t('screens.assets.title'), active: true }
  ];

  const actions = (
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      onClick={() => {/* handle add */}}
    >
      {t('common.add')}
    </Button>
  );

  return (
    <PageLayout
      title={t('screens.assets.title')}
      subtitle={t('screens.assets.sections.details')}
      breadcrumbs={breadcrumbs}
      actions={actions}
    >
      {/* Your page content goes here */}
      Content goes here...
    </PageLayout>
  );
};

export default AssetsListPage;