import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const RequireKycAuth = ({ children }) => {

  const kycToken = localStorage.getItem("kycUserTokenS39Testnet")
  // console.log(kycToken);

  if (kycToken) {
    return <Outlet />;
  }
  return <Navigate to="/kyc/login" />;
}

export default RequireKycAuth