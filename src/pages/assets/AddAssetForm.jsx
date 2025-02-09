import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormInput } from '../../common/FormInput';
import  FileUploadSection  from '../../components/FileUploadSection';
import { formData } from '../../data/FormData';
import { CustomTable } from '../../common/CustomTable.js';
import {ActionButtons} from '../../common/ActionButtons';
import { FormSelect } from '../../common/FormSelect';
import SectionWrapper from '../../common/SectionWrapper';

const handleEstimatedChange = (index, value) => {
  // Implement the logic to handle estimated budget change
  console.log(`Estimated budget changed for row ${index}: ${value}`);
};
const columns = [
  { field: 'number', width: '50px', align: 'center' },
  { field: 'name', width: '1fr' },
  { 
    field: 'estimatedBudget', 
    width: '200px',
    type: 'input',
    renderInput: (value, index) => (
      <FormInput
        type="number"
        value={value}
        onChange={(e) => handleEstimatedChange(index, e.target.value)}
        sx={{ backgroundColor: 'white' }}
      />
    )
  },
  { 
    field: 'approvedBudget', 
    width: '200px',
    type: 'input',
    renderInput: (value, index) => (
      <FormInput
        type="number"
        value={value}
        // onChange={(e) => handleApprovedChange(index, e.target.value)}
        sx={{ backgroundColor: 'white' }}
      />
    )
  },
  { field: 'active', type: 'switch', width: '80px' }
];
  

const headers = ['الرقم', 'التصنيف', 'الموازنة التقديرية', 'الموازنة المعتمدة', ''];

const rows = [
  { number: 1, name: 'مرتبات', estimatedBudget: 1000, approvedBudget: 900, active: true },
  { number: 2, name: 'البدلات', estimatedBudget: 500, approvedBudget: 450, active: true }
];


