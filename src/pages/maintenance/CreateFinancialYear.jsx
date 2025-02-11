import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormSelect } from '../../common/FormSelect';
import { FormInput } from '../../common/FormInput';
import { CustomTable } from '../../common/CustomTable';
import SectionWrapper from '../../common/SectionWrapper';
import { ActionButtons } from '../../common/ActionButtons';
import { ToggleSwitch } from '../../common/ToggleSwitch';
import BudgetDistributionTables from './BudgetDistributionTables'; // Import the new component
import { MarginTwoTone } from '@mui/icons-material';

const CreateFinancialYear = () => {
  const { t } = useTranslation();
  const [copyPreviousData, setCopyPreviousData] = useState(false);
  const [formData, setFormData] = useState({});
  const [totalBudget, setTotalBudget] = useState(100000); // Example total budget
  // Convert the rows into state so that changes update the UI.
  const [tableRows, setTableRows] = useState([
    { number: 1, type: t('labels.vehicles'), allocatedBudget: 0, actualBudget: 0 },
    { number: 2, type: t('labels.heavyMachinery'), allocatedBudget: 0, actualBudget: 0 },
    { number: 3, type: t('labels.computers'), allocatedBudget: 0, actualBudget: 0 },
    { number: 4, type: t('labels.buildings'), allocatedBudget: 0, actualBudget: 0 },
  ]);

  const handleToggleChange = (event) => {
    setCopyPreviousData(event.target.checked);
  };

  const handleSelectChange = (field) => (event) => {
    setFormData(prev => ({ ...prev, [field]: event.target.value }));
  };

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({ ...prev, [field]: event.target.value }));
  };

  const handleSave = () => {
    
  };

  // Update the columns definition to include the totalField property for columns that need a total.
  const columns = [
    { field: 'number', width: '.3fr', align: 'center' },
    { field: 'type', width: '1fr' },
    { field: 'TotalBudget', width: '1fr', type: 'money', totalField: 'TotalBudget' },
    { field: 'BudgetForMaintenance', width: '1fr', type: 'money', totalField: 'BudgetForMaintenance' },
  ];

  const headers = [
    t('labels.number'),
    t('labels.classification'),
    t('labels.TotalBudget'),
    t('labels.BudgetForMaintenance')
  ];

  const handleTableInputChange = (rowIndex, colField, value) => {
    const newRows = [...tableRows];
    newRows[rowIndex] = { ...newRows[rowIndex], [colField]: value };
    setTableRows(newRows);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h5" textAlign="center">
          {t('titles.pageTitles.createNewFinancialYear')}
        </Typography>
      </Box>

      <SectionWrapper title={t('titles.sections.copyPreviousData')}>
        <br />
        <ToggleSwitch
          label={t('labels.copyPreviousData')}
          checked={copyPreviousData}
          onChange={handleToggleChange}
        />
        {copyPreviousData && (
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} md={4}>
              <FormSelect
                label={t('labels.previousYear')}
                value={formData.previousYear}
                onChange={handleSelectChange('previousYear')}
                options={[]} // Replace with actual options
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormSelect
                label={t('labels.budget')}
                value={formData.budget}
                onChange={handleSelectChange('budget')}
                options={[]} // Replace with actual options
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormSelect
                label={t('labels.financialYear')}
                value={formData.financialYear}
                onChange={handleSelectChange('financialYear')}
                options={[]} // Replace with actual options
              />
            </Grid>
          </Grid>
        )}
      </SectionWrapper>

      <SectionWrapper title={t('titles.sections.newFinancialYear')}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FormSelect
              label={t('labels.financialYear')}
              value={formData.financialYear}
              onChange={handleSelectChange('financialYear')}
              options={[]} // Replace with actual options
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              label={t('labels.totalBudget')}
              value={totalBudget}
              disabled
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormSelect
              label={t('labels.currency')}
              value={formData.currency}
              onChange={handleSelectChange('currency')}
              options={[]} // Replace with actual options
            />
          </Grid>
          <Grid item xs={12}>
            <FormInput
              label={t('labels.description')}
              value={formData.description}
              onChange={handleInputChange('description')}
            />
          </Grid>
        </Grid>
      </SectionWrapper>

      <CustomTable
        headers={headers}
        columns={columns}
        rows={tableRows}
        onInputChange={handleTableInputChange}
        showTotal={true}
/>
         <Button variant="contained" sx={{ my: 3 }} color="primary" onClick={handleSave}>
    {t('common.save')}
  </Button>
  {/* Calculate remaining budget */}
  {(() => {
    const allocatedBudget = tableRows.reduce((sum, row) => sum + Number(row.allocatedBudget || 0), 0);
    const remainingBudget = totalBudget - allocatedBudget;

    return (
      <SectionWrapper title={t('titles.sections.budgetDistribution')}>
        <BudgetDistributionTables
          totalBudget={remainingBudget}
          vehiclesAllocated={tableRows[0].allocatedBudget}
          heavyMachineryAllocated={tableRows[1].allocatedBudget}
          computersAllocated={tableRows[2].allocatedBudget}
        />
      </SectionWrapper>
    );
  })()}
<Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
        <ActionButtons
          saveText={t('common.save')}
          cancelText={t('common.cancel')}
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 1 }
          }}
        />

      </Box>
    </Box>
  );
};

export default CreateFinancialYear;