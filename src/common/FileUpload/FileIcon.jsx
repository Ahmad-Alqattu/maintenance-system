
// src/components/common/FileUpload/FileIcon.jsx
import React from 'react';
import {
  PictureAsPdf,
  Image,
  TextSnippet,
  InsertDriveFile,
  Archive,
  Description
} from '@mui/icons-material';

export const FileIcon = ({ fileType, sx = {} }) => {
  const getIcon = () => {
    switch (fileType?.toLowerCase()) {
      case 'pdf':
        return <PictureAsPdf sx={{ ...sx, color: '#F40F02' }} />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'svg':
        return <Image sx={{ ...sx, color: '#00C2FF' }} />;
      case 'doc':
      case 'docx':
        return <Description sx={{ ...sx, color: '#295391' }} />;
      case 'txt':
        return <TextSnippet sx={{ ...sx, color: '#7E7E7E' }} />;
      case 'zip':
      case 'rar':
        return <Archive sx={{ ...sx, color: '#FFB002' }} />;
      default:
        return <InsertDriveFile sx={{ ...sx, color: '#7E7E7E' }} />;
    }
  };

  return getIcon();
};
