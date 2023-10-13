import { List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const menu = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Purchase", path: "/purchase" },
  { title: "Inventory", path: "/inventory" },
  { title: "Transactions", path: "/transactions" },
  { title: "Reports", path: "/reports" },
];

const settings = [{ title: "Settings" }, { title: "Help" }];
const SideBar = () => {
  return (
    <div className="bg-[#7C41F5]" style={{ width: 240 }}>
      <div className="flex p-2">Inventory App</div>
      <List>
        {menu.map((menuItem) => (
          <ListItem disablePadding>
            <ListItemButton>
              <NavLink to={menuItem.path} className="p-4 text-white">
                {menuItem.title}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <hr className="my-14" />
      <div className="block">
        {settings.map((menuItem) => (
          <div className="p-4 text-white">{menuItem.title}</div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
