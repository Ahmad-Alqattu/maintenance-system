// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
// import { UserDetailsContext } from '../context/UserDetailsContext';

const ProtectedRoute = ({ children }) => {
//   const { userDetails } = useContext(UserDetailsContext);
//   return userDetails.isAuthenticated ? children : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;