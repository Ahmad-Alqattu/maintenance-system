import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormInput } from '../../../common/FormInput';
import { CustomTable } from '../../../common/CustomTable';
import { ActionButtons } from '../../../common/ActionButtons';

const AssetTypesForm = ({ data = [], isAddMode = false, onSave, onCancel, onEdit, onDelete }) => {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState({
    code: '',
    nameAr: '',
    nameEn: ''
  });

  const handleInputChange = (field) => (event) => {
    setFormValues(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSave = () => {
    onSave?.(formValues);
    setFormValues({ code: '', nameAr: '', nameEn: '' });
  };

  if (isAddMode) {
    return (
      <Box sx={{ 
      borderRadius:4,
      p: 3,
      mx: 'auto',
      border: '1px solid',
      borderColor: 'primary.light',
      mb:3,
      boxShadow: 3,
      }}>
      <Typography 
        variant="h6" 
        align="center" 
        sx={{ 
        mb: 3, 
        pb: .5, 
        borderBottom: '2.5px solid',
        borderColor: 'primary.main',
        width: 'fit-content',
        mx: 'auto'
        }}
      >
      
        {t('titles.sections.assetTypeForm')}
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12} md={4}>
        <FormInput
          label={t('labels.nameAr')}
          value={formValues.nameAr}
          onChange={handleInputChange('nameAr')}
          required
        />
        </Grid>
        <Grid item xs={12} md={4}>
        <FormInput
          label={t('labels.nameEn')}
          value={formValues.nameEn}
          onChange={handleInputChange('nameEn')}
          required
        />
        </Grid>
        <Grid item xs={12} md={4}>
        <FormInput
          label={t('labels.code')}
          value={formValues.code}
          onChange={handleInputChange('code')}
          required
        />
        </Grid>
      </Grid>

      <ActionButtons 
        onSave={handleSave} 
        onCancel={onCancel} 
        sx={{ justifyContent: 'flex-end' }} 
      />
      </Box>
    );
  }

  const columns = [
    { field: 'code', width: '1fr' },
    { field: 'nameAr', width: '1fr' },
    { field: 'nameEn', width: '1fr' }
  ];

  const headers = [t('labels.code'), t('labels.nameAr'), t('labels.nameEn')];

  return (
    <CustomTable
      headers={headers}
      columns={columns}
      rows={data}
      showActions={true}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default AssetTypesForm;