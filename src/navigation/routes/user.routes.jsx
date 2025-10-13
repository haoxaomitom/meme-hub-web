import { Navigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import Login from "../../pages/Auth/LoginPage";
import Register from "../../pages/Auth/RegisterPage";

const userRoutes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
];

export default userRoutes;
