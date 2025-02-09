
// src/components/common/FileUpload/FilePreview.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  LinearProgress,
  Dialog,
  DialogContent,
  Tooltip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';
import { FileIcon } from './FileIcon';

export const FilePreview = ({ 
  file, 
  progress, 
  onRemove, 
  onPause, 
  onResume,
  isPaused = false,
  isUploading = false 
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  
  const fileType = file.name.split('.').pop();
  const isPreviewable = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'pdf'].includes(fileType?.toLowerCase());

  const handlePreview = () => {
    if (isPreviewable && !isUploading) {
      setPreviewOpen(true);
    }
  };

  const handleDownload = (e) => {
    e.stopPropagation();
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderPreviewContent = () => {
    if (fileType?.toLowerCase() === 'pdf') {
      return (
        <iframe
          src={URL.createObjectURL(file)}
          width="100%"
          height="600px"
          title="PDF Preview"
        />
      );
    }
    return (
      <img
        src={URL.createObjectURL(file)}
        alt={file.name}
        style={{ maxWidth: '100%', maxHeight: '80vh' }}
      />
    );
  };

  return (
    <>
      <Box
        onClick={handlePreview}
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 4,
          boxShadow: 1,
          p: 1.5,
          mb: 1.5,
          bgcolor: 'background.paper',
          display: 'flex',
          alignItems: 'center',
          cursor: isPreviewable ? 'pointer' : 'default',
          '&:hover': isPreviewable ? {
            bgcolor: 'action.hover'
          } : {}
        }}
      >
        <FileIcon fileType={fileType} sx={{ fontSize: 40, mr: 2 }} />
        
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body2" noWrap>
            {file.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {(file.size / (1024 * 1024)).toFixed(1)} MB
          </Typography>
          
          {isUploading && (
            <Box sx={{ mt: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
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
              <Typography variant="caption" color="text.secondary">
                {Math.round((100 - progress) / 3.33)} seconds remaining
              </Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {!isUploading && (
            <Tooltip title="Download">
              <IconButton size="small" onClick={handleDownload}>
                <DownloadIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
          
          {isUploading && (
            <Tooltip title={isPaused ? "Resume" : "Pause"}>
              <IconButton 
                size="small" 
                onClick={(e) => {
                  e.stopPropagation();
                  isPaused ? onResume(file) : onPause(file);
                }}
              >
                {isPaused ? <PlayArrowIcon fontSize="small" /> : <PauseIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
          )}
          
          <Tooltip title="Remove">
            <IconButton 
              size="small" 
              onClick={(e) => {
                e.stopPropagation();
                onRemove(file);
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Dialog
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent>
          {renderPreviewContent()}
        </DialogContent>
      </Dialog>
    </>
  );
};
