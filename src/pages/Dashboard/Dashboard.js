import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { Button } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { MdDashboard, MdOutlineBusinessCenter, MdWorkspacesFilled } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { SiGoogleanalytics, SiProcessingfoundation } from "react-icons/si";
import logo from "../../assets/images/logo3.png";
import { CgCommunity, CgGhost, CgLogOut } from "react-icons/cg";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
import { GiOnTarget } from "react-icons/gi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaGift, FaWallet } from "react-icons/fa";
import { S39GlobalContext } from "../../contexts/S39GlobalContext";
import swal from "sweetalert";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const menuLinkStyles = ({ isActive }) => {
  return {
    backgroundColor: isActive ? "#1A1C33" : "",
  };
};

const drawerWidth = 280;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const { user, openWalletModal, closeWalletModal, logOut } = useContext(S39GlobalContext);
  // console.log(user)
  const navigate = useNavigate();


  const Logout = () => {
    logOut();
    // setOpen(false);
    navigate("/");
    closeWalletModal();
    swal({
      // title: "S",
      text: "You have successfully logged out.",
      icon: "success",
      button: "OK!",
      className: "modal_class_success",
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClose = () => {
    setMobileOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };

  const year = new Date().getFullYear();

  const drawer = (
    <div className="sideBar">
      {/* <Toolbar /> */}
      <div className="pt-3">
        <img className="mx-auto" src={logo} alt="" style={{ width: "200px" , height:"50px"}} />
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
            <MdDashboard size={20} />
          </span>
          DASHBOARD
        </NavLink>
        <br />
        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="admins"
        >
          {" "}
          <span className="navIconAdmin">
            <RiAdminFill size={20} />
          </span>
          ADMINS
        </NavLink>
        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="users"
        >
          {" "}
          <span className="navIconAdmin">
            <BiUserCircle color="#fff" size={20} />
          </span>
          USERS
        </NavLink>

        <div>
          <Button
            className="dashboardMenu text-start"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <span className="navIconAdmin">
              <MdOutlineBusinessCenter size={20} />
            </span>
            KYC
            <span className="ms-2">
              <BsFillCaretDownFill />
            </span>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose2}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }
            }
          >
            <Box sx={{ paddingRight: '30px' }}>
              <Link className="text-decoration-none" onClick={handleClose2} to="verified">
                <MenuItem sx={{ color: "black" }} value={10}>
                  Verified{" "}
                </MenuItem>
              </Link>
              <Link className="text-decoration-none" onClick={handleClose2} to="non-verified">
                <MenuItem sx={{ color: "black" }} value={20}>
                  Non Verified
                </MenuItem>
              </Link>
              <Link className="text-decoration-none" onClick={handleClose2} to="pending">
                <MenuItem sx={{ color: "black" }} value={30}>
                  Pending
                </MenuItem>
              </Link>
            </Box>
          </Menu>
        </div>

        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="reward"
        >
          {" "}
          <span className="navIconAdmin">
            <FaGift size={20} />
          </span>
          REWARD
        </NavLink>

        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="wallets"
        >
          {" "}
          <span className="navIconAdmin">
            <FaWallet size={20} />
          </span>
          WALLETS
        </NavLink>

        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="vote"
        >
          {" "}
          <span className="navIconAdmin">
            <CgCommunity size={20} />
          </span>
          COMMUNITY VOTE
        </NavLink>

        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="golas"
        >
          {" "}
          <span className="navIconAdmin">
            <GiOnTarget size={20} />
          </span>
          GOALS
        </NavLink>

        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="ngwb"
        >
          {" "}
          <span className="navIconAdmin">
            <SiGoogleanalytics size={20} />
          </span>
          NGWB
        </NavLink>
        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="portfound"
        >
          {" "}
          <span className="navIconAdmin">
            <SiProcessingfoundation size={20} />
          </span>
          PORTFOUND
        </NavLink>

        <NavLink
          className="dashboardMenu"
          style={menuLinkStyles}
          onClick={handleClose}
          to="hosting"
        >
          {" "}
          <span className="navIconAdmin">
            <CgGhost color="#fff" size={20} />
          </span>
          HOSTING
        </NavLink>
        <NavLink
          className="dashboardMenu text-uppercase"
          style={menuLinkStyles}
          onClick={handleClose}
          to="dashboardhowitworks"
        >
          {" "}
          <span className="navIconAdmin">
            <MdWorkspacesFilled color="#fff" size={20} />
          </span>
          How It Works
        </NavLink>
        <div className="mt-2">
          <Button
            onClick={Logout}
            sx={{
              borderRadius: "8px",
              background: "#FFC000",
              marginRight: "10px",
              fontWeight: "700",
              "&:hover": { background: "#FFC000" },
              color: '#2F3655',
              paddingLeft: '5px',
              marginBottom: '30px'
            }}
            variant="contained"
          >
            <BiLogOut className="ms-1 me-3" size={25} />
            Logout
          </Button>
        </div>
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
