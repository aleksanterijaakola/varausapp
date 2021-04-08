import React from 'react';
import * as CgIcons from "react-icons/cg";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Bookings',
        path: '/',
        icon: <BsIcons.BsBookmarkPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    }
]
