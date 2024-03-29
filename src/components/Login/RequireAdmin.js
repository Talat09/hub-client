import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import { signOut } from "firebase/auth";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const navigate = useNavigate();
  const location = useLocation();
  if (loading || adminLoading) {
    return <LoadingSpinner />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!admin) {
    localStorage.removeItem("accessToken");
    signOut(auth);
    return navigate("/login");
  }
  return children;
};

export default RequireAdmin;
