import React from 'react';
import { Box, Typography, IconButton, LinearProgress } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloseIcon from '@mui/icons-material/Close';
import PauseIcon from '@mui/icons-material/Pause';

export const UploadProgress = ({ 
  file, 
  progress, 
  onCancel,
  onPause 
}) => {
  return (
    <Box
     
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <InsertDriveFileIcon sx={{ mr: 1 }} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body2" noWrap>
            {file.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {(file.size / (1024 * 1024)).toFixed(1)} MB
          </Typography>
        </Box>
        <IconButton size="small" onClick={onPause}>
          <PauseIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={onCancel}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1, mr: 1 }}>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#0039ff'
              }
            }}
          />
        </Box>
        <Typography variant="caption" color="text.secondary">
          {progress}%
        </Typography>
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
        {Math.round((100 - progress) / 3.33)} seconds remaining
      </Typography>
    </Box>
  );
};
