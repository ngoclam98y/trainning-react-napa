import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Attachment from "./pages/Attachment";

const Login = React.lazy(() => import("./pages/Login"));
const LayoutDashBoard = React.lazy(() => import("./layouts/dashboard"));
const UserPage = React.lazy(() => import("./pages/User"));

function ProtectedRoute({ isAllowed, redirectPath = "/login", children }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return children;
}

export default function Router() {
  const isLogin = JSON.parse(window.localStorage.getItem("isLogin")) || false;
  return useRoutes([
    {
      path: "/dashboard",
      element: <LayoutDashBoard />,
      children: [
        {
          path: "user",
          element: (
            <ProtectedRoute redirectPath="/login" isAllowed={isLogin}>
              <UserPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "file",
          element: (
            <ProtectedRoute redirectPath="/login" isAllowed={isLogin}>
              <Attachment />
            </ProtectedRoute>
          ),
        },
        {
          path: "setting",
          element: (
            <ProtectedRoute redirectPath="/login" isAllowed={isLogin}>
              <h1>Setting</h1>
            </ProtectedRoute>
          ),
        },
        {
          path: "update-setting",
          element: (
            <ProtectedRoute redirectPath="/login" isAllowed={isLogin}>
              <h1>Update setting</h1>
            </ProtectedRoute>
          ),
        },
        {
          path: "setting-script",
          element: (
            <ProtectedRoute redirectPath="/login" isAllowed={isLogin}>
              <h1>setting script</h1>
            </ProtectedRoute>
          ),
        },
        {
          path: "charts",
          element: (
            <ProtectedRoute redirectPath="/login" isAllowed={isLogin}>
              <h1>charts</h1>
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <LayoutDashBoard />,
      children: [{ path: "/", element: <Navigate to="/dashboard/user" /> }],
    },
    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
