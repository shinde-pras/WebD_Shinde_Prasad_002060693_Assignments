import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { green } from "@mui/material/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../actions/userActions";

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      onClick={(event) => {
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      {...props}
      sx={{
        fontFamily: "'Roboto', sans-serif",
        color: "black",
        "&.Mui-selected": {
          color: green[500],
          borderBottom: `2px solid ${green[500]}`,
        },
      }}
    />
  );
}

const Header = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(loginSuccess({ email: "", type: "", token: "" }));
    handleMenuClose();
    navigate("/login");
  };

  return (
    <div style={{ position: "relative" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          role="navigation"
          aria-label="header tabs"
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            borderBottom: "1px solid #ccc",
            "& .MuiTab-root": {
              fontFamily: "'Roboto', sans-serif",
              color: "black",
              "&.Mui-selected": {
                color: green[500],
                borderBottom: `2px solid ${green[500]}`,
              },
              "&:hover": {
                color: green[500],
                borderBottom: `2px solid ${green[500]}`,
              },
            },
          }}
        >
          <Tab label="Home" component={Link} to="/home" />
          <Tab label="About" component={Link} to="/about" />
          <Tab label="Jobs" component={Link} to="/jobs" />
          <Tab label="Companies" component={Link} to="/companies" />
        </Tabs>

        <IconButton
          onClick={handleMenuOpen}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
            color: "black",
          }}
        >
          <AccountCircleIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </AppBar>
    </div>
  );
};

export default Header;