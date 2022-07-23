import React from 'react'
import { useNavigate,Outlet } from "react-router-dom";

const Private = ({ auth: { isAuthenticated }}) => {
  const Navigate=useNavigate();
  return isAuthenticated ? <Outlet /> : <Navigate href="/Login" />;
};

export default Private;