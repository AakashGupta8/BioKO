import { Link } from "react-router-dom";
import "./login.css";
import BayerLogo from "../Images/bayer-cross-black.png";
import { Box, TextField, Typography } from "@mui/material";
import { useWindowWidth } from "../hooks/useWindowWidth";
export default function Login() {
  const { isMobile } = useWindowWidth();
  return (
    <div
      className={!isMobile ? "bg-login" : "bg-login-mob"}
      style={{ display: "flex" }}
    >
      <div className={!isMobile ? "login-form" : "login-form-mob"}>
        <Box>
          <TextField
            id="filled-basic"
            label="Username"
            variant="outlined"
            className={!isMobile ? "textfield" : "textfield-mob"}
          />
        </Box>
        <Box>
          <TextField
            id="filled-basic"
            label="PassWord"
            variant="outlined"
            className={!isMobile ? "textfield" : "textfield-mob"}
          />
        </Box>
        <div>
          <Link to="/Home" style={{ textDecoration: "none" }}>
            {" "}
            <button className="btn-login">Login</button>
          </Link>
        </div>
      </div>
      <div style={{ flex: "0.5" }}>
        <img
          src={BayerLogo}
          alt="logo"
          className={!isMobile ? "login-logo" : "login-logo-mob"}
        />
        <Typography className={!isMobile ? "title" : "title-mob"}>
          BioKO
        </Typography>
      </div>
    </div>
  );
}
