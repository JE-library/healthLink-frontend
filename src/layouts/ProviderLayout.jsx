import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../pages/provider/SideBar";
import PublicLayout from "./PublicLayout";

const ProviderLayout = () => {
  return (
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
  );
};

export default ProviderLayout;
