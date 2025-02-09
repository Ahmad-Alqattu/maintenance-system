import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { DropZone } from '../common/FileUpload/DropZone';
import { FilePreview } from '../common/FileUpload/FilePreview';
import { useTranslation } from 'react-i18next';

const FileUploadSection = () => {
  const [uploadingFiles, setUploadingFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [pausedFiles, setPausedFiles] = useState(new Set());

  const handleFileSelect = (files) => {
    // Simulate file upload
    files.forEach(file => {
      setUploadingFiles(prev => [...prev, {
        file,
        progress: 0,
        id: Date.now()
      }]);

      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        if (!pausedFiles.has(file)) {
          progress += 5;
          setUploadingFiles(prev => 
            prev.map(item => 
              item.file === file 
                ? { ...item, progress } 
                : item
            )
          );

          if (progress >= 100) {
            clearInterval(interval);
            setUploadingFiles(prev => prev.filter(item => item.file !== file));
            setUploadedFiles(prev => [...prev, file]);
          }
        }
      }, 300);
    });
  };

  const handlePause = (file) => {
    setPausedFiles(prev => new Set(prev).add(file));
  };

  const handleResume = (file) => {
    setPausedFiles(prev => {
      const newSet = new Set(prev);
      newSet.delete(file);
      return newSet;
    });
  };

  const handleRemove = (file) => {
    setUploadingFiles(prev => prev.filter(item => item.file !== file));
    setUploadedFiles(prev => prev.filter(f => f !== file));
  };
  const { t } = useTranslation();


  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}> {t('fileUpload.attachments')} </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: 3
      }}>
        <Box sx={{ flex: '0 0 350px' }}>
          <DropZone onFileSelect={handleFileSelect} />
          <Typography 
            variant="caption" 
            sx={{ 
              display: 'block', 
              mt: 1,
              color: 'text.secondary',
              textAlign: 'center'
            }}
          >
            {t('fileUpload.supportedFormats')}
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          {(uploadingFiles.length > 0 || uploadedFiles.length > 0) && (
            <Paper 
              variant="outlined" 
              sx={{ 
                p: 2,
                maxHeight: '400px',
                overflowY: 'auto',
                bgcolor:"primary.body",
                border:'none'

              }}
            >
              {uploadingFiles.map(({ file, progress }) => (
                <FilePreview
                  key={file.name}
                  file={file} 
                  progress={progress}
                  onRemove={handleRemove}
                  onPause={() => handlePause(file)}
                  onResume={() => handleResume(file)}
                  isPaused={pausedFiles.has(file)}
                  isUploading={true}
                />
              ))}

              {uploadedFiles.map(file => (
                <FilePreview
                  key={file.name}
                  file={file}
                  onRemove={handleRemove}
                />
              ))}
            </Paper>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FileUploadSection;