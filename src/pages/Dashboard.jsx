import { Logout } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    localStorage.setItem("token", "false");
    navigate("/");
  };
  return (
    <>
      <section className="flex h-screen">
        <SideBar toggleDrawer={toggleDrawer} setOpen={setOpen} open={open} handleLogout={handleLogout}/>
        <Outlet/>
      </section>
    </>
  );
};

export default Dashboard;
