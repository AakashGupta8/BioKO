import { Link } from "react-router-dom";
import './login.css'
import BayerLogo from "../Images/bayer-cross-black.png";
import { Box, TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <div className='bg-login' style={{ display: "flex" }}>
      <div style={{ flex: "0.5", position: "absolute", top: "36%", left: "20%" }}>
        <Box>
          <TextField id="filled-basic" label="Username" variant="outlined" className='textfield' />
        </Box>
        <Box>
          <TextField id="filled-basic" label="PassWord" variant="outlined" className='textfield' />

        </Box>
        <div>
          <Link to="/analyse" style={{ textDecoration: "none" }}> <button className="btn-login">Login</button></Link>
        </div>
      </div>
      <div style={{ flex: "0.5" }}>
        <img src={BayerLogo}
          alt="logo"
          style={{
            height: "14vh",
            top: "22%",
            right: "13%",
            position: "absolute",

        }} />
        <Typography className="title">BioKO</Typography>
      </div>
    </div>

  );
}
