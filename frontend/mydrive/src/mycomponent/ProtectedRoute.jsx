import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [isAuthenticated, setIsAuthenticated] = useState(null);

 
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/getLoginStatus.json`, {
      method: 'GET',
      credentials: 'include'
    })
      .then((res) => setIsAuthenticated(res.ok))
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) {
    return <div className="text-center mt-5">Checking session...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />; 
}

export default ProtectedRoute;