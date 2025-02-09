// LoginPage.jsx
import React from 'react';
import { 
  Box, 
  Container, 
  TextField, 
  Button, 
  Typography,
  InputAdornment,
  IconButton 
} from '@mui/material';
import AccountCircle from '@mui/icons-material/Person';
import Lock from '@mui/icons-material/Lock';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import '../theme/LoginPage.scss';

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box className="login-container">
     

      {/* Right Section */}
      <Container className="login-right">
        <Box className="login-form">
          <Typography variant="h4" className="welcome-text">
            مرحباً بك
          </Typography>
          <Typography variant="h6" className="login-text">
            تسجيل الدخول
          </Typography>

          <form>
          <TextField
    sx={{
          borderRadius: '25px', // Add border radius here
          '& .MuiOutlinedInput-root': {
            borderRadius: '25px', // Apply border radius to the input field
          }
        }}
        fullWidth
        placeholder="اسم المستخدم"
        variant="outlined"
        className="text-field"
        InputProps={{
          dir: 'rtl',
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
      />
            <TextField
             sx={{
          borderRadius: '25px', // Add border radius here
          '& .MuiOutlinedInput-root': {
            borderRadius: '25px', // Apply border radius to the input field
          }
        }}
        fullWidth
        type={showPassword ? 'text' : 'password'}
        placeholder="كلمة المرور"
        variant="outlined"
        className="text-field"
        InputProps={{
          dir: 'rtl',
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
            //   endAdornment: (
            //     <InputAdornment position="end">
            //       <IconButton onClick={handleTogglePassword} edge="end">
            //         {showPassword ? <VisibilityOff /> : <Visibility />}
            //       </IconButton>
            //     </InputAdornment>
            //   )
        }}
      />
            <Button 
              variant="contained" 
              fullWidth 
              className="submit-btn"
            >
              تسجيل دخول
            </Button>
          </form>
        </Box>
      </Container>
       {/* Left Section */}
      <Box className="login-left">
        <Box className="content">
          <Typography variant="h3" component="h1" className="title">
            نظام الصيانة والتشغيل
          </Typography>
          <Button variant="contained"  className="guide-btn">
            دليل المستخدم
          </Button>
        </Box>
        <Box className="circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
        </Box>
      </Box>    
    </Box>
    
  );
};

export default LoginPage;