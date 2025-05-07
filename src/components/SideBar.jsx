import { Logout } from "@mui/icons-material";
import { Button, Divider, Drawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const SideBar = ({ setOpen, open, handleLogout, toggleDrawer }) => {
  return (
    <>
      <section
        className={` ${
          open ? "w-[150px]" : "w-[50px]"
        } h-screen flex justify-between bg-green-100 flex-col items-start py-[20px] px-[10px]`}
      >
        <div className="flex justify-between w-full">
          {open && (
            <Typography
              variant="h6"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              TODO
            </Typography>
          )}
          <MenuIcon
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          />
        </div>
        <div
          className="flex justify-between w-full text-md cursor-pointer"
          onClick={handleLogout}
        >
          {open && "Logout"}
          <Logout />
        </div>
      </section>
    </>
  );
};

export default SideBar;
