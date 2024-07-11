import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import "../style/bottomNavigation.css";

import { IoHomeOutline } from "react-icons/io5";
import { PiForkKnife } from "react-icons/pi";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="display-bottom">
      <Box sx={{ width: "auto" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className="bottom-tab-navigation"
        >
          <BottomNavigationAction
            component={Link} // Use Link for navigation
            to="/" // Specify the route
            label="Home"
            icon={<IoHomeOutline />}
          />
          <BottomNavigationAction
            component={Link} // Use Link for navigation
            to="/menu" // Specify the route
            label="Menus"
            icon={<PiForkKnife />}
          />
          <BottomNavigationAction
            component={Link} // Use Link for navigation
            to="/catering" // Specify the route
            label="Catering"
            icon={<MdOutlineFoodBank />}
          />
          <BottomNavigationAction
            component={Link} // Use Link for navigation
            to="/about" // Specify the route
            label="About Us"
            icon={<FaRegAddressBook />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
