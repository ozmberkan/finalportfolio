import React from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "~/components/Auth/AuthHeader";

const AuthLayout = () => {
  return (
    <div className="flex flex-col flex-grow min-h-screen">
      <AuthHeader />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
