import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormInput } from '../../common/FormInput';
import { SearchableSelect } from '../../common/SearchableSelect';
import { FormSelect } from '../../common/FormSelect';
import { formData } from '../../data/FormData';
import SectionWrapper from '../../common/SectionWrapper';
import {ActionButtons} from '../../common/ActionButtons';

const AssetReplacement = () => {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (field) => (event) => {
    setFormValues(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSelectChange = (field) => (value) => {
    setFormValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 4 }}>
        {t('titles.pageTitles.assetReplacement')}
      </Typography>

      {/* Old Asset Section */}
      <SectionWrapper title={t('labels.assetToReplace')}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <FormSelect
              label={t('labels.mainCategory')}
              value={formValues.oldMainCategory}
              onChange={handleSelectChange('oldMainCategory')}
              options={formData.assetCategories}
              placeholder={t('labels.chooseMainCategory')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormSelect
              label={t('labels.subCategory')}
              value={formValues.oldSubCategory}
              onChange={handleSelectChange('oldSubCategory')}
              options={formData.assetCategories}
              placeholder={t('labels.chooseSubCategory')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormSelect
              label={t('labels.detailedCategory')}
              value={formValues.oldDetailedCategory}
              onChange={handleSelectChange('oldDetailedCategory')}
              options={formData.assetCategories}
              placeholder={t('labels.chooseDetailedCategory')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormSelect
              label={t('labels.assetToReplace')}
              value={formValues.newDetailedCategory}
              onChange={handleSelectChange('assetToReplace')}
              options={formData.assetCategories}
              placeholder={t('labels.assetToReplace')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormInput
              label={t('labels.assetStatus')}
              value={formValues.oldAssetStatus}
              disabled
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormInput
              label={t('labels.bookValue')}
              value={formValues.oldBookValue}
              disabled
              type="number"
            />
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* New Asset Section */}
      <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 4, mb: 4 }} />

      <SectionWrapper title={t('labels.newAssetInformation')}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <FormSelect
              label={t('labels.mainCategory')}
              value={formValues.newMainCategory}
              onChange={handleSelectChange('newMainCategory')}
              options={formData.assetCategories}
              placeholder={t('labels.chooseMainCategory')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormSelect
              label={t('labels.subCategory')}
              value={formValues.newSubCategory}
              onChange={handleSelectChange('newSubCategory')}
              options={formData.assetCategories}
              placeholder={t('labels.chooseSubCategory')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormSelect
              label={t('labels.detailedCategory')}
              value={formValues.newDetailedCategory}
              onChange={handleSelectChange('newDetailedCategory')}
              options={formData.assetCategories}
              placeholder={t('labels.chooseDetailedCategory')}
            />

        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <FormSelect
              label={t('labels.newAsset')}
              value={formValues.newAsset}
              onChange={handleSelectChange('newAsset')}
              options={formData.newAsset}
              placeholder={t('labels.newAsset')}
            />
            </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormInput
            label={t('labels.assetStatus')}
            value={formValues.newAssetStatus}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormInput
            label={t('labels.bookValue')}
            value={formValues.newBookValue}
            disabled
            type="number"
          />
        </Grid>
      </Grid>
    </SectionWrapper>

      {/* Additional Information */ }
  <Grid container spacing={3}>
    <Grid item xs={12} md={6} lg={4}>
      <FormInput
        type="date"
        label={t('labels.replacementDate')}
        value={formValues.replacementDate}
        onChange={handleInputChange('replacementDate')}
      />
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      <FormInput
        label={t('labels.replacementReason')}
        value={formValues.replacementReason}
        onChange={handleInputChange('replacementReason')}
      />
    </Grid>
    <Grid item xs={12}>
      <FormInput
        label={t('labels.notes')}
        value={formValues.notes}
        onChange={handleInputChange('notes')}
        multiline
        rows={3}
      />
    </Grid>
  </Grid>
  {/* Action Buttons */ }
 <ActionButtons 
         saveText={t('common.save')}
         cancelText={t('common.cancel')}
        //  onSave={handleSave}
        //  onCancel={handleCancel}
         sx={{
           flexDirection: { xs: 'column', sm: 'row' },
           gap: { xs: 2, sm: 1 }
         }}
       />
    </Box >
  );
};

export default AssetReplacement;