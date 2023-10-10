import React from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import MainDashboard from "../../components/MainDashboard";

const Dashboard = () => {
  return (
    <div style={{ height: '100vh', backgroundColor: '#f9f9f9'}}>
      <div className="flex" style={{ height: '100vh'}}>
        <SideBar />
        <MainDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
