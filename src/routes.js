import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// import Attachment from "./pages/Attachment";
// import PostSettings from "./pages/PostSettings";
// import Settings from "./pages/Settings";

// const Login = React.lazy(() => import("./pages/Login"));
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
              aaa
            </ProtectedRoute>
          ),
        },
        // {
        //   path: "file",
        //   element: (
        //     <ProtectedRoute redirectPath="/login" isAllowed={isLogin}>
        //       <Attachment />
        //     </ProtectedRoute>
        //   ),
        // },
        // {
        //   path: "setting",
        //   element: (
        //     <ProtectedRoute redirectPath="/login" isAllowed={isLogin}>
        //       <Settings />
        //     </ProtectedRoute>
        //   ),
        // },
        // {
        //   path: "update-setting",
        //   element: (
        //     <ProtectedRoute redirectPath="/login" isAllowed={isLogin}>
        //       <PostSettings />
        //     </ProtectedRoute>
        //   ),
        // },
        // {
        //   path: "setting-script",
        //   element: (
        //     <ProtectedRoute redirectPath="/login" isAllowed={isLogin}>
        //       <h1>setting script</h1>
        //     </ProtectedRoute>
        //   ),
        // },
        // {
        //   path: "charts",
        //   element: (
        //     <ProtectedRoute redirectPath="/login" isAllowed={isLogin}>
        //       <h1>charts</h1>
        //     </ProtectedRoute>
        //   ),
        // },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/",
    //   element: <LayoutDashBoard />,
    //   children: [{ path: "/", element: <Navigate to="/dashboard/user" /> }],
    // },
    // { path: "*", element: <h1>404</h1> },
  ]);
}
