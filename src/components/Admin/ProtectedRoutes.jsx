import React, { useEffect, useState } from "react";
import AccessDenied from "../../components/AccessDenied";

const ProtectedRoute = ({ children, apiEndpoint }) => {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    const checkBackendAccess = async () => {
      try {
        const res = await fetch(apiEndpoint, { method: "GET", credentials: "include" });
        if (res.status === 403) {
          setAuthorized(false);
        } else {
          setAuthorized(true);
        }
      } catch (error) {
        console.error("Error checking backend access:", error);
        setAuthorized(false);
      }
    };
    checkBackendAccess();
  }, [apiEndpoint]);

  if (authorized === null) return null; // Loading blank
  if (!authorized) return <AccessDenied />;
  return children;
};

export default ProtectedRoute;
