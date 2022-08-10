import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes";
import { FirebaseAuth } from "../firebase/config";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { JournalRoutes } from "../journal/routes";
import { login, logout } from "../store/auth/authSlice";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {
  const { status } = useCheckAuth();
  if (status === "checking") return <CheckingAuth />;

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
