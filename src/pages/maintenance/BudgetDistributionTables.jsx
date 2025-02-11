import React, { useState, useCallback, useEffect } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CustomTable } from '../../common/CustomTable';
const BudgetDistributionTables = ({ 
    totalBudget,
    vehiclesAllocated,
    heavyMachineryAllocated,
    computersAllocated 
  }) => {
  const { t } = useTranslation();
  const [vehiclesBudgetData, setVehiclesBudgetData] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });
  const [heavyMachineryBudgetData, setHeavyMachineryBudgetData] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });
  const [otherAssetBudgetData, setOtherAssetBudgetData] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });
  const [remainingBudget, setRemainingBudget] = useState(totalBudget);
  const [totalAllocated, setTotalAllocated] = useState(0);

  useEffect(() => {
    // Calculate the sum of all budget values
    const totalAllocatedValue =
      Object.values(vehiclesBudgetData).reduce((acc, val) => acc + val, 0) +
      Object.values(heavyMachineryBudgetData).reduce((acc, val) => acc + val, 0) +
      Object.values(otherAssetBudgetData).reduce((acc, val) => acc + val, 0);

    setTotalAllocated(totalAllocatedValue);
    // Update the remaining budget
    setRemainingBudget(totalBudget - totalAllocatedValue);
  }, [totalBudget, vehiclesBudgetData, heavyMachineryBudgetData, otherAssetBudgetData]);

  const maintenanceCategories = [
    { id: 1, type: t('labels.preventiveMaintenance') },
    { id: 2, type: t('labels.correctiveMaintenance') },
    { id: 3, type: t('labels.emergencyMaintenance') },
    { id: 4, type: t('labels.predictiveMaintenance') },
  ];

  const createTableData = useCallback(
    (data) => {
      return maintenanceCategories.map((category) => ({
        id: category.id,
        number: category.id,
        type: category.type,
        budget: data[category.id] || 0,
      }));
    },
    [maintenanceCategories, t]
  );

  const vehiclesTableData = createTableData(vehiclesBudgetData);
  const heavyMachineryTableData = createTableData(heavyMachineryBudgetData);
  const otherAssetsTableData = createTableData(otherAssetBudgetData);

  const handleVehiclesBudgetChange = (rowIndex, colField, value) => {
    const parsedValue = Math.max(0, Math.min(totalBudget, Number(value)));
    setVehiclesBudgetData((prevData) => {
      const newData = { ...prevData };
      newData[rowIndex + 1] = parsedValue;
      return newData;
    });
  };

  const handleHeavyMachineryBudgetChange = (rowIndex, colField, value) => {
    const parsedValue = Math.max(0, Math.min(totalBudget, Number(value)));
    setHeavyMachineryBudgetData((prevData) => {
      const newData = { ...prevData };
      newData[rowIndex + 1] = parsedValue;
      return newData;
    });
  };

  const handleOtherAssetsBudgetChange = (rowIndex, colField, value) => {
    const parsedValue = Math.max(0, Math.min(totalBudget, Number(value)));
    setOtherAssetBudgetData((prevData) => {
      const newData = { ...prevData };
      newData[rowIndex + 1] = parsedValue;
      return newData;
    });
  };

  const columns = [
    { field: 'number', headerName: t('labels.number'), width: '1fr' },
    { field: 'type', headerName: t('labels.maintenanceType'), width: '2fr' },
    {
      field: 'budget',
      headerName: t('labels.allocatedBudget'),
      width: '1fr',
      type: 'money',
      totalField: 'budget',
    },
  ];

  const headers = [t('labels.number'), t('labels.maintenanceType'), t('labels.allocatedBudget')];

  const TableSection = ({ title, data, onChange, allocatedBudget }) => (
    <Box sx={{ 
      bgcolor: 'background.paper',
      borderRadius: 5,
      boxShadow: 1,
      overflow: 'hidden'
    }}>
      <Box sx={{ 
        px: 2,
        pt: 2,
        // borderBottom: '1px solid',
        // borderColor: 'divider',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            flex: 1,
            color: 'primary.main',
            fontWeight: 'medium'
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label={t('labels.remainingBudget')}
            value={allocatedBudget - totalAllocated}
            disabled

            size="small"
            sx={{ bgcolor: 'background.default' }}
          />
          <TextField
            label={t('labels.allocatedBudget')} 
            value={allocatedBudget}
            disabled
            size="small"
            sx={{ bgcolor: 'background.default' }}
          />
        </Box>
      </Box>
      <CustomTable 
        columns={columns} 
        headers={headers} 
        rows={data} 
        onInputChange={onChange}
        showTotal={true}
      />
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <TableSection
        title={t('labels.vehicles')}
        data={vehiclesTableData}
        onChange={handleVehiclesBudgetChange}
        allocatedBudget={vehiclesAllocated}
      />
      <TableSection
        title={t('labels.heavyMachinery')}
        data={heavyMachineryTableData}
        onChange={handleHeavyMachineryBudgetChange}
        allocatedBudget={heavyMachineryAllocated}
      />
      <TableSection
        title={t('labels.computers')}
        data={otherAssetsTableData}
        onChange={handleOtherAssetsBudgetChange}
        allocatedBudget={computersAllocated}
      />
    </Box>
  );
};

export default BudgetDistributionTables;