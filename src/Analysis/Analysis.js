import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

import "./analysis.css";
import EditIcon from "@mui/icons-material/Edit";
import Data from "./AnalysisData";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Analysis() {
  return (
    <Box component="main" className="analysis">
      <Grid container spacing={2}>
        <Grid xs={12} md={7.5}>
          <Paper className="analysis-options">
            <Typography className="option-text">
              {" "}
              Produkt :DHP
              <Button>
                <Link to="/analyseEdit">
                  {" "}
                  <EditIcon className="edit" />
                </Link>
              </Button>
            </Typography>
          </Paper>
          <Paper className="analysis-options">
            <Typography className="option-text">
              {" "}
              Fermenter:ZF6
              <Button>
                <EditIcon className="edit" />
              </Button>
            </Typography>
          </Paper>
          <Paper className="analysis-options">
            <Typography className="option-text">
              {" "}
              Stunde:26
              <Button>
                <EditIcon className="edit" />
              </Button>
            </Typography>
          </Paper>
          <Paper className="analysis-options">
            <Typography className="option-text">
              {" "}
              Proben-Id :226040000
              <Button>
                <EditIcon className="edit" />
              </Button>
            </Typography>
          </Paper>
          <Paper className="analysis-options">
            <Typography className="option-text">
              {" "}
              PO_Nr :99999999
              <Button>
                <EditIcon className="edit" />
              </Button>
            </Typography>
          </Paper>
          <Paper className="analysis-options">
            <Typography className="option-text">
              {" "}
              Dateinamen: DHP_HF6_226040000_26h_ I.czi,..
            </Typography>
          </Paper>

          <Link to="/analyseResult" style={{ textDecoration: "none" }}>
            {" "}
            <button className="btn-analyse">Analyse Starten</button>
          </Link>
        </Grid>

        <Grid xs={12} md={4}>
          <Box component="main" className="img-box">
            <Grid
              container
              spacing={2}
              style={{ margin: "14px 0px", width: "100%" }}
            >
              {Data.map((item) => {
                return (
                  <Grid item xs={5} style={{ margin: "0px 10px" }}>
                    <img className="sample-img" src={item.img} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Analysis;
