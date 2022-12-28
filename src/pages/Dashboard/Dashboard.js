import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { Button } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { MdDashboard } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FcLeft } from "react-icons/fc";
import { SiGoogleanalytics, SiProcessingfoundation } from "react-icons/si";
import logo from "../../assets/images/logo3.png";
import { CgCommunity, CgGhost } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { GiOnTarget } from "react-icons/gi";
import { FaGift, FaWallet } from "react-icons/fa";

const menuLinkStyles = ({ isActive }) => {
  return {
    backgroundColor: isActive ? "#1A1C33" : "",
  };
};

const activeClass = "bg-primary";

const drawerWidth = 280;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClose = () => {
    setMobileOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    handleClose();
    setAnchorEl(null);
  };

  const year = new Date().getFullYear();

  const drawer = (
    <div className="sideBar">
      {/* <Toolbar /> */}
      <div className="pt-3">
        <img className="mx-auto" src={logo} alt="" style={{ width: "220px" }} />
      </div>
      <hr />
      <div className="menuDiv">
        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="dashboard"
        >
          <span className="navIconAdmin">
            <MdDashboard style={{ fontSize: "20px" }} />
          </span>
          DASHBOARD
        </NavLink>
        <br />

        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="/dashboard/reward"
        >
          {" "}
          <span className="navIconAdmin">
            <FaGift style={{ fontSize: "20px" }} />
          </span>
          REWARD
        </NavLink>
        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="/dashboard/admins"
        >
          {" "}
          <span className="navIconAdmin">
            <RiAdminFill style={{ fontSize: "20px" }} />
          </span>
          ADMINS
        </NavLink>

        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="/dashboard/wallets"
        >
          {" "}
          <span className="navIconAdmin">
            <FaWallet style={{ fontSize: "20px" }} />
          </span>
          WALLETS
        </NavLink>

        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="/dashboard/vote"
        >
          {" "}
          <span className="navIconAdmin">
            <CgCommunity style={{ fontSize: "20px" }} />
          </span>
          COMMUNITY VOTE
        </NavLink>

        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="/dashboard/golas"
        >
          {" "}
          <span className="navIconAdmin">
            <GiOnTarget style={{ fontSize: "20px" }} />
          </span>
          GOALS
        </NavLink>

        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="/dashboard/ngwb"
        >
          {" "}
          <span className="navIconAdmin">
            <SiGoogleanalytics style={{ fontSize: "20px" }} />
          </span>
          NGWB
        </NavLink>
        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="/dashboard/portfound"
        >
          {" "}
          <span className="navIconAdmin">
            <SiProcessingfoundation style={{ fontSize: "20px" }} />
          </span>
          PORTFOUND
        </NavLink>

        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="/dashboard/hosting"
        >
          {" "}
          <span className="navIconAdmin">
            <CgGhost color="#fff" style={{ fontSize: "20px" }} />
          </span>
          HOSTING
        </NavLink>
        <button className="text-white border-0 text-start text-uppercase" style={{background: 'transparent'}}>
          <span className="navIconAdmin">
            <BiLogOut style={{ fontSize: "20px" }} />
          </span>
          Logout
        </button>
        <div style={{ height: "5vh" }}></div>
        <Link className="text-decoration-none" to="/">
          <Button
            sx={{
              borderRadius: "10px",
              background: "#FFC000",
              color: "#000",
              marginRight: "10px",
              fontWeight: "700",
              "&:hover": { background: "#FFC000" },
            }}
            variant="contained"
          >
            {" "}
            <FcLeft />
            Back to Home{" "}
          </Button>
        </Link>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const menuToggle = () => {
    const toggleMenu = document.querySelector(".adminProfile");
    toggleMenu.classList.toggle("active");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="dashboardNav">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <FormatAlignLeftIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="dashboardTopBar"
          >
            <h4 className="dashboardTitlehidden">Dashboard</h4>
            {/* <div className="profile">
              <div className="imgDashDiv" onClick={menuToggle}>
                <img src={currentAdmin.avatar} alt="" />
              </div>
            </div> */}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#272d47",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#272d47",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        className=" dashboardDiv"
      >
        <Toolbar />
        <div className="contentAllDiv">
          <div className="outletContainer">
            <Outlet />
          </div>
          <div className="copyrightAdmin mt-4 ">
            <p className="my-2">© {year} S39 Global. All rights reserved.</p>
          </div>
        </div>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
