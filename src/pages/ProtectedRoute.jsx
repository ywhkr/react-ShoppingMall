import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../store";

export default function ProtectedRoute({ children, requireAdmin }) {
  const [user] = useRecoilState(userState);

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
