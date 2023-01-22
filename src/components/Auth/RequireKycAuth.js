import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { KycContext } from '../../contexts/KycContext';

const RequireKycAuth = ({ children }) => {

  const { kycUser } = useContext(KycContext);
  let location = useLocation();
  // console.log(admin.role)

  if (kycUser && kycUser !== null && kycUser !== undefined) {
    <Navigate to="/kyc" state={{ from: location }} />
    return children;
  }
  return <Navigate to="/kyc/login" state={{ from: location }} />;

}

export default RequireKycAuth