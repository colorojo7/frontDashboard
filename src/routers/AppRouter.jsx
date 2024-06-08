import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";

import PublicRoute from "./PublicRoute";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../components/layouts/DashboardLayout";
import HomePage from "../pages/dashboard/HomePage";
import AccountPage from "../pages/dashboard/AccountPage";
import ShiftsPage from "../pages/dashboard/ShiftsPage";
import ShiftPage from "../pages/dashboard/ShiftPage";
import ReportsPage from "../pages/dashboard/ReportsPage";

import AdminPage from "../pages/admin/AdminPage";

import NotFoundPage from "../pages/NotFoundPage";

import roles from "../auth/roles";
import routes from "./routes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.landing} element={<LandingPage />} />
        <Route
          path={routes.login}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={routes.register}
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          path={routes.dashboard.home}
          element={
            <PrivateRoute>
              {/* will open the dashboard only if there is a user */}
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path={routes.dashboard.home} element={<HomePage />} />
          <Route path={routes.dashboard.settings} element={<AccountPage />} />
          <Route path={routes.dashboard.shifts} element={<ShiftsPage />} />
          <Route path={routes.dashboard.shift()} element={<ShiftPage />} />
          <Route path={routes.dashboard.reports} element={<ReportsPage />} />


          {/* routes for certains roles*/}
          <Route
            path={routes.dashboard.admin}
            element={
              // will show the page only if the user match the role
              <PrivateRoute role={roles.admin}>
                <AdminPage />
              </PrivateRoute>
            }
          >

          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