const AddAssetForm = () => {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState({});


  const handleInputChange = (field) => (event) => {
    setFormValues(prev => ({ ...prev, [field]: event.target.value }));
  };

// Fix the handler to match FormSelect component expectations
const handleSelectChange = (field) => (event) => {  // Changed to accept event
  setFormValues(prev => ({
    ...prev,
    [field]: event.target.value  // Access value from event
  }));
};

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" textAlign={"center"} sx={{ mb: 4 }}>
        {t('titles.pageTitles.assetManagement')}
      </Typography>
      {/* <CustomTable
    headers={headers}
    columns={columns}
    rows={rows}
    showTotal={true}
    onSwitchChange={(index, value) => console.log(index, value)}
  /> */}
      {/* Basic Information */}
      <SectionWrapper title={t('titles.sections.basicInfo')}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>

            <FormInput
              label={t('labels.assetNumber')}
              value={formValues.assetNumber || ''}
              onChange={handleInputChange('assetNumber')}
              disabled
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>

            <FormInput
              label={t('labels.name')}
              value={formValues.name || ''}
              onChange={handleInputChange('name')}
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>

            <FormSelect
              label={t('labels.type')}
              options={Object.entries(formData.assetTypes).map(([value, label]) => ({
                value,
                label
              }))}
              value={formValues.type }
              onChange={handleSelectChange('type')}
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>

            <FormSelect
              label={t('labels.category')}
              options={Object.entries(formData.assetCategories.buildings).map(([value, label]) => ({
                value,
                label
              }))}
              value={formValues.category || ''}
              onChange={handleSelectChange('category')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>

            <FormSelect
              label={t('labels.subCategory')}
              value={formValues.subCategory || ''}
              options={Object.entries(formData.subCategories[formValues.category]|| {}).map(([value, label]) => ({
                value,
                label
              }))}
              onChange={handleSelectChange('subCategory')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormSelect
              label={t('labels.detailedCategory')}
              value={formValues.detailedCategory || ''}
              options={Object.entries(formData.detailedCategories[formValues.subCategory] || {}).map(([value, label]) => ({
                value,
                label
              }))}
              onChange={handleSelectChange('detailedCategory')}
              disabled={!formValues.subCategory}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormInput
              label={t('labels.assetCode')}
              value={formValues.code || ''}
              onChange={handleInputChange('code')}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <FormInput
              label={t('labels.description')}
              value={formValues.description || ''}
              onChange={handleInputChange('description')}
              multiline
              rows={1}
            />
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Administrative Details */}
      <SectionWrapper title={t('titles.sections.administrativeDetails')}>
      <Grid container spacing={3}>

        <Grid item xs={12} md={6} lg={4}>

          <FormSelect
            label={t('labels.location')}
            value={formValues.location || ''}
            onChange={handleSelectChange('location')}
            options={Object.entries(formData.locations).map(([value, label]) => ({
              value,
              label
            }))}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>

          <FormSelect
            label={t('labels.department')}
            value={formValues.department || ''}
            onChange={handleSelectChange('department')}
            options={Object.entries(formData.departments).map(([value, label]) => ({
              value,
              label
            }))}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormInput
            label={t('labels.gisCode')}
            value={formValues.gisCode || ''}
            onChange={handleInputChange('gisCode')}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <FormSelect
            label={t('labels.administrativeDependency')}
            value={formValues.administrativeDependency || ''}
            options={Object.entries(formData.administrativeDependencies || {}).map(([value, label]) => ({
              value,
              label
            }))}
            onChange={handleSelectChange('administrativeDependency')}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>

          <FormInput
            type="date"
            label={t('labels.purchaseDate')}
            value={formValues.purchaseDate || ''}
            onChange={handleInputChange('purchaseDate')}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>

          <FormInput
            label={t('labels.supplier')}
            value={formValues.supplier || ''}
            onChange={handleInputChange('supplier')}
            
          />
        </Grid>
        </Grid>
      </SectionWrapper>

      {/* Technical Details */}
      <SectionWrapper title={t('titles.sections.technicalDetails')}>
      <Grid container spacing={3}>

        <Grid item xs={12} md={6} lg={4}>

          <FormInput
            label={t('labels.model')}
            value={formValues.model || ''}
            onChange={handleInputChange('model')}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>

          <FormInput
            label={t('labels.serialNumber')}
            value={formValues.serialNumber || ''}
            onChange={handleInputChange('serialNumber')}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormSelect 
            label={t('labels.warrantyStatus')}
            value={formValues.warrantyStatus || ''}
            options={[
              { value: 'active', label: 'ساري' },
              { value: 'expired', label: 'منتهي' },
              { value: 'none', label: 'لا يوجد' }
            ]}
            onChange={handleSelectChange('warrantyStatus')}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <FormInput
            type="number"
            label={t('labels.defaultAge')}
            value={formValues.defaultAge || ''}
            onChange={handleInputChange('defaultAge')}
            InputProps={{
              endAdornment: <span>سنة</span>
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>

          <FormInput
            type="date"
            label={t('labels.warrantyEnd')}
            value={formValues.warrantyEnd || ''}
            onChange={handleInputChange('warrantyEnd')}
          />
        </Grid>
        </Grid>
      </SectionWrapper>

      {/* Financial Details */}
      <SectionWrapper title={t('titles.sections.financialDetails')}>
      <Grid container spacing={3}>

        <Grid item xs={12} md={6} lg={4}>

          <FormInput
            type="number"
            label={t('labels.originalValue')}
            value={formValues.originalValue || ''}
            onChange={handleInputChange('originalValue')}
           
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>

          <FormInput
            type="number"
            label={t('labels.currentValue')}
            value={formValues.currentValue || ''}
            onChange={handleInputChange('currentValue')}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>

          <FormSelect
            label={t('labels.fundingSource')}
            value={formValues.fundingSource || ''}
            onChange={handleSelectChange('fundingSource')}
            options={Object.entries(formData.fundingSources).map(([value, label]) => ({
              value,
              label
            }))}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormSelect
            label={t('labels.ownershipType')}
            value={formValues.ownershipType || ''}
            options={[
              { value: 'owned', label: 'ملك' },
              { value: 'rented', label: 'مستأجر' },
              { value: 'leased', label: 'مؤجر' }
            ]}
            onChange={handleSelectChange('ownershipType')}
          />
        </Grid>


        <Grid item xs={12} md={6} lg={4}>

          <FormInput
            type="number"
            label={t('labels.quantity')}
            value={formValues.quantity || ''}
            onChange={handleInputChange('quantity')}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>

          <FormSelect
            label={t('labels.unit')}
            value={formValues.unit || ''}
            onChange={handleSelectChange('unit')}
            options={Object.entries(formData.measurementUnits).map(([value, label]) => ({
              value,
              label
            }))}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>

          <FormInput
            type="number"
            label={t('labels.additionalCosts')}
            value={formValues.additionalCosts || ''}
            onChange={handleInputChange('additionalCosts')}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <FormInput
            label={t('labels.additionalNotes')}
            value={formValues.additionalNotes || ''}
            onChange={handleInputChange('additionalNotes')}

          />
        </Grid>
        </Grid>
      </SectionWrapper>
      <SectionWrapper title={t('titles.sections.acquisition')}>
      <Grid container spacing={3}>

          <Grid item xs={12} lg={4}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3,
              minWidth: '200px' 
            }}>
              <FormSelect
                label={t('labels.acquisitionMethod')}
                options={formData.acquisitionMethods.map(method => ({
                  value: method,
                  label: method
                }))}
                value={formValues.acquisitionMethod || ''}
                onChange={handleSelectChange('acquisitionMethod')}
              />
              
              <FormInput
                type="date"
                label={t('labels.acquisitionDate')}
                value={formValues.acquisitionDate || ''}
                onChange={handleInputChange('acquisitionDate')}
              />
              
              <FormInput
                type="number"
                label={t('labels.estimatedValue')}
                value={formValues.estimatedValue || ''}
                onChange={handleInputChange('estimatedValue')}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3,
              minWidth: '250px' 
            }}>
              <FormSelect
                label={t('labels.costCenter')}
                value={formValues.costCenter || ''}
                onChange={handleSelectChange('costCenter')}
              />
              
              <FormSelect
                label={t('labels.currency')}
                value={formValues.currency || ''}
                onChange={handleSelectChange('currency')}
              />
              
              <FormInput
                type="number"
                label={t('labels.acquisitionCost')}
                value={formValues.acquisitionCost || ''}
                onChange={handleInputChange('acquisitionCost')}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3,
              minWidth: '250px' 
            }}>
              <FormInput
                type="text"
                label={t('labels.assetStatus')}
                value={formValues.assetStatus || ''}
                onChange={handleInputChange('assetStatus')}
              />
              
              <FormInput
                label={t('labels.remainingLifespan')}
                value={formValues.remainingLifespan || ''}
                onChange={handleInputChange('remainingLifespan')}
                type="number"
              />
            </Box>
          </Grid>
          </Grid>
      </SectionWrapper>

      {/* Depreciation Section */}
      <SectionWrapper title={t('titles.sections.depreciation')}>
      <Grid container spacing={3}>

          <Grid item xs={12} lg={4}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3,
              minWidth: '250px' 
            }}>
              <FormSelect
                label={t('labels.depreciationMethod')}
                value={formValues.depreciationMethod || ''}
                onChange={handleSelectChange('depreciationMethod')}
              />
              
              <FormInput
                type="number"
                label={t('labels.depreciationRate')}
                value={formValues.depreciationRate || ''}
                onChange={handleInputChange('depreciationRate')}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3,
              minWidth: '250px' 
            }}>
              <FormInput
                type="number"
                label={t('labels.accumulatedDepreciation')}
                value={formValues.accumulatedDepreciation || ''}
                onChange={handleInputChange('accumulatedDepreciation')}
              />
              
              <FormInput
                type="number"
                label={t('labels.expectedUnits')}
                value={formValues.expectedUnits || ''}
                onChange={handleInputChange('expectedUnits')}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3,
              minWidth: '250px' 
            }}>
              <FormInput
                type="number"
                label={t('labels.bookValue')}
                value={formValues.bookValue || ''}
                onChange={handleInputChange('bookValue')}
                disabled
              />
            </Box>
          </Grid>
          </Grid>

      </SectionWrapper>
      {/* Attachments */}
      <SectionWrapper title={t('titles.sections.attachments')}>
        <Grid item xs={12}>
          <FileUploadSection />
        </Grid>
      </SectionWrapper>

      {/* Action Buttons */}
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
    </Box>
  );
};

export default AddAssetForm;