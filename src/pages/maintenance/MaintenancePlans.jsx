import React, { useState } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { ActionButtons } from './../../common/ActionButtons';
import { ToggleSwitch } from './../../common/ToggleSwitch';
import { FormInput } from './../../common/FormInput';
import { FormSelect } from './../../common/FormSelect';
import FileUploadSection from '../../components/FileUploadSection';
import { SearchableSelect } from './../../common/SearchableSelect';
import { useTranslation } from 'react-i18next';

const AddOperationChecks = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({
    classification: '',
    operationUnit: '',
    operationYear: '',
    checkName: '',
    checksPerYear: '',
    implementationMethod: '',
    checkDescription: '',
    isActive: true
  });

  const handleChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleToggle = (event) => {
    setFormData(prev => ({
      ...prev,
      isActive: event.target.checked
    }));
  };

  const handleSave = () => {
    console.log('Form Data:', formData);
  };

  const handleCancel = () => {
    // Handle cancel action
  };

  return (
       <Box sx={{ 
      pX: { xs: 2, sm: 3 },
      backgroundColor: 'primary.body',
      maxWidth: '100%',
      overflow: 'hidden'
    }}>
      {/* عنوان الصفحة */}
      <Typography 
        variant={isMobile ? "h6" : "h5"} 
        sx={{ 
          borderBottom: '2px solid rgb(0, 90, 208)',
          pb: 1,
          mb: { xs: 2, sm: 4 },
          display: 'inline-block',
          fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }
        }}>        {t('operationChecks')}
      </Typography>

      <Typography 
        variant="subtitle1" 
        sx={{ 
          mb: 2, 
          fontWeight: 'bold',
          fontSize: { xs: '0.9rem', sm: '1rem' }
        }}>        {t('operationChecks.unitInfo.title')}
      </Typography>

      <Box sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        gap: { xs: 2, sm: 3 },
        mb: 3
      }}>
        <Box sx={{ 
          minWidth: { xs: '100%', sm: '280px' },
          flex: '1 1 280px'
        }}>
        <FormSelect
          label={t('operationChecks.unitInfo.fields.classification')}
          required
          value={formData.classification}
          onChange={handleChange('classification')}
            options={[
              { value: 's', label: 'Option 1' },
              { value: 'sd', label: 'Option 2' }
            ]}
        />
        </Box>

        <Box sx={{ 
          minWidth: { xs: '100%', sm: '280px' },
          flex: '1 1 280px'
        }}>
        <FormSelect
          label={t('operationChecks.unitInfo.fields.operationUnit')}
          required
          value={formData.operationUnit}
          onChange={handleChange('operationUnit')}
          options={[/*...*/]}
        />
        </Box>

        <Box sx={{ 
          minWidth: { xs: '100%', sm: '280px' },
          flex: '1 1 280px'
        }}>
        <SearchableSelect
          label={t('operationChecks.unitInfo.fields.title')}
          required
          onChange={handleChange('operationUnit')}
          options={[
              { value: 's', label: 'Option 1' },
              { value: 'sd', label: 'Option 2' }
            ]}
          />
        </Box>

        <Box sx={{ 
          minWidth: { xs: '100%', sm: '280px' },
          flex: '1 1 280px'
        }}>
          <FormSelect  required
            value={formData.operationYear}
            onChange={handleChange('operationYear')}
            options={[              { value: 's', label: 'Option 1' },
              { value: 'sd', label: 'Option 2' }]}
          />
        </Box>

        <Box sx={{ 
          minWidth: { xs: '100%', sm: '280px' },
          flex: '1 1 280px'
        }}>
          <FormInput
            label={t('operationChecks.checkName')}
            required
            value={formData.checkName}
            onChange={handleChange('checkName')}
          />
        </Box>

        <Box sx={{ 
          minWidth: { xs: '100%', sm: '280px' },
          flex: '1 1 280px'
        }}>
          <FormInput
            label={t('operationChecks.checksPerYear')}
            required
            type="number"
            value={formData.checksPerYear}
            onChange={handleChange('checksPerYear')}
          />
        </Box>

        <Box sx={{ 
          minWidth: { xs: '100%', sm: '280px' },
          flex: '1 1 280px'
        }}>
          <FormSelect
            label={t('operationChecks.implementationMethod')}
            value={formData.implementationMethod}
            onChange={handleChange('implementationMethod')}
            options={[/* your options */]}
          />
        </Box>
                </Box>

      <FormInput
        label={t('operationChecks.unitInfo.fields.checkDescription')}
        required
        multiline
        rows={isMobile ? 3 : 2}
        value={formData.checkDescription}
        onChange={handleChange('checkDescription')}
        fullWidth
        sx={{ mb: 3 }}
      />

      <Box sx={{ 
        mt: 2, 
        mb: 4,
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2
      }}>
      <ToggleSwitch
        label={t('common.enable')}
        checked={formData.isActive}
        onChange={handleToggle}
      />
      </Box>

      <Box sx={{ mb: 4 }}>
        <FileUploadSection />
      </Box>

      <ActionButtons 
        saveText={t('common.save')}
        cancelText={t('common.cancel')}
        onSave={handleSave}
        onCancel={handleCancel}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 1 }
        }}
      />
    </Box>
  );
};

export default AddOperationChecks;
