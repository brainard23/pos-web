import React from "react";
import SideBar from "../../components/SideBar";
import Topbar from "../../components/Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#f9f9f9" }}>
      <div className="flex" style={{ height: "100vh" }}>
        <SideBar />
        <div>
          <div>
            <Topbar />
          </div>
          <div className="m-6">
             <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
