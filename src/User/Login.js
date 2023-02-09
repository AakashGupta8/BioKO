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
        <Typography variant="h3" className="left-heading">Login</Typography>
        <Typography variant="caption" className="left-sub-heading">Login um  Klbioko zu starten</Typography>
        <Box>
          <TextField
            id="filled-basic"
            label="CWID"
            variant="outlined"
            className={!isMobile ? "textfield" : "textfield-mob"}
            style={{marginTop: "5%"}}
            size="small"
          />
        </Box>
        <Box>
          <TextField
            id="filled-basic"
            label="Passwort"
            type="password"
            variant="outlined"
            className={!isMobile ? "textfield" : "textfield-mob"}
            size="small"
          />
        </Box>
        <div>
          <Link to="/user/table-analyse" style={{ textDecoration: "none" }}>
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
        <Typography variant="h1" className={!isMobile ? "title1" : "title-mob1"}>
          Kl
        </Typography>
        <Typography variant="h1" className={!isMobile ? "title" : "title-mob"}>
          bioko
        </Typography>
        <Typography variant="h6" className={!isMobile ? "sub-title" : "sub-title-mob"}>
          Kl fur biologische kontaminationen
        </Typography>
      </div>
    </div>
  );
}
