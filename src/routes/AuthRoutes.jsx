import AuthLayout from "~/layouts/AuthLayout";
import Login from "~/pages/Auth/Login/Login";

const AdminRoutes = () => {
  return {
    path: "/auth",
    element: <AuthLayout />,
    children: [{ path: "login", element: <Login /> }],
  };
};

export default AdminRoutes;
