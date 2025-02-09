// src/components/RedirectToHomeIfAuthenticated.jsx
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
// import { UserDetailsContext } from '../context/UserDetailsContext';

const RedirectToHomeIfAuthenticated = ({ children }) => {
//   const { userDetails } = useContext(UserDetailsContext);
//   return userDetails.isAuthenticated ? <Navigate to="/" /> : children;
};

export default RedirectToHomeIfAuthenticated;