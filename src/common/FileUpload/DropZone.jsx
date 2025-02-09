// src/components/common/FileUpload/DropZone.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useTranslation } from 'react-i18next';

export const DropZone = ({ 
  onFileSelect, 
  acceptedFileTypes = ".jpg,.png,.svg,.zip",
  multiple = false 
}) => {
  const { t } = useTranslation();
  const inputRef = React.useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = [...e.dataTransfer.files];
    onFileSelect(files);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileSelect = (e) => {
    const files = [...e.target.files];
    onFileSelect(files);
  };

  return (
    <Box
      sx={{
        border: '2px dashed #ccc',
        borderRadius: 4,
        p: 3,
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
          borderColor: 'primary.main',
          backgroundColor: 'rgba(0, 0, 0, 0.01)'
        }
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        type="file"
        hidden
        accept={acceptedFileTypes}
        multiple={multiple}
        onChange={handleFileSelect}
      />
      <CloudUploadIcon 
        sx={{ 
          fontSize: 48, 
          color: 'primary.main',
          mb: 1 
        }} 
      />
      <Typography sx={{ mb: 1 }}>
        {t('fileUpload.dragDrop')}
      </Typography>
      <Typography color="text.secondary" variant="body2" sx={{ mb: 2 }}>
        {t('fileUpload.or')}
      </Typography>
      <Button variant="outlined" color="primary">
        {t('fileUpload.browse')}
      </Button>
      <Typography variant="caption" display="block" sx={{ mt: 2, color: 'text.secondary' }}>
        {t('fileUpload.supportedFormats')}
      </Typography>
    </Box>
  );
};