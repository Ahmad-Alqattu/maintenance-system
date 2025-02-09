import React, { useState, useMemo, useEffect } from 'react';
import { 
  Box, Button, Typography, Tooltip,
  IconButton 
} from '@mui/material';
import * as XLSX from 'xlsx';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import { SearchableSelect } from '../../common/SearchableSelect';
import { lookupCategories, lookups, mainCategories, assetConstantsSubCategories } from '../../data/lookupData';
import AssetTypesForm from './forms/AssetTypesForm';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const LookupManagement = () => {
  const { t } = useTranslation();
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (selectedCategory) {
      setData(lookups[selectedCategory] || []);
    }
  }, [selectedCategory]);

  const handleMainCategoryChange = (value) => {
    setSelectedMainCategory(value);
    setSelectedCategory(null);
    setIsAddingNew(false);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
  };

  const handleCancel = () => {
    setIsAddingNew(false);
  };

  const handleSave = (formData) => {
    setData((prevData) => [...prevData, { ...formData, id: prevData.length + 1 }]);
    setIsAddingNew(false);
  };

  const handleEdit = (id) => {
    console.log('Edit:', id);
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    XLSX.writeFile(workbook, 'LookupData.xlsx');
  };

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, searchQuery]);

  const getColumns = () => {
    if (!selectedCategory || !data.length) return [];

    const sampleItem = data[0];
    const baseColumns = Object.keys(sampleItem)
      .filter(key => key !== 'id')
      .map(key => ({
        field: key,
        headerName: t(`labels.${key}`, { defaultValue: key }),
        flex: 1,
        headerClassName: 'table-header',
        headerAlign: 'center',
        align: 'center'
      }));

    return [
      { 
        field: 'id', 
        headerName: '#', 
        width: 70,
        headerClassName: 'table-header',
        headerAlign: 'center',
        align: 'center'
      },
      ...baseColumns,
      {
        field: 'actions',
        headerName: t('labels.actions'),
        width: 120,
        headerClassName: 'table-header',
        headerAlign: 'center',
        align: 'center',
        sortable: false,
        renderCell: (params) => [
          <GridActionsCellItem
            key="edit"
            icon={
              <Tooltip title={t('common.edit')}>
                <EditIcon color="primary" />
              </Tooltip>
            }
            label="Edit"
            onClick={() => handleEdit(params.row.id)}
          />,
          <GridActionsCellItem
            key="delete"
            icon={
              <Tooltip title={t('common.delete')}>
                <DeleteIcon color="error" />
              </Tooltip>
            }
            label="Delete"
            onClick={() => handleDelete(params.row.id)}
          />
        ]
      }
    ];
  };

  const columns = useMemo(() => getColumns(), [selectedCategory, t, data]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" textAlign={"center"} sx={{ mb: 4 }}>
        {t('titles.pageTitles.lookupManagement')}
      </Typography>

      {!isAddingNew && (
        <Box
          sx={{
            display: "flex",
            mb: 4,
            alignContent: 'center',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 2
          }}
        >
          <SearchableSelect
            sx={{ width: 300 }}
            label={t('labels.mainCategory')}
            options={mainCategories}
            value={selectedMainCategory}
            onChange={handleMainCategoryChange}
          />
          {selectedMainCategory === 'assetConstants' && (
            <SearchableSelect
              sx={{ width: 300 }}
              label={t('labels.selectCategory')}
              options={assetConstantsSubCategories}
              value={selectedCategory}
              onChange={handleCategoryChange}
            />
          )}
          {selectedMainCategory && selectedCategory && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddNew}
              sx={{
                mt: 1,
              }}
            >
              {t('labels.addNew')}
            </Button>
          )}
        </Box>
      )}

      {isAddingNew && <AssetTypesForm isAddMode={true} onSave={handleSave} onCancel={handleCancel} />}

      {selectedCategory ? (
        <Box>
          {!isAddingNew && (
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              {/* Add any additional elements here if needed */}
            </Box>
          )}
          <Box
            sx={{
              display: 'flex',
              mb: 2,
              alignContent: 'center',
              justifyContent: 'flex-end',
              gap: 2
            }}
          >
            <input
              type="text"
              placeholder={t('common.search', 'Search...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '8px',
                borderRadius: '8px',
                width: '200px',
                border: '1px solid #226BB2',
              }}
            />
            <Button
              variant="contained"
              color="success"
              onClick={exportToExcel}
              startIcon={<FileDownloadIcon sx={{ mx: 1 }} />}
            >
              {t('common.exportToExcel', 'To Excel')}
            </Button>
          </Box>

          <DataGrid
            rows={filteredData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            sx={{
              backgroundColor: 'rgb(255, 255, 255)',

              '& .table-header': {
                backgroundColor: 'primary.main',
                backgroundColor: 'rgba(0, 127, 195, 0.7)',

                color: 'rgb(255, 255, 255)',
                fontWeight: 'bold',
                fontSize: '1rem',
              },
   
              // '& .MuiDataGrid-cell:nth-child(odd)': {
              //   backgroundColor: 'rgba(255, 255, 255, 0.8)',
              // },
      
              '& .MuiDataGrid-row:nth-child(even)': {
                backgroundColor: 'rgba(16, 171, 255, 0.2)',
              },
              '& .MuiDataGrid-row:hover': {
                backgroundColor: 'rgba(0, 127, 195, 0.31)',
              },
            }}
            disableRowSelectionOnClick
            autoHeight
            pageSizeOptions={[5]}
            getRowClassName={(params) => `row-${params.row.status?.id}`}
          />
        </Box>
      ) : (
        <Typography variant="body1">
          Please select a category to view data.
        </Typography>
      )}
    </Box>
  );
};

export default LookupManagement;