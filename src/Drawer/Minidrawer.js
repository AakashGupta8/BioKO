import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BayerLogo from "../Images/bayer-cross-black.png";
import { SidebarData } from "./SidebarData";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppContext } from "../App";
import Grid from "@mui/material/Grid";
import "./minidrawer.css";
import { Avatar, InputAdornment, Popover, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function MiniDrawer() {
  const { graphInfo, account, profilePicture } = React.useContext(AppContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openP = Boolean(anchorEl);
  const id = openP ? "simple-popover" : undefined;

  //   let useNavigate = useNavigate();
  const location = useLocation();
  const pathArr = location.pathname.split("/");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  if (pathArr[1] !== "Login" && pathArr[1] !== "") {
    return (
      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar style={{ backgroundColor: "white" }}>
              <IconButton
                // color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>

              <Link to="/home" style={{ paddingRight: "2%" }}>
                <img
                  src={BayerLogo}
                  alt="logo"
                  style={{
                    height: "5vh",
                  }}
                />
              </Link>
              <Typography variant="h4" noWrap component="div" style={{ color: "#5eb346" }}>BioKo</Typography>
              <Typography
                style={{ color: "black" }}
                // variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <TextField
                  id="input-with-sx"
                  placeholder="suche"
                  variant="outlined"
                  size="small"
                  style={{ width: "50%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* </Box> */}
              </Typography>
              <div>
                <Stack direction="row" spacing={2}>
                <Avatar src={profilePicture} />
                </Stack>
              </div>
              
              <Typography
                style={{ color: "black", paddingLeft: "1%", display: "flex" }}
                // variant="h6"
                noWrap
                component="div"
                // sx={{ flexGrow: 1 }}
              >
              {account?.name}

                <ExpandMoreIcon onClick={handleClick} />
                <Popover
                  id={id}
                  open={openP}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                 
                >
                  <Typography
                    sx={{ width: "25vh", height: "6vh" }}
                    component="div"
                    style={{border: "1px solid #1f1f1f", borderRadius: "5px"}}
                  >
                    <div className="logout-popover">
                  
                      <div className="logout-btn">
                        <Button endIcon={<LogoutIcon />} style={{color: "black"}}>Ausloggen</Button>
                      </div>
                    </div>
                  </Typography>
                </Popover>
              </Typography>
              
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {SidebarData.map((text, index) => (
                <ListItem
                  key={text}
                  component={Link}
                  target= {text.path === "https://bayersi.service-now.com/sp" ? "_blank" : ""}
                  to={text.path}
                  //   state={{ from: "Mehl" }}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    // onClick={() => handleListItemClick(text)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {text.icons}
                    </ListItemIcon>
                    <ListItemText
                      primary={text.title}
                      sx={{ opacity: open ? 1 : 0, color: "#1f1f1f" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1 }}>
            <DrawerHeader />
            {/* <Box component="main">
          {location.pathname === "/xy" ? <OffeneAufgaben /> : ""}
          {location.pathname === "/Ub" ? <OffeneAufgaben /> : ""}
        </Box> */}
          </Box>
        </Box>
      </div>
    );
  } else return null;
}
