import React from "react";
import * as CgIcons from "react-icons/cg";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Bookings",
    path: "/reserve",
    icon: <BsIcons.BsBookmarkPlus />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/dashboard",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <FiIcons.FiLogOut />,
    cName: "nav-text",
  },
];
