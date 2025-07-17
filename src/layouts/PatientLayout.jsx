import React from "react";
import { Outlet } from "react-router";

const PatientLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PatientLayout;
