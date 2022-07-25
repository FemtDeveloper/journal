import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes";
import { JournalRoutes } from "../journal/routes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* login and register */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/* journalApp */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
