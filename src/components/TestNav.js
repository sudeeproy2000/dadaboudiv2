import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { PiForkKnife } from "react-icons/pi";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { TabBar } from "antd-mobile";

import "../style/bottomNavigation.css";

function TestNav() {
  return (
    <div className="display-bottom">
      <TabBar>
        <Link to="/">
          <TabBar.Item icon={<IoHomeOutline />} title="Home" />
        </Link>
        <Link to="/menu">
          <TabBar.Item icon={<IoHomeOutline />} title="Home" />
        </Link>
        <Link to="/catering">
          <TabBar.Item icon={<IoHomeOutline />} title="Home" />
        </Link>
        <Link to="about">
          <TabBar.Item icon={<IoHomeOutline />} title="Home" />
        </Link>
      </TabBar>
    </div>
  );
}

export default TestNav;
