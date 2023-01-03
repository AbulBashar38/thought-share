import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <main className="grid grid-cols-5 ">
      <section className="bg-slate-500 h-screen">
        <Sidebar></Sidebar>
      </section>
      <section className="col-span-4 bg-gray-100">
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
